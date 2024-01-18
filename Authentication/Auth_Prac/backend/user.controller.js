import bcrypt from "bcrypt";
import { User } from "./user.modal.js";

const SECRET_KEY = "RAJIPAJI"; // should be safe in environment variables
import jwt from "jsonwebtoken"; 

const registerUser = async (req, res) => {
  const { email, username, password } = req.body;
  const existinguser = await User.findOne({ email }).lean();

  if (existinguser) {
    res.status(400).json({ message: "User already exist" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await User.create({
      username,
      email,
      password: hashedPassword,
    });

    console.log("New User Added");
    res.status(200).json({ message: "User created Successfully !" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "There was some problem creating user" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const existinguser = await User.findOne({ email }).lean()
  if (!existinguser) {
    res.status(400).json({ message: "User does not exist" });
  }

  try {
    const userHashedPassword = existinguser.password;
    const isValid = await bcrypt.compare(password, userHashedPassword);

    if (!isValid)
      res.status(400).json({ message: "Please recheck your password" });

    const token = jwt.sign(
      {
        email,
      },
      SECRET_KEY,
      {
        expiresIn: "1h",
      }
    );

    console.log("Logging in User");

    res.status(200).json({
      token,
      message: "Your are Logged In !",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
};

const getUsers = async (req, res) => {
  try {
    const token = req.headers.authorization;
    
    if (!token)
      res
        .status(400)
        .json({ message: "Invalid token, you gotta log in to get your token" });

    const isVerified = jwt.verify(token, SECRET_KEY);

    if (!isVerified)
      res
        .status(400)
        .json({ message: "Invalid token, you gotta log in to get your token" });

    const users = await User.find({}).lean();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "There was some problem in our servers" });
  }
};

export { registerUser, loginUser, getUsers };

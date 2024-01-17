const mongoose = require("mongoose");

//  STEP 1
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  Password: String,
̦},{collection : "FuduUser"});

// STEP 2
// whatever i put as first arguement gets added as with an 
// example if i put in Use it gets to Uses

const User = mongoose.model("fuduusermaateri", userSchema);

async function main() {
  // STEP 0
  await mongoose.connect(
    "mongodb+srv://rajessvee:Raj%40150602@cluster0.ym2iwci.mongodb.net/Fudu"
  );

  // STEP 3
  const user = new User({
    name: "Rajpreet Singh",
    email: "rajessvee@gmail.com",
    Password: "Wrong file",
  });

  // STEP 4
  user.save().then(() => console.log("done"));
}

main();

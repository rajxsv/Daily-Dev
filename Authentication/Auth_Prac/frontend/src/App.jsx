import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState();
  const [message, setMessage] = useState();

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setMessage("No Token");
          return;
        }

        const response = await axios.get("http://localhost:4000/api/v1/users", {
          headers: {
            Authorization: token,
          },
        });

        if (response.status == 200) {
          setData(response.data);
          setMessage("Hello logged in user");
        } else {
          setData("");
          setMessage("Log In to see list");
        }
      } catch (error) {
        console.log("There was some issue");
      }
    };
    fetchData();
  }, []);

  // console.log(data);

  return (
    <>
      <div className="flex h-svh flex-col justify-evenly items-center">
        <h1 className="font-mono text-6xl">Auth</h1>
        <div className="flex w-full justify-center text-2xl gap-10 items-center">
          <Link className="font-medium text-black hover:underline" to="/signup">
            Sign Up
          </Link>
          <Link className="font-medium text-black hover:underline" to="/login">
            Log In
          </Link>
        </div>

        <div className="overflow-scroll p-7 bg-slate-100">
          Heres your protected data ! {message}
          {data
            ? data.map((item, index) => {
                return <p className="" key={index}>{item.username}</p>;
              })
            : ""}
        </div>
      </div>
    </>
  );
}

export default App;

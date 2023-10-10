import React, { useState } from "react";
import "./login.css";

import supabase from "../supabaseHander/GetTestdat";
const Loginn = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionUser, setsessionUser] = useState(false);
  const [user, setUser] = useState(null);
  async function signInWithEmail() {
    await supabase.auth.sendEmailVerification("khatamionik@gmail.com");
    const { data, error } = await supabase.auth.signInWithOtp({
      email: "khatamionik@gmail.com",
      options: {
        emailRedirectTo: "http://localhost:5173/members",
      },
    });

    console.log(data, "email send ..... check", data);
  }

  const makeDecision = async (e) => {
    setIsLoading(true);

    const { data, error } = await supabase
      .from("member")
      .select() //or whatever u want////
      .eq("ID", 1);
    console.log("checking!!!");
    if (error) {
      console.log(error);
    }

    console.log(data);
    e.preventDefault;
    setIsLoading(false);
  };

  return (
    <div className="lgn_container h-[80vh] bg-primary flex pl-4 pr-4  ">
      <div className="imageDiv sm:block  display-none">
        <div className="logIntro"></div>
        <h1>
          Lets <span>Login</span> to Join the <span>Thread!!</span>
        </h1>
        {/* <img
          src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9naW4lMjBzY3JlZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
          srcset=""
        /> */}
      </div>
      <div className="loginDiv">
        <h1>Login</h1>
        <div className="form">
          <div>
            <input
              className="log_email"
              onChange={(e) => {
                setName(e.target.value);
                console.log(name);
              }}
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <input
              className="log_pass"
              onChange={(e) => {
                setPass(e.target.value);
                console.log(pass);
              }}
              type="text"
              placeholder="Enter your password"
            />
          </div>
          <button
            onClick={(e) => {
              makeDecision(e);
            }}
            className="lgn_btn"
          >
            Login
          </button>
          <button
            onClick={(e) => {
              signInWithEmail();
            }}
            className="lgn_btn"
          >
            sendAuth2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loginn;

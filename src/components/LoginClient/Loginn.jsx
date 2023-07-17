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
    <div className="lgn_container p-4 ml-4 mr-4">
      {isLoading && <div>data is loading</div>}
      {/* {! isLoading &&  */}

      <h1>Login</h1>
      <div className="form">
        <div>
          <input
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
  );
};

export default Loginn;

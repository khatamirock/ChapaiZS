import styles from "./style";
import {
  Navbar,
  SlidingTabs,
  Eachuser,
  Loginn,
  Usersinfo,
  SignUpuser,
} from "./components";
import React, { useState } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import * as ReactDOM from "react-dom";

const App = (props) => {
  const [check, setCheck] = useState(false);

  return (
    <div className="font-black  p-0 m-0  ">
      <Navbar />

      <Routes>
        <Route path="/" element={<SlidingTabs />} />
        {/* <Route path="/members" element={<UserInfo />} /> */}
        <Route path="/login" element={<Loginn />} />
        <Route path="/member" element={<Eachuser />} />
        <Route path="/signup" element={<SignUpuser />} />
        <Route path="/user/:id" element={<Usersinfo />} />
      </Routes>
    </div>
  );
};

// react-transition-group https://heroicons.com/ && ARIA

export default App;

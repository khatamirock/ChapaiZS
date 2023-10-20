import styles from "./style";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MyContextProvider } from "./components/contexts/Context";
import {
  Navbar,
  SlidingTabs,
  Eachuser,
  Loginn,
  Usersinfo,
  SignUpuser,
  SearchTest,
  Home_section,
  About,
} from "./components";
import React, { useState } from "react";
import "./app.css";
import SearchBar from "./components/SearchComp/SearchBar";
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
  const [SearchBa, SetSearchBar] = useState(false);

  const [clickedOnSrch, setclickedOnSrch] = useState(55);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/members", { state: { clickedOnSrch: clickedOnSrch } });
  };

  return (
    <MyContextProvider>
      <div className="font-black  p-0 m-0  ">
        <Navbar />
        {SearchBa && (
          <SearchBar
            searchBarState={SearchBa}
            setSearchBarState={SetSearchBar}
            setSelected={setclickedOnSrch}
            currentSelect={clickedOnSrch}
          />
        )}
        <Routes>
          <Route path="/" element={<Home_section />} />
          {/* <Route path="/" element={<SearchTest />} /> */}
          <Route
            path="/members"
            element={<SlidingTabs highlightUser={clickedOnSrch} />}
          />

          <Route path="/login" element={<Loginn />} />
          <Route path="/member" element={<Eachuser />} />
          <Route path="/signup" element={<SignUpuser />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<Usersinfo />} />
        </Routes>
        <button
          className="hoverSeach z-[5]"
          onClick={() => {
            SetSearchBar(!SearchBa);
          }}
        >
          <div className="lgo">
            <FaSearch />
          </div>
        </button>
      </div>
    </MyContextProvider>
  );
};

// react-transition-group https://heroicons.com/ && ARIA

export default App;

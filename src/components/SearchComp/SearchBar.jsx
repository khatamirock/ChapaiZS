import React, { useRef, useState } from "react";
import "./searchbar.css";
import { SearchTest3 } from "../../tester/SearchTest";
import { handleSearch } from "./searchHandlerFunctions";

const SearchBar = ({
  searchBarState,
  setSearchBarState,
  setSelected,
  currentSelect,
}) => {
  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setSearchBarState(false);
    }
  };
  //   set the
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (event) => {
    setSearchInput(event.target.value);

    // <SearchTest3 Series={searchInput} />;
  };

  const searchBarRef = useRef(null);

  return (
    <div className="Srcwrapper" onClick={handleClickOutside}>
      <div className="srchbar" ref={searchBarRef}>
        <input
          className="input_online p-3"
          value={searchInput}
          onChange={handleSearch}
          type="text"
          placeholder="Search by Name"
        />
        <input
          className="input_online p-3"
          value={searchInput}
          onChange={handleSearch}
          type="text"
          placeholder="Search by Department"
        />
        {/* <input
          className="input_online p-3"
          value={searchInput}
          onChange={handleSearch}
          type="text"
          placeholder="Search by Series"
        /> */}
        <div className="result">
          {searchInput && (
            <SearchTest3
              Series={searchInput}
              select={setSelected}
              curr={currentSelect}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

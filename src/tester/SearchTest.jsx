import React, { useState } from "react";
import { Zillasom } from "../assets/CSV/zilla";

const SearchTest = () => {
  const searchData = Zillasom;
  const [searchSeries, setSearchSeries] = useState("");
  const [searchDepartment, setSearchDepartment] = useState("");

  const handleSearchSeriesChange = (event) => {
    setSearchSeries(event.target.value);
  };

  const handleSearchDepartmentChange = (event) => {
    setSearchDepartment(event.target.value);
  };

  const filteredData = searchData.filter((item) => {
    const seriesMatch = item.Series.toString().includes(searchSeries);
    const departmentMatch = item.Department.toLowerCase().includes(
      searchDepartment.toLowerCase()
    );

    // Change this condition if you want to search based on both Series and Department or any other combination.
    return seriesMatch && departmentMatch;
  });

  return (
    <div>
      <div>
        <label htmlFor="series">Search by Series:</label>
        <input
          type="text"
          id="series"
          value={searchSeries}
          onChange={handleSearchSeriesChange}
        />
      </div>
      <div>
        <label htmlFor="department">Search by Department:</label>
        <input
          type="text"
          id="department"
          value={searchDepartment}
          onChange={handleSearchDepartmentChange}
        />
      </div>
      <div>
        <h2>Search Results:</h2>
        <ul>
          {filteredData.map((item, index) => (
            <li key={index}>
              <p>Name: {item.Name}</p>
              <p>Series: {item.Series}</p>
              <p>Department: {item.Department}</p>
              {/* Add other properties as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export const SearchTest3 = ({ Series }) => {
  const searchData = Zillasom;

  const filteredData = searchData.filter((item) => {
    const seriesMatch = item.Series.toString().includes(Series);

    return seriesMatch;
  });

  console.log(Series, filteredData);
  return (
    <div className="names">
      {filteredData.map((item, index) => (
        <h1 className="searched_date text-white p-2">{item.Name}</h1>
      ))}
    </div>
  );
};
export default SearchTest;

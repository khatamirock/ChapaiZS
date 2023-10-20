// searchFunctions.js

function handleSearch(searchInput, setSearchInput) {
  return (event) => {
    setSearchInput(event.target.value);
    // You can return the value you want to pass to your component
  };
}

export { handleSearch };

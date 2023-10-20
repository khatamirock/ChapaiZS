// const Context = () => {
//   return <div>Context</div>;
// };

// export default Context;

import { React, createContext, useContext, useState } from "react";

// Create a context and provide a default value
const MyContext = createContext();

// Create a context provider component to wrap your app
export function MyContextProvider({ children }) {
  const [clickedOnSrch, setClickedOnSrch] = useState(1);

  return (
    <MyContext.Provider value={{ clickedOnSrch, setClickedOnSrch }}>
      {children}
    </MyContext.Provider>
  );
}

// Create a custom hook to access the context
export function SearchContext() {
  return useContext(MyContext);
}

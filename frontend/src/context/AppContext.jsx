import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [allCourse, setAllCourse] = useState([]);

  const fetchAllCorses = async () => {
    setAllCourse(dummyCourses);
  };

  useEffect(() => {
    fetchAllCorses();
  }, []);

  const value = {
    currency,
    allCourse,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();

  const [allCourse, setAllCourse] = useState([]);
  const [isEducator, setIsEducator] = useState(true);

  // Fetch All Course
  const fetchAllCorses = async () => {
    setAllCourse(dummyCourses);
  };

  // Function to calculate average rating of course
  const calRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  useEffect(() => {
    fetchAllCorses();
  }, []);

  const value = {
    currency,
    allCourse,
    navigate,
    calRating,
    isEducator,
    setIsEducator,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

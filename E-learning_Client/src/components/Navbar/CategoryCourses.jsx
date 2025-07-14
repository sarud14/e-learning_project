import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router";

function CategoryCourses() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategoryCourses = async () => {
      try {
        const resp = await axios.get("/api/all-categories");
        const categoriesData = Array.isArray(resp.data?.data)
          ? resp.data.data
          : [];
        setCategory(categoriesData);
      } catch (error) {
        console.log("getCategory err", error);
      }
    };
    getCategoryCourses();
  }, []);
  return (
    <div className="dropdown dropdown-start">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-primary rounded-field text-info hover:bg-accent w-40 text-lg"
      >
        Courses
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content bg-primary rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
      >
        {category.length > 0 ? (
          category.map((category) => (
            <li key={category.id}>
              {" "}
              <Link to={category.link} className="text-info hover:bg-accent">
                {category.name}
              </Link>
            </li>
          ))
        ) : (
          <li>
            <a className="text-info">No courses available</a>
          </li>
        )}
      </ul>
    </div>
  );
}
export default CategoryCourses;

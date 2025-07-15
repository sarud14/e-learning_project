import { useEffect, useState } from "react";
import { courseApi } from "../../services/courseService";

function LandingPageCoursesItem() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      try {
        const resp = await courseApi.get("/");
        if (resp.data && Array.isArray(resp.data.result)) {
          setCourses(resp.data.result);
        }
      } catch (error) {
        console.log("getCourses err", error);
      }
    };
    getCourses();
  }, []);
  return (
    <>
      <div className="flex gap-4 w-360 mx-auto mt-20">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div
              key={course.id}
              className="card bg-info w-200 shadow-sm h-full flex flex-col items-center"
            >
              <figure className="w-full h-100 rounded-t-xl overflow-hidden">
                <img
                  src={
                    course.picture_url ||
                    "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  }
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div>
                <div className="card-body flex items-center gap-4 ">
                  <div className="flex gap-15">
                    <h2 className="card-title text-4xl">{course.title}</h2>
                    <div className="card-actions justify-end items-center">
                      <div className="badge badge-outline text-md font-bold">
                        {course.price} Baht
                      </div>
                      <div className="badge badge-outline text-md font-bold">
                        {course.difficulty}
                      </div>
                      <div className="badge badge-primary text-info text-md">
                        BY {course.Instructor.first_name}
                      </div>
                    </div>
                  </div>
                    <p className="mt-3.5 text-lg pl-4 line-clamp-2 hover:line-clamp-none">
                      {course.description}
                    </p>

                  <button className="btn btn-primary text-info w-160 mt-">
                    Get It Now
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-warning text-xl col-span-full mt-10">
            No valid Course found
          </div>
        )}
      </div>
    </>
  );
}
export default LandingPageCoursesItem;

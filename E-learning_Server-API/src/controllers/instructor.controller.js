import instructorService from "../services/instructors.service.js";
import createError from "../utils/create-error.util.js";

export const getInstructorById = async (req, res, next) => {
  try {
    if (!req.user) {
      createError(401, "Unauthorized");
    }
    // console.log('req.user', req.user)
    const users = await instructorService.getInstructorById(req.user.id);
    console.log(users);
    res.json({ message: "Instructor detail", result: users });
  } catch (error) {
    console.log("getStudentById err", error);
    next(error);
  }
};

export const getInstructorCourses = async (req, res, next) => {
  try {
    const instructorId = req.user.id
    if (!instructorId) {
      createError(401, "Unauthorized");
    }
    const courses = await instructorService.getInstructorCourses(instructorId)
    res.json({ message: "Instructor's courses detail", result: courses });
  } catch (error) {
    console.log("getInstructorCourses err".error)
    next(error)
  }
}

export const createNewCourses = async (req, res, next) => {
  try {
    const instructorId = req.user.id
    if (!instructorId) {
      createError(401, "Unauthorized")
    }

    if (typeof instructorService.createCourse === 'undefined' && typeof instructorService.createNewCourses === 'undefined') {
            throw new Error("Instructor service method not found. Check function name.");
        }

    const { title, description, price, picture_url, difficulty, categoryId } = req.body
    if(!title || !description || !price || !picture_url || !difficulty || !categoryId) {
      createError(400, "Missing required course fields.")
    }

    const courseData = {
            title,
            description,
            price,
            picture_url,
            difficulty,
            categoryId: parseInt(categoryId), 
            instructorId: instructorId, 
            isPublished: false 
        };
    
    const newCourse = await instructorService.createNewCourses(courseData)
     res.json({ message: "Course created successfully (pending admin approval for publishing)", result: newCourse });
  } catch (error) {
    console.log("createNewCourses err", error)
    next(error)
  }
}
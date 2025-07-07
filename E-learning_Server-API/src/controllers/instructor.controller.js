import coursesService from "../services/courses.service.js";
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

    const { title, description, price, picture_url, difficulty, categoryId } = req.body
    if (!title || !description || !price || !picture_url || !difficulty || !categoryId) {
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

export const getStudentsInCourse = async (req, res, next) => {
  try {
    const { courseId } = req.params
    if (!courseId) {
      createError(400, "Course ID is required")
    }
    if (req.user.role === 'USER_INSTRUCTOR') {
      const isOwner = await coursesService.checkInstructorCourseOwnership(
        parseInt(courseId),
        req.user.id
      );
      if (!isOwner) {
        createError(403, "Forbidden: You are not the instructor of this course or course not found.")
      }
    }
    const studentsInCourse = await instructorService.getStudentsInCourse(parseInt(courseId));

    if (!studentsInCourse || studentsInCourse.length === 0) {
      return res.status(200).json({ message: "No students enrolled in this course.", result: [] });
    }

    res.status(200).json({
      message: `Students enrolled in course ${courseId} retrieved successfully`,
      result: studentsInCourse
    });
  } catch (error) {
    console.log("getStudentsInCourse err", error)
    next(error)
  }
}
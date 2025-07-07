import enrollmentService from "../services/enrollments.service.js";
export const getMyCourses = async (req,res, next) => {
  try {
    const accountId = req.user.id
     if (!accountId) {
          createError(401, "Unauthorized");
        }
        const enrollments = await enrollmentService.studentGetEnroll(accountId);
        console.log(enrollments);
        res.json({ message: "enrollment detail", result: enrollments });
  } catch (error) {
    console.log("getMyCourses err", error)
    next(error)
  }
}
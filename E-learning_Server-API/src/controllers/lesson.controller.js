import lessonService from "../services/lesson.service.js";
import createError from "../utils/create-error.util.js";

export const createLesson = async (req, res, next) => {
  try {
    const { id: courseId } = req.params;
    const { title, description, video_url, order_in_course, isPublished } =
      req.body;
    if (!title || !video_url || !courseId) {
      createError(400, "Title, video URL, and course ID are required.");
    }
    const newLesson = await lessonService.createLesson({
      courseId: +courseId,
      title,
      description,
      video_url,
      order_in_course,
      isPublished,
    });
    res.json({ message: "Lesson created successful.", result: newLesson });
  } catch (error) {
    console.log("createLesson err", error);
    next(error);
  }
};

export const updateLesson = async (req, res, next) => {
    try {
        const { id: lessonId } = req.params; 
        const updateData = req.body;       
        const updatedLesson = await lessonService.updateLesson(lessonId, updateData);

        res.json({
            message: `Lesson ID: ${lessonId} updated successful.`,
            result: updatedLesson,
        });
    } catch (error) {
        console.error("updateLesson err", error);
        next(error);
    }
};

export const deleteLesson = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteLesson = await lessonService.deleteLesson(id);
    res.json({
      message: `Lesson ID: ${id} deleted successful`,
      result: deleteLesson,
    });
  } catch (error) {
    console.log('deleteLesson err', error)
    next(error)
  }
};

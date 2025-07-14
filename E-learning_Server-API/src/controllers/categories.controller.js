import categoriesService from "../services/categories.service.js";

export const getAllCategories = async (req, res, next) => {
  try {
    const options = req.query;
    const categories = await categoriesService.getAllCategory(options);

    res.json({
      message: "All Categories retrieved successful.",
      data: categories,
    });
  } catch (error) {
    console.error("getAllCategories err", error);
    next(error);
  }
};

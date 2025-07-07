import checkRole from "../middlewares/check-auth-role.middleware.js";
import paymentService from "../services/payments.service.js";
import createError from "../utils/create-error.util.js";

export const getAllTransaction = async (req, res, next) => {
  try {
    const transactions = await paymentService.getAllTransaction();
    if (!transactions || transactions.length === 0) {
      createError(404, "No transactions found in the system.");
    }
    res.json({
      message: "All transactions retrieved successful.",
      result: transactions,
    });
  } catch (error) {
    console.log("getAllTransaction err", error);
    next(error);
  }
};

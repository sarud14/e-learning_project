import prisma from "../config/prisma.config.js";
import createError from "../utils/create-error.util.js";

const paymentService = {};

paymentService.getAllTransaction = async () => {
  const transactions = await prisma.payment.findMany({
    select: {
      id: true,
      payment_date: true,
      status: true,
      amount: true,
      Account: {
        select: {
          id: true,
          email: true,
          first_name: true,
          last_name: true,
        },
      },
      enrollment: {
        select: {
          id: true,
          enrollment_date: true,
          status: true,
          Course: {
            select: {
              id: true,
              title: true,
              price: true,
            },
          },
        },
      },
    },
    orderBy: {
      payment_date: "desc", // เรียงตามวันที่ชำระเงินล่าสุด
    },
  });
  return transactions;
};


export default paymentService
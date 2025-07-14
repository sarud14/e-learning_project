import express from "express";
import cors from "cors";
import morgan from "morgan";
import notFound from "./middlewares/not-found.middleware.js";
import authenticateRoute from "./routes/authenticate.route.js";
import error from "./middlewares/error.middleware.js";
import userRoute from "./routes/users.route.js";
import dashboardRoute from "./routes/dashboard.route.js";
import enrollmentRoute from "./routes/enrollment.route.js";
import instructorRoute from "./routes/instructor.route.js";
import adminRoute from "./routes/admin.route.js";
import courseRoute from "./routes/courses.route.js";
import lessonRoute from "./routes/lessons.route.js";
import categoryRoute from "./routes/all-categories.route.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/authenticate", authenticateRoute);
app.use("/api/users", userRoute);
app.use("/api/dashboard", dashboardRoute);
app.use("/api/enrollments", enrollmentRoute);
app.use("/api/instructor", instructorRoute);
app.use("/api/admin", adminRoute);
app.use("/api", courseRoute);
app.use("/api", lessonRoute);
app.use("/api/all-categories", categoryRoute);

app.use("/api/new-categories", (req, res, next) => {
  res.json({ message: "new categories" });
});
app.use("/api/payment", (req, res, next) => {
  res.json({ message: "payment" });
});

app.use(notFound);
app.use(error);

export default app;

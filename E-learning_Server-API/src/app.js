import express from "express";
import notFound from "./middlewares/not-found.middleware.js";
import authenticateRoute from "./routes/authenticate.route.js";
import error from "./middlewares/error.middleware.js";
import userRoute from "./routes/users.route.js";
import dashboardRoute from "./routes/dashboard.route.js"
import enrollmentRoute from "./routes/enrollment.route.js";


const app = express();
app.use(express.json());

app.use("/api/authenticate",authenticateRoute);
app.use("/api/users", userRoute);
app.use("/api/dashboard", dashboardRoute);
app.use("/api/enrollments", enrollmentRoute);

app.use("/api/instructor", (req, res, next) => {
  res.json({ message: "instructor" });
});
app.use("/api/admin", (req, res, next) => {
  res.json({ message: "admin" });
});
app.use("/api/courses", (req, res, next) => {
  res.json({ message: "courses" });
});
app.use("/api/lessons", (req, res, next) => {
  res.json({ message: "lessons" });
});
app.use("/api/all-categories", (req, res, next) => {
  res.json({ message: "all categories" });
});
app.use("/api/new-categories", (req, res, next) => {
  res.json({ message: "new categories" });
});
app.use("/api/payment", (req, res, next) => {
  res.json({ message: "payment" });
});

app.use(error)
app.use(notFound);
export default app;

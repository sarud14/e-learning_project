import dotenv from "dotenv";
import app from "../src/app.js";

dotenv.config();

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> {
  console.log(`server is running @ http://localhost:${PORT}/`)
})

process.on("SIGINT", ()=>shutdown("SIGINT"))
process.on("SIGTERM", ()=>shutdown("SIGTERM"))

process.on("uncaughtException", ()=>shutdown("uncaughtException"))
process.on("unhandledRejection", ()=>shutdown("unhandledRejection"))
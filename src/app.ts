import express from "express";
import route from "./routes/user.route.ts";
const app = express();

app.use(express.json());

app.use("/api", route);

export default app;

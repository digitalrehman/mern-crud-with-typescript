import express from "express";
const app = express();

app.use(express.json());

app.get("/api/user", (req, res) => {
  res.status(200).json({
    message: "get all user",
  });
});

export default app;

import express from "express";

const app = express();

// Routes

app.get("/", (req, res) => {
    res.json({ messgae: "rest api introduction" });
});

export default app;

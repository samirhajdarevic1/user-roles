const express = require("express");
const app = express();
const { users } = require("./data");
const projectRouter = requre("./routes/projects");

app.use(express.json());
app.use(setUser);
app.use("/projects", projectRouter);

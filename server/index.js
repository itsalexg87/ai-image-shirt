const express = require("express");
const cors = require("cors");

import dalleRoutes from "./routes/dalle.routes.js";

require("dotenv").config();

const app = express();
app.use(express.static("public"));
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle/", dalleRoutes);

app.get("/", (req, res) => {
	res.status(200).json({ message: "Hello from the backend" });
});

app.listen(8080, () => console.log("Server has started on Port 8080"));

module.exports = app;

const express = require("express");
const router = require("./routes/index");
const setUp = require("./db/db-setup");

setUp();

const app = express();

app.use(express.json());
app.use("/person", router);

app.listen(8080, () => console.log("Server listening on port 8080"));

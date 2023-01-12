const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const jobRoutes = require("./routes/jobs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/test", jobRoutes);

const PORT = 3000;

app.listen(PORT, () => console.log("Listening on PORT 3000"));

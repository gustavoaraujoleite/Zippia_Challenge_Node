const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const errorController = require("./controllers/error");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const jobRoutes = require("./routes/jobs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", jobRoutes);
app.use(errorController.get404);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running in port ${PORT}`));

const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");

const app = express();

const usersRoutes = require("./routes/users");
const adminRoutes = require("./routes/admin");

//app.engine('pug', require('pug').__express)
app.engine("html", require("ejs").renderFile);

app.set("view engine", "ejs");
//app.set("view engine", "html");

app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(usersRoutes);

app.listen(3000);

var express = require("express"),
  app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("index");
});
app.get("/startcoding", function(req, res) {
  res.render("startcoding");
});
app.get("/webcourses", function(req, res) {
  res.render("webcourses");
});
app.get("/academyclass", function(req, res) {
  res.render("academyclass");
});
app.get("/webdevelopment", function(req, res) {
  res.render("webdevelopment");
});
app.get("/portfolio", function(req, res) {
  res.render("portfolio");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is listening!!!");
});

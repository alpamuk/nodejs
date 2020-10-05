const User = require("../model/user");

exports.getAddProduct = (req, res, next) => {
  res.render("add-user", {
    pageTitle: "Add-User",
    path: "/admin/add-user",
  });
};

exports.postAddProducts = (req, res, next) => {
  const user = new User(req.body.id, req.body.title);
  console.log(user);
  user.save();
  res.redirect("/");
};

exports.getUserList = (req, res, next) => {
  //console.log(passengers);
  User.fetchAll((passengers) => {
    res.render("users", {
      users: passengers,
      pageTitle: "User List",
      path: "/",
    });
  });
};

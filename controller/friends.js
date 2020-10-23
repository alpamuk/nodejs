exports.postUserFriends = (req, res, next) => {
  const uId = req.body.userId;
  console.log(uId);

  res.render("friends");
};

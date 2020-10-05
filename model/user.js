const path = require("path");
const fs = require("fs");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "users.json"
);

const getUsersFromFile = (cb) => {
  const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "users.json"
  );
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    }

    cb(JSON.parse(fileContent));
  });
};

module.exports = class User {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
  save() {
    this.id = Math.random().toString();
    fs.readFile(p, (err, fileContent) => {
      let users = [];

      if (!err) {
        users = JSON.parse(fileContent);
      }

      users.push(this);

      fs.writeFile(p, JSON.stringify(users), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll(cb) {
    getUsersFromFile(cb);
  }
};

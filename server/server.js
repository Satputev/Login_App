let express = require("express");
let mysql = require("mysql");
let cors = require("cors");
let bodyparser = require("body-parser");

let app = express();
app.use(bodyparser.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "react_login",
});

app.post("/login", (req, res) => {
  connection.query(
    `select * from login_details where uname='${req.body.uname}' and upwd='${req.body.upwd}'`,
    (err, records, fields) => {
      if (err) throw err;
      else {
        if (records.length > 0) {
          res.send({ login: "success" });
        } else {
          res.send({ login: "fail" });
        }
      }
    }
  );
});

app.post("/register", (req, res) => {
  connection.query(
    `insert into login_details values('${req.body.uname}','${req.body.upwd}')`,
    (err, records, fields) => {
      if (err) throw err;
      else {
        if (records) {
          res.send({ register: "success" });
        }
      }
    }
  );
});
app.listen(8080);

console.log("server is listining port no 8080");

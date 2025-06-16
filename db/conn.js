const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  pasword: "rootfederica95",
  database: "movies",
  port: 3306,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("db connected");
});

export default connection;

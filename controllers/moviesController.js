const connection = require("../db/conn.js");

const index = (req, res) => {
  const sql = `SELECT * FROM movies`;
  connection.query(sql, (err, results) => {
    // if (err) throw err;
    // console.log(results);
    if (err)
      return res.status(500).json({
        err: `Database query failed`,
      });
    res.json(results);
  });
};

const show = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM movies WHERE id =?`;
  connection.query(sql, [id], (err, results) => {
    if (err) return res.status(500).json({ err: `Database query failed` });
    if (results.length === 0)
      return res.status(404).json({ err: `Movie not found` });
    res.json(results[0]);
  });
};

module.exports = { index, show };

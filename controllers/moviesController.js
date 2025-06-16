const connection = require("../db/conn.js");

const index = (req, res) => {
  const sql = `SELECT * FROM posts`;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    // if (err)
    //   return res.status(500).json({
    //     error: `Database query failed`,
    //   });
    // res.json(results);
  });
};

const show = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM posts WHERE id =?`;
  connection.query(sql, [id], (error, results) => {
    if (err) return res.status(500).json({ error: `Database query failed` });
    if (results.length === 0)
      return res.status(404).json({ error: `Movie not found` });
    res.json(result[0]);
  });
};

module.exports = { index, show };

const connection = require("../db/conn.js");

const index = (req, res) => {
  const movieSql = `SELECT * FROM movies`;
  connection.query(movieSql, (err, results) => {
    if (err) {
      return res.status(500).json({
        err: `Database query failed`,
      });
    }

    console.log(results);

    const movies = results;
    res.json({
      movies,
    });
  });
};

const show = (req, res) => {
  const { id, image } = req.params;
  const movieSql = `SELECT * FROM movies WHERE id = ?`;
  connection.query(movieSql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({
        err: `Database query failed`,
      });
    }
    console.log(results);
    const movie = results[0];

    const reviewSql = `
          SELECT *
          FROM reviews
          WHERE movie_id = ?
        `;

    connection.query(reviewSql, [id], (err, results) => {
      if (err) {
        return res.status(500).json({
          err: `Database query failed`,
        });
      }

      movie.reviews = results;

      res.json({
        movie,
      });
    });

    // const reviewSql = "SELECT * FROM reviews WHERE movie_id = ? ";

    // connection.query(reviewSql, [id], (err, results) => {
    //   if (err) {
    //     return res.status(500).json({
    //       err: `Database query failed`,
    //     });
    //   }
    //   const movie = results[0];
    //   movie.img = `http://localhost:3000/img/${movie.image}`;

    //   res.json({
    //     movie,
    //   });
    // });
  });
};

// const show = (req, res) => {
//   const id = req.params.id;
//   const movieSql = `
//     SELECT
//       movies.*,

//       AVG(reviews.vote) AS average_vote
//     FROM movies
//     INNER JOIN reviews
//     ON movies.id = reviews.movie_id
//     GROUP BY movies.id
//    `;
//   connection.query(movieSql, [id], (err, results) => {
//     if (err) return res.status(500).json({ err: `Database query failed` });

//     if (results.length === 0)
//       return res.status(404).json({ err: `Movie not found` });

//     const movie = results[0];

//     //
//     const reviewsSql = `

//     `;

//     connection.query(reviewsSql, [id], (err, results) => {
//       // QUI
//       movie.reviews = ["pippo", "pluto"];
//       res.json(movie);
//     });
//   });
// };

module.exports = { index, show };

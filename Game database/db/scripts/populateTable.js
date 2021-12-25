import { query } from "../index.js";
import { games } from "../../games.js";

const sqlString = `INSERT INTO games (title, rating, genre, year, developer, comments) VALUES ($1, $2, $3, $4, $5, $6) RETURNING user`;

async function populateGamesTable() {
  for (let i = 0; i < games.length; i++) {
    console.log("this is the data", games);
    let { title, rating, genre, year, developer, comments } = games[i];

    const res = await query(sqlString, [
      title,
      rating,
      genre,
      year,
      developer,
      comments,
    ]);
    console.log(res);
  }
}

populateGamesTable();

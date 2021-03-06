import { query } from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS games (id SERIAL PRIMARY KEY, title TEXT, rating INT, genre TEXT, year INT, developer TEXT, comments TEXT) `;

async function createGamesTable() {
  const res = await query(sqlString);
  console.log("Table created", res);
}

createGamesTable();

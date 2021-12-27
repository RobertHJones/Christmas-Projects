import express from "express";
// import { append } from "express/lib/response.js";
const router = express.Router(); //

import {
  getAllGames,
  getGameByID,
  getGameByTitle,
  addNewGame,
  deleteGame,
  replaceGame,
} from "../models/ratings.js";

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json({ message: "I wish we had some information to give you ☹️" });
});

// GET ALL GAMES OR SEARCH BY TITLE
router.get("/games", async function (req, res) {
  const { title, rating, genre, year, developer, comments } = req.query;

  if (title) {
    const searchResults = await getGameByTitle(title);
    res.json({
      success: true,
      message: `Searched games by ${title}`,
      payload: searchResults,
    });
    return;
  }

  const games = await getAllGames();
  console.log("games", games);
  res.json({ success: true, payload: games });
});

// GET GAME BY ID
router.get("/games/:id", async function (req, res) {
  const game = Number(req.params.id);
  const returnedGame = await getGameByID(game);
  res.json({ success: true, payload: returnedGame });
});

// ADD NEW GAME
router.post("/games", async function (req, res) {
  const newGame = await addNewGame(req.body);
  res.json({ success: true, payload: newGame });
});

// DELETE GAME
router.delete("/games/:id", async function (req, res) {
  const game = Number(req.params.id);
  const deletedGame = await deleteGame(game);
  res.json({ success: true, payload: deletedGame });
});

// REPLACE GAME
router.put("/games/:id", async function (req, res) {
  const game = Number(req.params.id);
  const newGame = req.body;
  const update = await replaceGame(game, newGame);
  res.json({ success: true, payload: update });
});

export default router;

import React from "react";
import "./index.css";
import { useState } from "react";

export default function Input() {
  const [game, setGame] = useState("");

  function getValue(e) {
    setGame(e.target.value);
    console.log(game);
  }

  return (
    <form>
      <input onChange={getValue} placeholder="Search for a game"></input>
      <button>Find me a deal!</button>
    </form>
  );
}

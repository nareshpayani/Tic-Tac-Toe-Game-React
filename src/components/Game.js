import React, { useState } from "react";
import { Winner } from "../helper";
import Board from "./Board";
import close from '../img/close.svg'


const Game = (props) => {

  const [values, setValues] = useState([Array(9).fill(null)]);
  const [players, setPlayers] = useState(0);
  const [xIsNext, setXisNext] = useState(true);


  const winner = Winner(values[players]);
  const xO = xIsNext ? "X" : "O";
 
  // handler function for move
  const handleClick = (i) => {
    const historyPoint = values.slice(0, players + 1);
    const current = historyPoint[players];
    const squares = [...current];

    // return if won or occupied
    if (winner || squares[i]) return;

    // select square
    squares[i] = xO;
    setValues([...historyPoint, squares]);
    setPlayers(historyPoint.length);
    setXisNext(!xIsNext);
  };

 // Game Reset function
  const reset = () => {
    setValues([Array(9).fill(null)]);
    setPlayers(0);
    setXisNext(true);
  };

  const {
    player1,
    player2
  } = props.Allplayer;

  return (
    
    <body>

    <div className="logo"></div>
      
         {/* Player-2 Board*/}

    {winner === "X"?<div className="winn-x-turn">WINNER!</div>:winner===null && xO==='X'?<div className="x-turn">YOUR TURN</div>:''}
        <div className={winner === "X"?"player-one-box sucess": "player-one-box"}>
            <div className="player-one-label">PLAYER 1</div>
            <div className="player-one-name" id="current-0">{player1}</div>
            <div className="player-one-symbol"> </div>
        </div>
    <div className="turn-1"></div>
    

    {/* Reset Button*/}

    <div className="reset" onClick={reset}><img src={close} alt="Reset"/></div>
    
    {/* Game Board */}

    <div className="main-border">
        <div className="wrapper clearfix">
            <Board squares={values[players]} onClick={handleClick} />
        </div>
    </div>

    {/* Player-2 Board*/}

    {winner === "O"?<div className="winn-o-turn">WINNER!</div>:winner===null && xO === "O"?<div className="o-turn">YOUR TURN</div>:''}
    <div className={winner === "O"?"player-two-box sucess": "player-two-box"}>
          <div className="player-two-label">PLAYER 2</div>
          <div className="player-two-name" id="current-1">{player2}</div>
          <div className="player-two-symbol"></div>
    </div>
    <div className="turn-2"></div>


</body>
  
  );
};

export default Game;

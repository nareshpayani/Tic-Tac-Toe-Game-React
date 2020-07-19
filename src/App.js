import React, {useState}from 'react';
import './App.css';
import AddPlayer from './components/AddPlayer';
import  { BrowserRouter as Router, Route, } from 'react-router-dom';
import Game from './components/Game';
import FinalWinner from './components/FinalWinner';


function App() {

  const [player, setPlayers] = useState ({})

  function getPlayers (player1, player2){
    setPlayers ({player1, player2})
  }

  return (
    <div className="App">
   <Router>
     <Route path="/" render={(props)=><AddPlayer {...props} getPlayer= {getPlayers} />} />
     <Route path="/Game" render={(props)=><Game {...props} Allplayer= {player} />} />
   </Router>
{/* <FinalWinner/> */}
    </div>
  );
}

export default App;

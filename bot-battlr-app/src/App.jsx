
import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import BotSpecs from "./BotSpecs"
import YourBotArmy from './YourBotarmy';
import './style.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [botDetails, setBotDetails] = useState(null);

  // Fetching bots from the server 
  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div>
      <BotCollection
        bots={bots}
        onBotClick={(bot) => setBotDetails(bot)}
        onEnlist={(bot) => handleEnlist(bot)}
      />
      <YourBotArmy army={army} onRelease={(bot) => handleRelease(bot)} />
      {botDetails && (
        <BotSpecs
          bot={botDetails}
          onEnlist={(bot) => handleEnlist(bot)}
          onClose={() => setBotDetails(null)}
        />
      )}
    </div>
  );

  function handleEnlist(bot) {
    // Checking if the bot is already enlisted
    if (!army.find((enlistedBot) => enlistedBot.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function handleRelease(bot) {
    const updatedArmy = army.filter((enlistedBot) => enlistedBot.id !== bot.id);
    setArmy(updatedArmy);
  }
}

export default App;

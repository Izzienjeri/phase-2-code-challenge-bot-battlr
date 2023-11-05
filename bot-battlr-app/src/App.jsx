
import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotarmy';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [botDetails, setBotDetails] = useState(null);

  // Fetch bots from the server on component mount
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
    // Check if the bot is already enlisted
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

import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotarmy from "./YourBotarmy";
import BotCard from "./BotCard";
import "./App.css";

function App() {
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [botsToDischarge, setBotsToDischarge] = useState([]);

  const handleEnlistBot = (botToEnlist) => {
    // Check if the bot is not already enlisted
    if (!enlistedBots.find((bot) => bot.id === botToEnlist.id)) {
      setEnlistedBots([...enlistedBots, botToEnlist]);
    }
  };

  // Function to handle releasing a bot
  const handleReleaseBot = (botToRelease) => {
    const updatedEnlistedBots = enlistedBots.filter(
      (bot) => bot.id !== botToRelease.id
    );
    setEnlistedBots(updatedEnlistedBots);
  };

  const handleDischargeBot = (botToDischarge) => {
    // This is where you should implement the logic to remove the bot from the backend.
    // You can also add it to the botsToDischarge array for removal from the frontend.
    setBotsToDischarge([...botsToDischarge, botToDischarge]);
  };

  return (
    <div className="App">
      <BotCollection onEnlistBot={handleEnlistBot} />
      <YourBotarmy
        enlistedBots={enlistedBots}
        onReleaseBot={handleReleaseBot}
      />
    </div>
  );
}

export default App;

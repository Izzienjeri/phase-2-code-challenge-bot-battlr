import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotarmy from "./YourBotarmy";
import BotCard from "./BotCard";

function App() {
  const [enlistedBots, setEnlistedBots] = useState([]);

  // Function to handle enlisting a bot
  const handleEnlistBot = (botToEnlist) => {
    const updatedEnlistedBots = [...enlistedBots, botToEnlist];
    setEnlistedBots(updatedEnlistedBots);
  };

  // Function to handle releasing a bot
  const handleReleaseBot = (botToRelease) => {
    const updatedEnlistedBots = enlistedBots.filter(
      (bot) => bot.id !== botToRelease.id
    );
    setEnlistedBots(updatedEnlistedBots);
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

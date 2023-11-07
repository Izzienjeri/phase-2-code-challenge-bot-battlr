import React from "react";
import BotCollection from "./BotCollection";
import YourBotarmy from "./YourBotarmy";
import { useState } from "react";

function App() {
  const [enlistedBots, setEnlistedBots] = useState([]);
  const handleReleaseBot = (botToRelease) => {
    // Implement the logic to remove the bot from enlistedBots
    const updatedEnlistedBots = enlistedBots.filter(
      (bot) => bot.id !== botToRelease.id
    );
    setEnlistedBots(updatedEnlistedBots);
  };
  return (
    <div className="App">
      <BotCollection />
      <YourBotarmy
        enlistedBots={enlistedBots}
        onReleaseBot={handleReleaseBot}
      />
    </div>
  );
}

export default App;

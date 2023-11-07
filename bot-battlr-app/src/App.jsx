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

  const handleDischargeBot = async (botToDischarge) => {
    setBotsToDischarge([...botsToDischarge, botToDischarge]);

    try {
      await fetch(`http://localhost:3000/botsL/${botToDischarge.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Handle successful removal from the backend if needed.
    } catch (error) {
      console.error("Error removing the bot from the backend: ", error);
    }
  };

  return (
    <div className="App">
      <BotCollection
        onEnlistBot={handleEnlistBot}
        onDischargeBot={handleDischargeBot}
      />
      <YourBotarmy
        enlistedBots={enlistedBots}
        onReleaseBot={handleReleaseBot}
      />
    </div>
  );
}

export default App;

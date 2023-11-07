import React, { useState, useEffect } from "react";

function BotCollection() {
  const [botProfiles, setBotProfiles] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    // Fetch bot profiles when the component mounts
    fetchBotProfiles();
  }, []);

  const fetchBotProfiles = async () => {
    try {
      const response = await fetch("http://localhost:3000/bots");
      if (response.ok) {
        const data = await response.json();
        setBotProfiles(data);
      } else {
        console.error("Failed to fetch bot profiles");
      }
    } catch (error) {
      console.error("An error occurred while fetching bot profiles:", error);
    }
  };

  const enlistBot = (botId) => {
    if (!enlistedBots.includes(botId)) {
      setEnlistedBots([...enlistedBots, botId]);
    }
  };

  return (
    <div>
      <h1>Bot Profiles</h1>
      <ul>
        {botProfiles.map((bot) => (
          <li key={bot.id}>
            <p>Name: {bot.name}</p>
            <p>Description: {bot.description}</p>
            <button onClick={() => enlistBot(bot.id)}>Enlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;

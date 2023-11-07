import React from "react";
import BotCard from "./BotCard";

function YourBotarmy({ enlistedBots, onReleaseBot }) {
  const handleReleaseClick = (bot) => {
    onReleaseBot(bot);
  };

  return (
    <div>
      {enlistedBots.map((bot) => (
        <div key={bot.id} className="enlisted-bot">
          <h3>{bot.name}</h3>
          <button onClick={() => handleReleaseClick(bot)}>Release</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotarmy;

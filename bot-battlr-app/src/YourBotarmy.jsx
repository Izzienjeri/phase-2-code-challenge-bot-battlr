import React from "react";
import BotCard from "./BotCard";

function YourBotarmy({ enlistedBots, onReleaseBot }) {
  return (
    <div>
      {enlistedBots?.map((bot) => (
        <div key={bot.id} className="enlisted-bot">
          <h3>{bot.name}</h3>
          <button onClick={() => onReleaseBot(bot)}>Release</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotarmy;

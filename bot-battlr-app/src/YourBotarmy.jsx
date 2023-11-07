import React from "react";

function YourBotArmy({ enlistedBots, onReleaseBot }) {
  return (
    <div>
      {/* Check if enlistedBots is defined before mapping */}
      {enlistedBots?.map((bot) => (
        <div key={bot.id} className="enlisted-bot">
          <h3>{bot.name}</h3>
          <button onClick={() => onReleaseBot(bot)}>Release</button>
        </div>
      ))}
    </div>
  );
}
export default YourBotArmy;

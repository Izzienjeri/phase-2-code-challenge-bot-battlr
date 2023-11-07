import React from "react";

function YourBotArmy({ enlistedBots, onReleaseBot }) {
  return (
    <div>
      {/* Map through the enlisted bots and render them */}
      {enlistedBots.map((bot) => (
        <div key={bot.id} className="enlisted-bot">
          <h3>{bot.name}</h3>
          <button onClick={() => onReleaseBot(bot)}>Release</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;

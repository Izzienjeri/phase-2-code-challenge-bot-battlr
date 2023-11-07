import React from "react";

function YourBotArmy({ enlistedBots, botProfiles }) {
  const armyBots = botProfiles.filter((bot) => enlistedBots.includes(bot.id));
  if (!botProfiles || botProfiles.length === 0) {
    return <p>No bot profiles available.</p>;
  }

  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {armyBots.map((bot) => (
          <li key={bot.id}>
            <p>Name: {bot.name}</p>
            <p>Description: {bot.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourBotArmy;

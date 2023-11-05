
import React from 'react';

function YourBotArmy({ army, onRelease }) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      {army.map((bot) => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <button onClick={() => onRelease(bot)}>Release</button>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;

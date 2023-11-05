
import React from 'react';
import './styles.css';

function BotCollection({ bots, onBotClick, onEnlist }) {
  return (
    <div>
      {bots.map((bot) => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <button onClick={() => onBotClick(bot)}>View Details</button>
          <button onClick={() => onEnlist(bot)}>Enlist</button>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;

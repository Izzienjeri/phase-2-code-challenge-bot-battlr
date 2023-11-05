// BotSpecs.js
import React from 'react';

function BotSpecs({ bot, onEnlist, onClose }) {
  return (
    <div>
      <h2>Bot Details</h2>
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <button onClick={() => onEnlist(bot)}>Enlist</button>
      <button onClick={() => onClose()}>Close</button>
    </div>
  );
}

export default BotSpecs;

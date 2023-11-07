import React from "react";

function BotCard({ bot, onEnlistBot }) {
  const handleEnlistClick = () => {
    // Call the onEnlistBot function with the bot data
    onEnlistBot(bot);
  };

  return (
    <div className="bot-card">
      {/* Display bot information */}
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      {/* Add a button to enlist the bot */}
      <button onClick={handleEnlistClick}>Enlist</button>
    </div>
  );
}

export default BotCard;

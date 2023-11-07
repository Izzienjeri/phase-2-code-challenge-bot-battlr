import React from "react";

function BotCard({ bot, onEnlistBot, onDischargeBot }) {
  const handleEnlistClick = () => {
    onEnlistBot(bot);
  };

  const handleDischargeClick = () => {
    onDischargeBot(bot);
  };

  return (
    <div className="bot-card">
      {/* Display bot information */}
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      {/* Add a button to enlist the bot */}
      <button onClick={handleEnlistClick}>Enlist</button>
      {/* Add a button to discharge the bot */}
      <button onClick={handleDischargeClick} className="discharge-button">
        Discharge
      </button>
    </div>
  );
}

export default BotCard;

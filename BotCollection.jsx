import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

function BotCollection({ onEnlistBot, onDischargeBot }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      {/* Map through the bots and render BotCard components */}
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onEnlistBot={onEnlistBot}
          onDischargeBot={onDischargeBot}
        />
      ))}
    </div>
  );
}

export default BotCollection;

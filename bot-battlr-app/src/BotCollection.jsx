import { useState, useEffect } from "react";

function BotCollection() {
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
        <BotCard key={bot.id} bot={bot} />
      ))}
    </div>
  );
}

export default BotCollection;

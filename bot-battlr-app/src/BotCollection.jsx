import React, { useState, useEffect } from "react";

function BotCollection() {
  const [botProfiles, setBotProfiles] = useState([]);

  useEffect(() => {
    // Fetch bot profiles when the component mounts
    fetchBotProfiles();
  }, []);

  const fetchBotProfiles = async () => {
    try {
      const response = await fetch("http://localhost:3000/bots");
      if (response.ok) {
        const data = await response.json();
        setBotProfiles(data);
      } else {
        console.error("Failed to fetch bot profiles");
      }
    } catch (error) {
      console.error("An error occurred while fetching bot profiles:", error);
    }
  };

  return (
    <div>
      <h1>Bot Profiles</h1>
      <ul>
        {botProfiles.map((bot) => (
          <li key={bot.id}>
            {/* Render bot profile information here */}
            <p>Name: {bot.name}</p>
            <p>Description: {bot.description}</p>
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;

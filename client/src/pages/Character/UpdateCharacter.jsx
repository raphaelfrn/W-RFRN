import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateCharacter() {
  const [character, setCharacter] = useState({
    character_name: "",
    character_lvl: 0,
    character_class: "",
    user_id: 1
  });

  const navigate = useNavigate();
  const location = useLocation();
  const characterId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/characters/${characterId}`);
        if (response.data) {
          setCharacter(response.data); 
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacterData();
  }, [characterId]);

  const handleChange = (e) => {
    setCharacter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/characters/${characterId}`, character);
      navigate("/characters");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Update the character</h1>
      <input
        type="text"
        placeholder="character_name"
        onChange={handleChange}
        name="character_name"
        value={character.character_name}
      />
      <input
        type="number"
        placeholder="character_lvl"
        onChange={handleChange}
        name="character_lvl"
        value={character.character_lvl}
      />
      <input
        type="text"
        placeholder="character_class"
        onChange={handleChange}
        name="character_class"
        value={character.character_class}
      />

      <button className="formButton" onClick={handleClick}>
        Update
      </button>
    </div>
  );
}

export default UpdateCharacter;

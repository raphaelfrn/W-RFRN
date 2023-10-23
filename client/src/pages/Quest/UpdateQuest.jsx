import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateQuest() {
  const [quest , setQuest] = useState({
    quest_name:"",
    quest_description:"",
    quest_type:""
  });

  const navigate = useNavigate(); 
  const location = useLocation();
  const questId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchQuestData = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/quests/${questId}`);
        if (response.data) {
          setQuest(response.data); // Pré-remplir les champs avec les données de la quête
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestData();
  }, [questId]);

  const handleChange = (e) => { 
    setQuest((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleClick = async e =>{
    e.preventDefault()
    try {
      await axios.put("http://localhost:8800/quests/"+questId, quest)
      navigate("/quests")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Update the quest</h1>
      <input
        type="text"
        placeholder="quest_name"
        onChange={handleChange}
        name="quest_name"
        value={quest.quest_name}
      />
      <input
        type="text"
        placeholder="quest_description"
        onChange={handleChange}
        name="quest_description"
        value={quest.quest_description}
      />
      <input
        type="text"
        placeholder="quest_type"
        onChange={handleChange}
        name="quest_type"
        value={quest.quest_type}
      />
      <button className="formButton" onClick={handleClick}>
        Update
      </button>
    </div>
  );
}

export default UpdateQuest
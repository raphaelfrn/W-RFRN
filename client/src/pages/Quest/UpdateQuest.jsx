import axios from "axios";
import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateQuest() {
  const [quest , setQuest] = useState({
    quest_name:"",
    quest_description:"",
    completion_status:""
  });

  const navigate = useNavigate(); 
  const location = useLocation();
  const questId = location.pathname.split("/")[2];

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
      <input type="text" placeholder='quest_name' onChange={handleChange} name='quest_name'/>
      <input type="text" placeholder='quest_description' onChange={handleChange} name='quest_description' />
      <input type="checkbox" placeholder='completion_status' onChange={handleChange} name='completion_status' />

      <button className="formButton" onClick={handleClick}>Update</button>
    </div>
  )
}

export default UpdateQuest
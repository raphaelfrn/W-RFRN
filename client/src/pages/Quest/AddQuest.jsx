import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddQuest() {
  const [quest , setQuest] = useState({
    quest_name:"",
    quest_description:"",
    quest_type:""
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => { 
    setQuest((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleClick = async e =>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/quests", quest)
      navigate("/quests")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Add new quest</h1>
      <input type="text" placeholder='quest_name' onChange={handleChange} name='quest_name'/>
      <input type="text" placeholder='quest_description' onChange={handleChange} name='quest_description' />
      <input type="text" placeholder='quest_type' onChange={handleChange} name='quest_type' />

      <button className="formButton" onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddQuest
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [character , setCharacter] = useState({
    character_name:"",
    character_lvl:"",
    character_class:"",
    user_id:1,
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => { 
    setCharacter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(character);

  const handleClick = async e =>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/characters", character)
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Add new character</h1>
      <input type="text" placeholder='character_name' onChange={handleChange} name='character_name'/>
      <input type="number" placeholder='character_lvl' onChange={handleChange} name='character_lvl' />
      <input type="text" placeholder='character_class' onChange={handleChange} name='character_class' />

      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add
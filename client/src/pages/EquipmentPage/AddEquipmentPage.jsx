import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEquipmentPage() {
  const [equipmentPage , setEquipmentPage] = useState({
    character_id:"",
    level:"",
    items_list:""
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => { 
    setEquipmentPage((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(equipmentPage);

  const handleClick = async e =>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/equipmentPages", equipmentPage)
      navigate("/equipmentPages")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Add new equipment page</h1>
      <input type="number" placeholder='character_id' onChange={handleChange} name='character_id'/>
      <input type="number" placeholder='level' onChange={handleChange} name='level' />
      <input type="text" placeholder='items_list' onChange={handleChange} name='items_list' />

      <button className="formButton" onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddEquipmentPage
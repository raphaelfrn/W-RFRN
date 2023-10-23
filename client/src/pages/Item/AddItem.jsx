import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddItem() {
    const [item , setItem] = useState({
      item_name:"",
      item_type:"",
      recipy:""
    });

  const navigate = useNavigate(); 

  const handleChange = (e) => { 
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleClick = async e =>{
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/items", item)
      navigate("/items")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Add new item</h1>
      <input type="text" placeholder='item_name' onChange={handleChange} name='item_name'/>
      <input type="text" placeholder='item_type' onChange={handleChange} name='item_type' />
      <input type="text" placeholder='recipy' onChange={handleChange} name='recipy' />

      <button className="formButton" onClick={handleClick}>Add</button>
    </div>
  )
}

export default AddItem
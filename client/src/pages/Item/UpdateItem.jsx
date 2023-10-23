import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateItem() {
  const [item , setItem] = useState({
    item_name:"",
    item_type:"",
    recipy:""
  });

  const navigate = useNavigate(); 
  const location = useLocation();
  const itemId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/items/${itemId}`);
        if (response.data) {
          setItem(response.data); 
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchItemData();
  }, [itemId]);

  const handleChange = (e) => { 
    setItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleClick = async e =>{
    e.preventDefault()
    try {
      await axios.put("http://localhost:8800/items/"+itemId, item)
      navigate("/items")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Update the item</h1>
      <input
        type="text"
        placeholder="item_name"
        onChange={handleChange}
        name="item_name"
        value={item.item_name}
      />
      <input
        type="text"
        placeholder="item_type"
        onChange={handleChange}
        name="item_type"
        value={item.item_type}
      />
      <input
        type="text"
        placeholder="recipy"
        onChange={handleChange}
        name="recipy"
        value={item.recipy}
      />
      <button className="formButton" onClick={handleClick}>
        Update
      </button>
    </div>
  );
}

export default UpdateItem
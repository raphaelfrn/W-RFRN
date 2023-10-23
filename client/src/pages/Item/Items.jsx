import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"; 
import { Link } from "react-router-dom";


const Items = () =>  {
  const [items, setItems] = useState([]);

  useEffect(() =>{
    const fetchAllItems = async () => {
      try {
        const res = await axios.get("http://localhost:8800/items");
        setItems(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllItems();
    
  }, []);

  const handleDelete = async (item_id)=> {
    try {
      await axios.delete(`http://localhost:8800/items/${item_id}`);
      window.location.reload()
    } catch (error) {
      
    }
  }
  

  return (
    <div>
      <button>
          <Link to="/">index</Link>
        </button>
        <h1>Items List</h1>
        <div className="items">
        {items.map(item=>(
          <div key={item.item_id}  className="item" >
              <h2>{item.item_name}</h2>
              <h2>{item.item_type}</h2>
              <h2>{item.recipy}</h2>
              <button className="delete" onClick={()=> handleDelete(item.item_id)} >Delete</button>
              <button className="update"><Link
                to={`/updateItem/${item.item_id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link></button>

              

          </div>
        ))}
        </div>
        <button>
          <Link to="/addItem">Add new item</Link>
        </button>
      
      
    </div>
  )
}

export default Items
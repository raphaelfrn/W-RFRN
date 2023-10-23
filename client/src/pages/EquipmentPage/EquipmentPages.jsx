import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"; 
import { Link } from "react-router-dom";


const EquipmentPages = () =>  {
  const [equipmentPages, setEquipmentPages] = useState([]);

  useEffect(() =>{
    const fetchAllEquipmentPages = async () => {
      try {
        const res = await axios.get("http://localhost:8800/equipmentPages");
        setEquipmentPages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllEquipmentPages();
    
  }, []);

  const handleDelete = async (equipment_page_id)=> {
    try {
      await axios.delete(`http://localhost:8800/equipmentPages/${equipment_page_id}`);
      window.location.reload()
    } catch (error) {
      
    }
  }
  

  return (
    <div>
      <button>
          <Link to="/">index</Link>
        </button>
        <h1>Equipment Pages List</h1>
        <div className="equipmentPages">
        {equipmentPages.map(equipmentPage=>(
          <div key={equipmentPage.equipment_page_id}  className="equipmentPage" >
              <h2>{equipmentPage.character_id.character_name}</h2>
              <h2>{equipmentPage.level}</h2>
              <h2>{equipmentPage.items_list}</h2>
              <button className="delete" onClick={()=> handleDelete(equipmentPage.equipment_page_id)} >Delete</button>
              <button className="update"><Link
                to={`/updateEquipmentPage/${equipmentPage.equipment_page_id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link></button>

              

          </div>
        ))}
        </div>
        <button>
          <Link to="/addEquipmentPage">Add new equipment page</Link>
        </button>
      
      
    </div>
  )
}

export default EquipmentPages
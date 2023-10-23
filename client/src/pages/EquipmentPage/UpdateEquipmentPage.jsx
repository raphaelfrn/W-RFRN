import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateEquipmentPage() {
  const [equipmentPage, setEquipmentPage] = useState({
    character_id:"",
    level:"",
    items_list:""
  });

  const navigate = useNavigate();
  const location = useLocation();
  const equipmentPageId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchEquipmentPageData = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/equipmentPages/${equipmentPageId}`);
        if (response.data) {
          setEquipmentPage(response.data); 
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchEquipmentPageData();
  }, [equipmentPageId]);

  const handleChange = (e) => {
    setEquipmentPage((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/equipmentPages/${equipmentPageId}`, equipmentPage);
      navigate("/equipmentPages");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Update the equipment page</h1>
      <input
        type="number"
        placeholder="character_id"
        onChange={handleChange}
        name="character_id"
        value={equipmentPage.character_id}
      />
      <input
        type="number"
        placeholder="level"
        onChange={handleChange}
        name="level"
        value={equipmentPage.level}
      />
      <input
        type="text"
        placeholder="items_list"
        onChange={handleChange}
        name="items_list"
        value={equipmentPage.items_list}
      />

      <button className="formButton" onClick={handleClick}>
        Update
      </button>
    </div>
  );
}

export default UpdateEquipmentPage;

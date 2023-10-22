import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"; 
import { Link } from "react-router-dom";


const Quests = () =>  {
  const [quests, setQuests] = useState([]);

  useEffect(() =>{
    const fetchAllQuests = async () => {
      try {
        const res = await axios.get("http://localhost:8800/quests");
        setQuests(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllQuests();
    
  }, []);

  const handleDelete = async (quest_id)=> {
    try {
      await axios.delete(`http://localhost:8800/quests/${quest_id}`);
      window.location.reload()
    } catch (error) {
      
    }
  }

  return (
    <div>
        <button>
          <Link to="/">index</Link>
        </button>
        <h1>Quests List</h1>
        <div className="quests">
        {quests.map(quest=>(
          <div key={quest.quest_id}  className="quest" >
              <h2>{quest.quest_name}</h2>
              <h2>{quest.quest_description}</h2>
              <h2>{quest.completion_status}</h2>
              <button className="delete" onClick={()=> handleDelete(quest.quest_id)} >Delete</button>
              <button className="update"><Link
                to={`/updateQuest/${quest.quest_id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link></button>

              

          </div>
        ))}
        </div>
        <button>
          <Link to="/addQuest">Add new quest</Link>
        </button>
      
      
    </div>
  )
}

export default Quests
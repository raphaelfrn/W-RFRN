import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"; 
import { Link } from "react-router-dom";


const Characters = () =>  {
  const [characters, setCharacters] = useState([]);

  useEffect(() =>{
    const fetchAllCharacters = async () => {
      try {
        const res = await axios.get("http://localhost:8800/characters");
        setCharacters(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllCharacters();
    
  }, []);

  const handleDelete = async (character_id)=> {
    try {
      await axios.delete(`http://localhost:8800/characters/${character_id}`);
      window.location.reload()
    } catch (error) {
      
    }
  }
  
  /* console.log(characters); */

  return (
    <div>

        <h1>W-RFRN</h1>
        <div className="characters">
        {characters.map(character=>(
          <div key={character.character_id}  className="character" >
              <h2>{character.character_name}</h2>
              <h2>{character.character_lvl}</h2>
              <h2>{character.character_class}</h2>
              <button className="delete" onClick={()=> handleDelete(character.character_id)} >Delete</button>
              <button className="update"><Link
                to={`/update/${character.character_id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link></button>

              

          </div>
        ))}
        </div>
        <button>
          <Link to="/add">Add new character</Link>
        </button>
      
      
    </div>
  )
}

export default Characters
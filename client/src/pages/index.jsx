import React from 'react';
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div>

    <h1>W-RFRN</h1>
        
            <button>
            <Link to="/characters">Characters</Link>
            </button>
            <button>
            <Link to="/quests">Quests</Link>
            </button>
            <button>
            <Link to="/items">Items</Link>
            </button>
            <button>
            <Link to="/equipmentPages">Equipment Pages</Link>
            </button>



    </div>
  )
}

export default index
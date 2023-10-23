import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

// database config
const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "w-rfrn"
})

app.use(express.json())
app.use(cors())

// app.get to do a get request : display this message localhost:8800/
app.get("/", (req, res)=> {
    res.json("hello this is the backend ")
})



// CHARACTERS METHODS


// READ ONE 

app.get("/characters/:character_id", (req, res) => {
  const character_id = req.params.character_id;
  const q = "SELECT * FROM characters WHERE character_id = ?";
  db.query(q, [character_id], (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.length === 0) {
      return res.status(404).json("Character not found");
    }
    return res.json(data[0]); 
  });
});

// display all characters as Json in navigateur at localhost:8800/characters
app.get("/characters", (req, res)=>{
    const q= "SELECT * FROM characters" 
    db.query(q,(err,data)=>{
        if(err) {return res.json(err);}
        return res.json(data);
    })
})




// Post method with values from client (body)
app.post("/characters", (req, res) => {
    const q = "INSERT INTO characters(`character_name`, `character_lvl`, `character_class`, `user_id`) VALUES (?)";
  
    const values = [
      req.body.character_name,
      req.body.character_lvl,
      req.body.character_class,
      req.body.user_id,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

// DELETE

app.delete("/characters/:character_id", (req, res) => {
const character_id = req.params.character_id;
const q = "DELETE FROM CHARACTERS WHERE character_id = ?"
db.query(q,[character_id], (err, data)=>{
  if (err) return res.send(err);
  return res.json("character deleted successfully");
})

})

// UPDATE 

app.put("/characters/:character_id", (req, res) => {
  const character_id = req.params.character_id;
  const q = "UPDATE characters SET `character_name` = ?, `character_lvl`= ?, `character_class`= ? WHERE character_id = ?";
  const values = [
    req.body.character_name,
    req.body.character_lvl,
    req.body.character_class
  ];

  db.query(q,[...values,character_id], (err, data)=>{
    if (err) return res.send(err);
    return res.json("character updated successfully");
  })
  
  })


// QUEST METHODS  

// READ ONE 

app.get("/quests/:quest_id", (req, res) => {
  const quest_id = req.params.quest_id;
  const q = "SELECT * FROM quests WHERE quest_id = ?";
  db.query(q, [quest_id], (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.length === 0) {
      return res.status(404).json("Quest not found");
    }
    return res.json(data[0]); 
  });
});

// READ ALL 

app.get("/quests", (req, res)=>{
  const q= "SELECT * FROM quests" 
  db.query(q,(err,data)=>{
      if(err) {return res.json(err);}
      return res.json(data);
  })
})

// CREATE
app.post("/quests", (req, res) => {
  const q = "INSERT INTO quests(`quest_name`, `quest_description`, `quest_type`) VALUES (?)";

  const values = [
    req.body.quest_name,
    req.body.quest_description,
    req.body.quest_type,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// DELETE

app.delete("/quests/:quest_id", (req, res) => {
const quest_id = req.params.quest_id;
const q = "DELETE FROM quests WHERE quest_id = ?"
db.query(q,[quest_id], (err, data)=>{
if (err) return res.send(err);
return res.json("quest deleted successfully");
})

})

// UPDATE 

app.put("/quests/:quest_id", (req, res) => {
const quest_id = req.params.quest_id;
const q = "UPDATE quests SET `quest_name` = ?, `quest_description`= ?, `quest_type`= ? WHERE quest_id = ?";
const values = [
  req.body.quest_name,
  req.body.quest_description,
  req.body.quest_type
];

db.query(q,[...values,quest_id], (err, data)=>{
  if (err) return res.send(err);
  return res.json("quest updated successfully");
})

})


// ITEMS METHODS  

// READ ONE 

app.get("/items/:item_id", (req, res) => {
  const item_id = req.params.item_id;
  const q = "SELECT * FROM items WHERE item_id = ?";
  db.query(q, [item_id], (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.length === 0) {
      return res.status(404).json("Item not found");
    }
    return res.json(data[0]); 
  });
});

// READ ALL 

app.get("/items", (req, res)=>{
  const q= "SELECT * FROM items" 
  db.query(q,(err,data)=>{
      if(err) {return res.json(err);}
      return res.json(data);
  })
})

// CREATE
app.post("/items", (req, res) => {
  const q = "INSERT INTO items(`item_name`, `item_type`, `recipy`) VALUES (?)";

  const values = [
    req.body.item_name,
    req.body.item_type,
    req.body.recipy,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// DELETE

app.delete("/items/:item_id", (req, res) => {
const item_id = req.params.item_id;
const q = "DELETE FROM items WHERE item_id = ?"
db.query(q,[item_id], (err, data)=>{
if (err) return res.send(err);
return res.json("item deleted successfully");
})

})

// UPDATE 

app.put("/items/:item_id", (req, res) => {
const item_id = req.params.item_id;
const q = "UPDATE items SET `item_name` = ?, `item_type`= ?, `recipy`= ? WHERE item_id = ?";
const values = [
  req.body.item_name,
  req.body.item_type,
  req.body.recipy
];

db.query(q,[...values,item_id], (err, data)=>{
  if (err) return res.send(err);
  return res.json("item updated successfully");
})

})


// EQUIPMENT PAGES METHODS  

// READ ONE 

app.get("/equipmentPages/:equipment_page_id", (req, res) => {
  const equipment_page_id = req.params.equipment_page_id;
  const q = "SELECT * FROM equipmentpages WHERE equipment_page_id = ?";
  db.query(q, [equipment_page_id], (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.length === 0) {
      return res.status(404).json("Equipment page not found");
    }
    return res.json(data[0]); 
  });
});

// READ ALL 

app.get("/equipmentPages", (req, res)=>{
  const q= "SELECT * FROM equipmentpages" 
  db.query(q,(err,data)=>{
      if(err) {return res.json(err);}
      return res.json(data);
  })
})

// CREATE
app.post("/equipmentPages", (req, res) => {
  const q = "INSERT INTO equipmentpages(`character_id`, `level`, `items_list`) VALUES (?)";

  const values = [
    req.body.character_id,
    req.body.level,
    req.body.items_list
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

// DELETE

app.delete("/equipmentPages/:equipment_page_id", (req, res) => {
const equipment_page_id = req.params.equipment_page_id;
const q = "DELETE FROM equipmentPages WHERE equipment_page_id = ?"
db.query(q,[equipment_page_id], (err, data)=>{
if (err) return res.send(err);
return res.json("equipment page deleted successfully");
})

})

// UPDATE 

app.put("/equipmentPages/:equipment_page_id", (req, res) => {
const equipment_page_id = req.params.equipment_page_id;
const q = "UPDATE equipmentPages SET `character_id` = ?, `level`= ?, `items_list`= ? WHERE equipment_page_id = ?";
const values = [
  req.body.character_id,
  req.body.level,
  req.body.items_list
];

db.query(q,[...values,equipment_page_id], (err, data)=>{
  if (err) return res.send(err);
  return res.json("Equipment page updated successfully");
})

})

// app port
app.listen(8800, ()=>{
    console.log("Connected to backend port 8800")
})
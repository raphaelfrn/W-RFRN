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

// READ 

app.get("/quests", (req, res)=>{
  const q= "SELECT * FROM quests" 
  db.query(q,(err,data)=>{
      if(err) {return res.json(err);}
      return res.json(data);
  })
})

// CREATE
app.post("/quests", (req, res) => {
  const q = "INSERT INTO quests(`quest_name`, `quest_description`, `completion_status`) VALUES (?)";

  const values = [
    req.body.quest_name,
    req.body.quest_description,
    req.body.completion_status,
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
const q = "UPDATE quests SET `quest_name` = ?, `quest_description`= ?, `completion_status`= ? WHERE quest_id = ?";
const values = [
  req.body.quest_name,
  req.body.quest_description,
  req.body.completion_status
];

db.query(q,[...values,quest_id], (err, data)=>{
  if (err) return res.send(err);
  return res.json("quest updated successfully");
})

})



// app port
app.listen(8800, ()=>{
    console.log("Connected to backend port 8800")
})
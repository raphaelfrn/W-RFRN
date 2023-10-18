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

// display all characters as Json in navigateur at localhost:8800/books
app.get("/characters", (req, res)=>{
    const q= "SELECT * FROM characters" 
    db.query(q,(err,data)=>{
        if(err) {return res.json(err);}
        return res.json(data);
    })
})

// // post method (use postman to try it)

// app.post("/characters",(req,res)=>{
//     const q= "INSERT INTO characters (`character_name`, `character_lvl`,`character_class`, `user_id`) VALUES (?)"
//     const values= ["Raphalabgtueuse", "172", "Huppermage", 1]

//     db.query(q,[values], (err, data)=>{
//         if(err) return res.json(err)
//         return res.json[data]
//     })
// })

// custom post method with values from client (body)
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

// app port
app.listen(8800, ()=>{
    console.log("Connected to backend port 8800")
})
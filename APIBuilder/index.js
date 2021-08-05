const express = require ("express");
const cors = require("cors")
const app=express();
app.use(cors());


app.get("/",(req,res)=>{

   res.json({data:["umar","uzair","zoha","bushra"]})

        })

    app.get("/emp",(req,res)=>{

            res.send("we learning with express")

        })
            app.get("/dept",(req,res)=>{

                res.send("we are completing our projects")

            })

if (app.listen(2000)){
    console.log("connected to local host:2000")
}


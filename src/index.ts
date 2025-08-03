import express from "express"

export const app = express()

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.get("/cpu",(req,res)=>{
    for(let i  = 0 ; i < 10000000000; i++){
        Math.random()
    }
    res.send("Hello")
})


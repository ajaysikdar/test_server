const express = require("express")
const app = express()

app.get('/user',(req,res)=>{
    res.send('Hello World!')
})

app.listen('3001',()=>{
    console.log(`Example app listening at http://localhost:${3001}`)
})
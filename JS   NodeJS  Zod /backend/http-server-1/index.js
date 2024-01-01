// HELLO WORLD BACKEND SERVER

const express = require('express')
const app = express() /// gives back an object with methods
const port = 3000

app.get('/',function(req,res){       // route handler   -> consists of request and response
    res.send('<h1>Hello World</h1>')   // response and request headers as callbacks

})

app.listen(port,function(){
    console.log(`Listening on ${port}`)
})
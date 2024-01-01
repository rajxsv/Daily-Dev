const express = require('express')
const app = express()  
const port = 4000

app.use(express.json())

app.get('/',function(req,res){   
    res.json({
        Name : "Raj",
        Age : "21",
        Hobbies : {
            Football : "Best",
            Cricket : "Okayish"  
        },
        Likes : ["Alone","Unborthered","Gibberish","blah","blah"]
    })
})

app.post('/post',function(req,res){

    console.log(req.headers,req.body)

    res.json({
        message : 'WTF you wanna change here'
    })
})


app.listen(port,function(){
    console.log(`Listening on ${port}`)
})
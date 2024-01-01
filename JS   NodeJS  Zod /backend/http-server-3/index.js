const express = require("express");
const app = express();
const port = 3000

const users = [{
    name : "Rajpreet",
    kidney : [{
        healthy : false,
    }]
}]

app.use(express.json())

// query parameters
app.get('/',function(req,res){
    
    const rajpreetKidneys = users[0].kidney // array
    const numberOfKidneys = rajpreetKidneys.length
    let numberofHealthyKidneys = 0;

    for (let i = 0; i < rajpreetKidneys.length; i++) {
        const element = rajpreetKidneys[i];
        if(element.healthy){
            numberofHealthyKidneys++;
        }
    }
    const numberOfUnHealthyKidneys = numberOfKidneys - numberofHealthyKidneys;

    res.send(`<h1> Healthy = ${numberofHealthyKidneys} </h1><br> <h1> Unhealthy = ${numberOfUnHealthyKidneys} </h1>`)
})

// send data in body

app.post('/',function(req,res){
    const data = req.body.isHealthy
    users[0].kidney.push({
        healthy : data
    })
    res.send('post done')
})

app.put('/',function(req,res){
    let n = users[0].kidney.length;
    for(let i=0; i<n; i++){
        if(users[0].kidney[i]) {
            users[0].kidney[i] = false;
            break;
        }
    }
    res.send('put done')
})

app.delete('/',function(req,res){
    let n = users[0].kidney.length;
    for(let i=0; i<n; i++){
        if(users[0].kidney[i]) {
            users[0].kidney[i] = true;
        }
    }
    res.send('delete done')
})

app.listen(port,function(){
    console.log(`Listening on ${port}`)
})









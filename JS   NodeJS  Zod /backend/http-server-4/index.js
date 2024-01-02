const mongoose = require('mongoose');

async function main() {
    // STEP 0 
    await mongoose.connect('mongodb+srv://rajessvee:Raj%40150602@cluster0.ym2iwci.mongodb.net/');
    
    //  STEP 1 
    const userSchema = new mongoose.Schema({
        name : String,
        email : String,
        Password : String
    })
    
    // STEP 2
    const User = mongoose.model('U',userSchema)  
    // whatever i put as first arguement gets added as with an s 
    // example if i put in Use it gets to Uses
    
    // STEP 3
    const user = new User({
        name : "Rajpreet Singh",
        email : 'rajessvee@gmail.com',
        Password : 'Forget Password 10:34'
    })      
    
    // STEP 4
    user.save().then(()=>console.log('done'))
}

main()
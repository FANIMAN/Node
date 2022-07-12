const mongoose = require('mongoose');

const connect = async ()=>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            useCreateIndex:true
        });

        console.log(`MongoDB Connnected ${con.connection.host}`);   //await tau qaba con keenya because it is Yeroo Tikko Ijaa Fudhatuuf Amma Load Godhutti.

        
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

}

module.exports = connect;
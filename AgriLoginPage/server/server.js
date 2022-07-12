const express = require("express");
const connect = require('./database/connection');
const cors = require('cors');


//use npm run server    to run this server.js

require('dotenv').config({path:"config.env"})
const PORT = process.env.PORT || 8080;
 //const PORT=4000;

const app = express();
app.use(express.json());
app.use(cors());

//database connection
// connect();

app.use('/api', require('./router/router'));


// app.get('/', (req, res)=>{
//     res.send("Server Request");
// })

app.listen(PORT, ()=>{
    console.log(`The Server Is Running On http://localhost:4000`);
})
const express  = require('express');
const { join } = require('lodash');
const app = express();
const port  =  process.env.PORT || 3001;
const cors = require("cors");
const path = require("path");


app.use(cors({
    origin: 'https://jobhuntly-fb6d9c77ebdd.herokuapp.com',
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type']
  }));
  

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
  
// combine frontend with backend
app.use(express.static(path.join(__dirname, '../client/build')));


//handle all my react routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });

//create simple server
app.get('/', (req, res)=>{
    res.send('Welcome To The Backend Server For my Jobhuntly Site.')
});



app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
});
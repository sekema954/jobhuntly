const express  = require('express');
const { join } = require('lodash');
const app = express();
const port  =  process.env.PORT || 3001;
const cors = require("cors");
const path = require("path");


const allowedOrigins = [
    'https://jobhuntly-fb6d9c77ebdd.herokuapp.com', 
    'https://indeed12.p.rapidapi.com/company/${encodeURIComponent(companyName)}?locality=us',
    'https://indeed12.p.rapidapi.com/jobs/search?query=manager&location=Georgia&page_id=1&locality=us&fromage=1&radius=',
    'https://indeed12.p.rapidapi.com/jobs/search?query=${jobTitle}&location=${location}&page_id=1&locality=us&fromage=1&radius=25'
  ];


  app.use(cors({
    origin: function(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type']
  }));

  
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
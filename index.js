const express = require('express');
const port = 8000;
const cors = require('cors');
// const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const app = express();

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
app.use(cors(corsOptions))
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', require('./routes'));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assests'));
app.listen(port, (err) => {
    if(err){
        console.log(`There was an error in starting the server ${err}`);
    }
    console.log(`Server is up and running on port ${port}`);
});



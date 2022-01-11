const express = require('express');
const port = 8000;
const app = express();

app.use('/', require('./routes'));

app.listen(port, (err) => {
    if(err){
        console.log(`There was an error in starting the server ${err}`);
    }
    console.log(`Server is up and running on port ${port}`);
})
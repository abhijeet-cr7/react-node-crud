const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crud_basics');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "error in connecting to mongoDB"));
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
}); 
module.exports = db;
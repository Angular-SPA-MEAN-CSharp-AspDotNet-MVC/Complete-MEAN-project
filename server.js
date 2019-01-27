
const express       =   require('express');
const MongoClient   =   require('mongodb').MongoClient;
const bodyParser    =   require('body-parser');

// ./config/db.js is not committed. This file save the db connection url
const db            =   require('./config/db');

const app           =   express();

const port  =   8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);
    dbb = database.db("notable");
    require('./app/routes')(app, dbb);
    app.listen(port, () => {
        console.log('We are live on ' + port) ;
    });
});


module.exports = function(app,db){
    app.post('/notes', (req, res) => {
       //  It creates the note here
        console.log(req.body);
       res.send('Hello');
    });

}
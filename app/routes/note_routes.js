
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app,db){

    // the function of "update"
    app.put( '/notes/:id', (req, res) => {
        const id        =   req.params.id;
        const details   =   {'_id' : new ObjectID(id)};
        const note      =   { text: req.body.body, title: req.body.title };
        db.collection('notes').update(details, note, (err, result) => {
            if (err){
                res.send({'error' : 'An error has occurred'});
            }
            else {
                res.send(note);
            }
        });
    });

    // the function of "delete"
    app.delete('/notes/:id', (req, res) => {
        const id        =   req.params.id;
        const details   =   {'_id' : new ObjectID(id)};
        db.collection('notes').remove(details, (err, item) => {
            if (err){
                res.send({'error' : 'An error has occurred'});
            }
            else {
                res.send('Note ' + id + ' deleted!');
            }
        });
    });

    // the function of "read"
    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id)}; // "details" is the request payload
        db.collection('notes').findOne(details, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            }
            else {
                res.send(item);
            }
        });
    });

    // the function of "create"
    app.post('/notes', (req, res) => {
        // const note works like a payload in the request body
        const note = { text: req.body.body , title : req.body.title };
        db.collection('notes').insert(note, (err, result) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            }
            else {
                res.send(result.ops[0]);
            }
        })
    });

}

module.exports = function(app, db){
    // Create User
    app.post("/users", (req, res) => {
        const user = {
            name: req.body.name,
            bitmoji_url: req.body.bitmoji_url,
            username: req.body.username,
            image: req.body.image
        };

        db.collection('users').insert(user, (err, result) => {
            if(err){
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    //View all users
    app.get("/users", (req, res) => {
        db.collection('users').find( {} ).toArray((err, item) => {
            if(err){
                res.send({'error': 'an error has occurred'});
            } else {
                res.send(item);
            }
        });
    });
}
//-A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. 
// This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.

var surveryData = require("../data/surveryData");

module.exports = function(app){

app.get('/api/freinds', function (reqm res){
        res.json(freindsData);
    });

app.post('/api/freinds', function(req, res){
    res.json(surveryData);
});

}
//-A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. 
// This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.
var path = require('path');

var friends = require("../app/freinds.js");

module.exports = function(app) {
  // GET 
  app.get("/api/freinds", function(req, res) {
    res.json(freinds);
  });
//  ADD(post) Entry
  app.post("../app/freinds.js", function(req, res) {
    console.log(req.body.scores);

    var user = req.body;

    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    var bestFriendIndex = 0;
    var minimumDifference = 40;

    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }
     if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }
 friends.push(user);

    res.json(friends[bestFriendIndex]);
  });
};
var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
      });
    app.post("/api/survey", function(req, res) {
        var newSurvey = req.body;
        console.log(newSurvey);
        compatibility();
        friends.push(newSurvey);
        res.json(newSurvey);
    });
    app.get("/api/compatibility", function(req, res) {
        return res.json(bestFriend);
    });
}

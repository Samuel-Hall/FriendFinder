var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
      });
    app.post("/api/survey", function(req, res) {
        var newSurvey = req.body;
        var userScores = newSurvey.scores;
        var bestFriend;    
        function convertScores() {
            for (var i = 0; i < userScores.length; i++) {
                userScores[i] = parseInt(userScores[i]);
            }
        }
        function compatibility() {
            console.log("Hold tight");
            var totalDiffArray = [];
            var minTotalDiff;
            var minDiffIndex;
            for (var j = 0; j < friends.length; j++) {
                var totalDifference = 0;
                // compare scores
                for (var k = 0; k < userScores.length; k++) {
                    totalDifference += Math.abs(userScores[k] - friends[j].scores[k]);
                }
                totalDiffArray.push(totalDifference);
                console.log("Total differnce array: " + totalDiffArray);
            }
            // find the index of the smallest number in the totalDiffArray
            minTotalDiff = Math.min.apply(Math, totalDiffArray);
            console.log("Minimum total difference: " + minTotalDiff);
            minDiffIndex = totalDiffArray.indexOf(minTotalDiff);
            console.log("Index of minimum: " + minDiffIndex);
            bestFriend = friends[minDiffIndex];
            console.log("Your best friend is: " + bestFriend.name);
            
        }
        convertScores();
        compatibility();
        friends.push(newSurvey);
        res.json(bestFriend);
    });  
}

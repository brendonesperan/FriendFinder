var friendData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });



  // I'LL JUST THROW ALL THIS OUT
  // app.post("/api/friends", function(req, res) {
  //   // compatibility logic; use absolute values
  //   /*
  //   Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
  //   The closest match will be the user with the least amount of difference.
  //   */
  //   // var bestMatch;
  //   // var totalDifference;
  //   // var one;
  //   // var two;
  //   // Math.abs(one-two);
    
  //   var newFriend = req.body;
  //   var currentUserScores = req.body.scores;
  //   var savedScores = [];
  //   console.log("Friend list: " + friendData);
  //   for(var i = 0; i < friendData.length; i++){
  //       var score = friendData[i].scores;
  //       var totalDifference = 0;
  //       for(var x = 0; x<score.length; x++){
  //           var difference = Math.abs(currentUserScores[x]-score[x]);
  //           totalDifference = totalDifference + difference;
  //       }
  //       savedScores.push(totalDifference);
  //   }
  //   var match = matchmaker(savedScores);
  //   friendData.push(newFriend);
  //   res.json(friendData[match]);
  // });

  // function matchmaker(friendData) {
  //   var match = friendData[0];
  //   var matchIndex = 0;
  //   for (var i = 1; i < friendData.length; i++) {
  //       console.log
  //       if (friendData[i] < match) {
  //           matchIndex = i;
  //           match = friendData[i];
  //       }
  //   console.log("Match: " + match)
  //   }
  //   return matchIndex;
  // };



  // START OVER
  app.post("/api/friends", function(req, res) {
    // console.log(res);
    // var newFriend = req.body;
    // var newFriendScores=newFriend.scores;
    // var totalDifference =0;
    // var allDifferences = []; 
    // for(var i=0;i<friendData.length;i++){
    //   console.log(friendData[i].name);
    // //	totalDifference = 0;
    // // We then loop through all the scores of each friend
    // for (var j=0; j<10; j++){
    //   // this adds the numerical answers of each friend to the total difference; then uses the absolute value to determine the difference between the two (absolute value is used so that 5-3 and 3-5 both equal 2)
    //   totalDifference += Math.abs(friendData[i].scores[j] - newFriend.scores[j]);
    // }
    
    // // each total difference, for each potential friend, is pushed into the allDifferences array 
    // allDifferences.push(totalDifference);
    // // total difference is reset back to zero
    // totalDifference = 0;
    // }
    
    // //best match will give the smallest values 
    // var bestMatch = friendData[allDifferences.indexOf(Math.min.apply(null, allDifferences))];
    
    // res.send(bestMatch);
    // console.log(bestMatch);
    // newFriend.push(friends);
    var newFriend = req.body;
var newFriendScores=newFriend.scores;
var totalDifference =0;
var allDifferences = []; 
for(var i=0;i<friendData.length;i++){
	console.log(friendData[i].name);[]
//	totalDifference = 0;
// We then loop through all the scores of each friend
for (var j=0; j<10; j++){
	// this adds the numerical answers of each friend to the total difference; then uses the absolute value to determine the difference between the two (absolute value is used so that 5-3 and 3-5 both equal 2)
	totalDifference += Math.abs(friendData[i].scores[j] - newFriend.scores[j]);
}

// each total difference, for each potential friend, is pushed into the allDifferences array 
allDifferences.push(totalDifference);
// total difference is reset back to zero
totalDifference = 0;
}

//best match will give the smallest values 
var bestMatch = friendData[allDifferences.indexOf(Math.min.apply(null, allDifferences))];
console.log(bestMatch)
res.send(bestMatch);
    });


};

var politician = function(name, color) {
  var candidate = {};
  candidate.name = name;
  candidate.electionResults = null;
  candidate.voteTotal = 0;
  candidate.color = color;

  candidate.voteCount = function() {
    this.voteTotal = 0;
    for (var i = 0; i < this.electionResults.length; i++) {
      this.voteTotal = this.voteTotal + this.electionResults[i];
    }
  }

  return candidate;

};

 var april = politician("April Bowler", [132, 17, 11]);

 var john = politician("John Smith", [245, 141, 136]);


april.electionResults = [5, 1, 7, 2, 33, 6, 4, 2,
1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9,
3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1,
3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

john.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2,
15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1,
3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6,
1, 3, 17, 3, 1, 2, 11, 2, 3, 1];


april.electionResults[9] = 1;
john.electionResults[9] = 28;

april.electionResults[4] = 17;
john.electionResults[4] = 38;

april.electionResults[43] = 11;
john.electionResults[43] = 27;

var setStateResults = function(state) {
  theStates[state].winner = null;

  if (april.electionResults[state] > john.electionResults[state]) {
    theStates[state].winner = april;
  } else if (april.electionResults[state] < john.electionResults[state]) {
    theStates[state].winner = john;
  }

  var stateWinner = theStates[state].winner;

  if (stateWinner != null) {
    theStates[state].rgbColor = stateWinner.color;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }

  var stateInfoTable = document.getElementById("stateResults");
  var header = stateInfoTable.children[0].children[0];
  var stateName = header.children[0];
  var stateAbbrev = header.children[1];

  stateName.innerText = theStates[state].nameFull;
  stateAbbrev.innerText = theStates[state].nameAbbrev;

  stateInfoTable.children[1].children[0].children[0].innerText = april.name;
  stateInfoTable.children[1].children[0].children[1].innerText = april.electionResults[state];
  stateInfoTable.children[1].children[1].children[0].innerText = john.name;
  stateInfoTable.children[1].children[1].children[1].innerText = john.electionResults[state];

  if (stateWinner != null) {
    stateInfoTable.children[1].children[2].children[1].innerText = stateWinner.name;
  } else {
  stateInfoTable.children[1].children[2].children[1].innerText = "DRAW";
  }

};

april.voteCount();
john.voteCount();

var winner = "????"

if (april.voteTotal > john.voteTotal) {
  winner = april.name;
} else if (april.voteTotal < john.voteTotal) {
  winner = john.name;
} else {
  winner = "Its a Draw!";
}

var countryTable = document.getElementById("countryResults");

countryTable.children[0].children[0].children[0].innerText = april.name;
countryTable.children[0].children[0].children[1].innerText = april.voteTotal;
countryTable.children[0].children[0].children[2].innerText = john.name;
countryTable.children[0].children[0].children[3].innerText = john.voteTotal;
countryTable.children[0].children[0].children[5].innerText = winner;

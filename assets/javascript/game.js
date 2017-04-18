//Need to display randNum at start of game between 19 - 120
//When crystal icon is clicked the userTotalNum updates the counter
//Need to make crystal icons clickable with numeric value between 1 - 12
//User wins if their total matches the games randNum shown
//numWins should reflect the number of wins the user has
//User loses if their total goes over the randNum shown
//numLosses should reflect the number of losses the user has
//Game needs to restart when user wins or loses
//New randNum should reset and appear when game resets
//Crystals should also reset with new values

//Double check you've done everything per game instructions and to make game to work

$(document).ready(function(){

	var numWins = 0;
	
	var numLosses = 0;
	
	var userTotalNum = 0;

$("#wins").text(numWins);

$("#losses").text(numLosses);

	var randy = Math.floor((Math.random() * 101) + 19);

$("#randNumb").text(randy);

	var numY = Math.floor((Math.random() * 11) + 1);
	var numP = Math.floor((Math.random() * 11) + 1);
	var numG = Math.floor((Math.random() * 11) + 1);
	var numB = Math.floor((Math.random() * 11) + 1);



$("#yellow").on ("click", function(){
	userTotalNum = userTotalNum + numY;
	$("#exactNum").text(userTotalNum); 

        if (userTotalNum == randy){
        	numWins++;
        	$("#wins").text(numWins);
     		reset();
     	}

       	else if ( userTotalNum > randy){
       		numLosses++;
       		$("#losses").text(numLosses);
			reset();
		}
	});

$("#pink").on ("click", function(){
	userTotalNum = userTotalNum + numP;
	$("#exactNum").text(userTotalNum); 

        if (userTotalNum == randy){
        	numWins++;
        	$("#wins").text(numWins);
     		reset();
     	}

       	else if ( userTotalNum > randy){
       		numLosses++;
       		$("#losses").text(numLosses);
			reset();
		}
	});

$("#green").on ("click", function(){
	userTotalNum = userTotalNum + numG;
	$("#exactNum").text(userTotalNum); 

        if (userTotalNum == randy){
        	numWins++;
        	$("#wins").text(numWins);
     		reset();
     	}

       	else if ( userTotalNum > randy){
       		numLosses++;
       		$("#losses").text(numLosses);
			reset();
		}
	});

$("#blue").on ("click", function(){
	userTotalNum = userTotalNum + numB;
	$("#exactNum").text(userTotalNum); 

        if (userTotalNum == randy){
        	numWins++;
        	$("#wins").text(numWins);
     		reset();
     	}

       	else if ( userTotalNum > randy){
       		numLosses++;
       		$("#losses").text(numLosses);
			reset();
		}
	});

function reset(){
      randy = Math.floor((Math.random() * 101) + 19);

      $("#randNumb").text(randy);
      $("#totalNum").text(userTotalNum);
      $("#numWins").text(wins);
      $("#numLosses").text(losses);

	var numY = Math.floor((Math.random() * 11) + 1);
	var numP = Math.floor((Math.random() * 11) + 1);
	var numG = Math.floor((Math.random() * 11) + 1);
	var numB = Math.floor((Math.random() * 11) + 1);
      
      userTotalNum= 0;
      }; 


});
<script>
function getComputerChoice() {
    var randomNumber = math.floor(math.random() * 3);

    var randomAnswer = "";
    
    switch (randomNumber){
	case 0:
	    randomAnswer = "rock";
	    break;
	case 1:
	    randomAnswer = "paper";
	    break;
	case 2:
	    randomAnswer = "scissors";
	    break;

    return randomAnswer;
}

//function compareSelections(playerSelection, computerSelection) {


//}

var computerSelection = getComputerChoice();
console.log(computerSelection);
</script>

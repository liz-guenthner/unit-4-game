$(document).ready(function() {
    
    var randomNumber = '';
     // randomize number of treats puppy wants
     function Numbers(min,max){
        randomNumber=(Math.floor(Math.random()*(max-min+1)+min));
    }
    Numbers(19, 120)
    $('#random-number').text(randomNumber);

    var blueBoneNumber = 0;
    var yellowBoneNumber = 0;
    var redBoneNumber = 0;
    var greenBoneNumber = 0;
    var totalBonesGiven = 0;
    var wins = 0;
    var losses = 0;

    // Use a function to initialize game to guarantee a reset
    function initializeGame() {
        blueBoneNumber = '';
        yellowBoneNumber = '';
        redBoneNumber = '';
        greenBoneNumber = '';
        totalBonesGiven = '';
        wins = '';
        losses = '';

        $("#user-message, #wins, #losses").empty();
    }

   

    // randomize number of each bone value when clicked
    $(".bone").on("click", function() {

        function Numbers(min,max){
            blueBoneNumber=(Math.floor(Math.random()*(max-min+1)+min));
        }
        Numbers(1, 12)
        console.log(blueBoneNumber);

        // Check if we've already run a calculation, if so... we'll just.
        // if (isCalculated) {
        //   return false;
        // }

        // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
        // if (isOperatorChosen) {
        //   secondNumber += $(this).val();
        //   $("#second-number").text(secondNumber);

        // }
        // else {
        //   firstNumber += $(this).val();
        //   $("#first-number").text(firstNumber);
        // }

      });


    





    // Call initializeGame so we can set the state of our app
    initializeGame();
});

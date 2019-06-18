$(document).ready(function() {
    
    var randomNumber = '';
     // randomize number of treats puppy wants
     function Numbers(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    

    var values = {
        blue: null,
        yellow: null,
        red: null,
        green: null
    };

    var totalBonesGiven = 0;
    var wins = 0;
    var losses = 0;

    // Use a function to initialize game to guarantee a reset
    function initializeGame() {
        values.blue = Numbers(1, 12);
        values.yellow = Numbers(1, 12);
        values.red = Numbers(1, 12);
        values.green = Numbers(1, 12);
        totalBonesGiven = '';
        randomNumber = Numbers(19, 120);
        $('#random-number').text(randomNumber);
        $("#user-message").empty();
    }

    
    
    // randomize number of each bone value when clicked
    $(".bone").on("click", function() {
        var color = $(this).attr('data-value');
        var valueToAdd = values[color];
        valueToAdd = parseInt(valueToAdd);
        totalBonesGiven = parseInt(valueToAdd) + totalBonesGiven;
        totalBonesGiven = parseInt(totalBonesGiven);
        $('#user-message').text(totalBonesGiven);

        if (totalBonesGiven === randomNumber) {
            wins++;
            $('#wins').text(wins);
            $('#alert-user').text("Perfect! Play again!");
            initializeGame();
        } else if (totalBonesGiven > randomNumber) {
            losses++;
            $('#losses').text(losses);
            $('#alert-user').text("Too many, try again!");
            initializeGame();
        } else {
            $('#alert-user').text("More treats please!");
        }
    });


    





    // Call initializeGame so we can set the state of our app
    initializeGame();
});

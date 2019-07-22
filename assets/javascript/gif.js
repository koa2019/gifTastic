// global variables
var apiKey = 'WJ8rJf7UKPx63l6ga90zUlJpio0LezKb';
var queryURL1 = "http://api.giphy.com/v1/gifs/search?q=" + search + '&api_key=' + apiKey;
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=WJ8rJf7UKPx63l6ga90zUlJpio0LezKb";
var search = "";
var cartoons = ['Homer Simpson', 'Peter Griffin', 'Sailor Moon', 'Pinky & the Brain'];
var index;

$(document).ready(function() {

    //call to display initial cartoons array
    renderButtons();

    //function empties container before writing & appending buttons to page
    function renderButtons() {

        //empties container before writing new buttons to page
        //otherwise will get duplicate buttons
        $('.buttonContainer').empty();

        for (var x = 0; x < cartoons.length; x++) {

            var index = cartoons[x];
            var button = $('<button>') //create button
                .addClass('cartoon')
                .attr('name', index)
                .text(index);
            $('.buttonContainer').append(button); //create button & add to page
        }
    }
    //event listener to capture & store user input from form
    $('#add-cartoon').on('click', function(event) {

        //stops it from automatically submitting form
        event.preventDefault();

        //captures user input and stores it in variable
        var cartoon = $('#cartoon-input').val().trim();

        //pushes user input into cartoons array
        cartoons.push(cartoon);

        //call function to display object in array
        renderButtons();

        //clears input box 
        $('#cartoon-form').trigger("reset");

    });
    // renderButtons();

    //event listener for buttons clicked with class=cartoon
    $(document).on("click", ".cartoon", alertCartoonName);

    function alertCartoonName() {
        var cartoon = $(this).attr('name');
        alert('cartoon name = ' + cartoon);
    }

    // showGifs();

    // function showGifs() {
    //     var search = $(this).attr('name');

    //     $.ajax({
    //         url: queryURL,
    //         method: 'GET'
    //     }).then(function(response) {
    //         console.log(response);
    //         $('.responseContainer').text(response);
    //     })
    // }


})
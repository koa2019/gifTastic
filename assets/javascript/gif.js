// global variables
var apiKey = 'WJ8rJf7UKPx63l6ga90zUlJpio0LezKb';
var queryURL1 = "http://api.giphy.com/v1/gifs/search?q=" + search + '&api_key=' + apiKey;
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=WJ8rJf7UKPx63l6ga90zUlJpio0LezKb";
var search = "";
var cartoons = ['Homer Simpson', 'Peter Griffin', 'Sailor Moon', 'Pinky & the Brain'];
var index;

$(document).ready(function() {

    // renderButtons();

    function renderButtons() {

        //empties container before writing buttons to page
        $('.buttonContainer').empty();

        for (var x = 0; x < cartoons.length; x++) {

            var index = cartoons[x];
            var button = $('<button>') //create button
                .addClass('cartoon')
                .attr('name', index)
                .text(index);
            $('.buttonContainer').append(button); //create button & add to page
        }
        $('#cartoon-input').empty();

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

    });

    renderButtons();
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
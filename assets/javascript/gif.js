// global variables
var apiKey = 'WJ8rJf7UKPx63l6ga90zUlJpio0LezKb';
var queryURL1 = "http://api.giphy.com/v1/gifs/search?q=" + search + '&api_key=' + apiKey;
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=WJ8rJf7UKPx63l6ga90zUlJpio0LezKb";
var search = "";
var cartoons = ['Homer Simpson', 'Peter Griffin', 'Sailor Moon', 'Pinky & the Brain'];
var index;

$(document).ready(function() {

    for (var x = 0; x < cartoons.length; x++) {
        console.log(x)
        index = cartoons[x];
        var button = $('<button>') //create button
            .addClass('cartoon')
            .attr('name', index)
            .text(index);
        $('.buttonContainer').append(button); //create button & add to page
    }


    // $.ajax({
    //     url: queryURL,
    //     method: 'GET'
    // }).then(function(response) {
    //     console.log(response);
    // })

})
var apiKey = 'WJ8rJf7UKPx63l6ga90zUlJpio0LezKb';
var queryURL1 = "http://api.giphy.com/v1/gifs/search?q=" + search + '&api_key=' + apiKey;
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=WJ8rJf7UKPx63l6ga90zUlJpio0LezKb";
var search = "";

$.ajax({
    url: queryURL,
    method: 'GET'
}).then(function(response) {
    console.log(response);
})
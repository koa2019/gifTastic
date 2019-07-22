// global variables
var cartoons = ['Homer Simpson', 'Peter Griffin', 'Sailor Moon', 'Stewie'];
var index;

$(document).ready(function() {

    //call to display initial cartoons array
    renderButtons();
    //event listener for buttons clicked with class=cartoon
    $(document).on("click", ".cartoon", renderGifs);
    $(document).on("click", ".gif", isDataState);


    //-------------------functions------------------
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
                .attr('data-name', index)
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

    function renderGifs() {

        var search = $(this).attr('data-name');

        // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        //     search + "&api_key=" + apiKey + "&limit=10";

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            search + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response) {
            // $('.responseContainer').text(response);
            console.log(queryURL)
            console.log(response)

            var results = response.data;

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {

                // Creating and storing a div tag
                var gifDiv = $("<div>");

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + results[i].rating);

                // Creating and storing an image tag
                var gifImage = $("<img>");
                // Setting the src attribute of the image to a property pulled off the result item
                gifImage.attr("src", results[i].images.fixed_height.url)
                    .attr("data-still", results[i].images.fixed_height_still.url)
                    .attr("data-animate", results[i].images.fixed_height.url)
                    .attr("data-state", 'animate')
                    .attr('class', "gif");

                // Appending the paragraph and image tag to the gifDiv
                gifDiv.append(p);
                gifDiv.append(gifImage);

                // Prependng the gifDiv to the HTML page in the .responseContainer div
                $(".responseContainer").prepend(gifDiv);
            }
        })
    }

    function isDataState() {
        // $(".gif").on("click", function() {

        var state = $(this).attr("data-state");
        console.log(state)
            // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            // Then, set the image's data-state to animate
            // Else set src to the data-still value
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    }


})
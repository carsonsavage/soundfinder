
function searchArtists(artist) {
    $("#results").empty();
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);


        var upcomingEvents = $("<h1>").text(response.upcoming_event_count + " Upcoming Events");
        var gotoArtist = $("<a>").attr("href", response.url).text("See Tour Dates");

        // Append the new artist content
        $("#results").append(upcomingEvents, gotoArtist);


        var queryURLA = "https://tastedive.com/api/similar?q=" + artist + "&app_id=384826-williama-NJI189T2";
        $.ajax({
            url: queryURLA,
            dataType: "jsonp",
            method: "GET"
        }).then(function (response) {
            $("#results").empty();
            var count = 5
            for (var i = 0; i < count; i++) {
                console.log(response.Similar.Results[i].Name);
                var results = $("<ul>").text(response.Similar.Results[i].Name);

    var queryURLA = "https://tastedive.com/api/similar?q=" + artist + "&app_id=384826-williama-NJI189T2";
    $.ajax({
      url: queryURLA,
      dataType: "jsonp",
      method: "GET"
    }).then(function (response) {
      $("#results").empty();
          var count = 5 
      for (var i=0 ;i< count; i++ ){
        console.log(response.Similar.Results[i].Name);
        var results = $("<ul>").text(response.Similar.Results[i].Name);
        
        $("#results").append(results);
      }

        // Empty the contents, append the new artist content
        $("#results").empty();
        $("#results").append(upcomingEvents, gotoArtist);
    });

            // Empty the contents, append the new artist content

            $("#results").append(upcomingEvents, gotoArtist);

            // Youtube API Call
            var youtubeApiKey = "AIzaSyBmk_5NIy0Lqp_6usUzPRx-pD3Zk-LRXHY";

            var queryURL2 = "https://www.googleapis.com/youtube/v3/search" + "?part=snippet&q=" + artist + "&type=video&videoCaption=closedCaption&key=" + youtubeApiKey;

            $.ajax({
                url: queryURL2,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                var videoid = response.items[0].id.videoId
                console.log(videoid)
                var iframe = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoid}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

                // Empty the contents, append the new video
                $("#results").append(iframe);

            });
        });
    });

};


$("#searchButton").on("click", function () {
    event.preventDefault();
    var inputArtist = $("#findtext").val().trim();

    searchArtists(inputArtist);

});


var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});
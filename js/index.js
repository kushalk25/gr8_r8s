
$('#search_bar').on('submit', function (e) {
    title = e.target[0].value

    var fetch_url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
    fetch_url += '?' + $.param({
      'api-key': "8f50df51604143d9af719239e37befd1",
      'query': title
    });

    $.ajax ({
      type: 'GET',
      url: fetch_url,
      success: function(movies) {
          content_div = document.getElementById('content')
          var movieTitles = movies.results.display_title;

          $.each(movies.results, function(index, movie){
            var movieTitles = movie.display_title;
            var newDiv = document.createElement("div");
            newDiv.appendChild(document.createTextNode(movie.display_title));
            content_div.appendChild(document.createElement("br"));
            content_div.append(newDiv)
          });
      }
    });

    return false;
});

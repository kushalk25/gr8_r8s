
$('#search_bar').on('submit', function (e) {
    title = e.target[0].value

//
    var fetch_url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json";
   fetch_url += '?' + $.param({
     'api-key': "8f50df51604143d9af719239e37befd1",
     'query': title
   });

    $.ajax ({
      type: 'GET',
      url: fetch_url,
      success: function(movies) {
//          console.log(movies.results[0].display_title);
          debugger
          var movieTitles = movies.results.display_title;

          $.each(movies.results, function(index, movie){
            debugger
            var movieTitles = movie.display_title;
            console.log(movieTitles);

          });

      }

    });

    return false;
});

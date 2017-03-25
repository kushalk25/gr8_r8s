
$('#search_bar').on('submit', function (e) {
    title = e.target[0].value

    fetch_url = 'http://www.omdbapi.com/?t=' + title
    result = $.ajax ({
      type: 'GET',
      url: fetch_url,
      success: function(movies) {
          document.getElementById('content').innerHTML = movies.Metascore
      }

    });

    return false;
});

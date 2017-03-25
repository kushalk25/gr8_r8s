
// Get stuff from OMDB
function OnSearch() {
    alert('Form submitted!');
    return false;
}


function search() {
  $.ajax ({
  type: 'GET',
  url: 'http://www.omdbapi.com/?t=',
  success: function(movies) {

    $.each(movies, function(index, movies){
      var movieRating = movies.Metascore;
      console.log= (movieRating)
    })


  }

});
}

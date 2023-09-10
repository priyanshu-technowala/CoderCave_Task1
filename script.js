// This code will add a search bar to the blog.

var searchBar = document.getElementById('searchBar');
var results = document.getElementById('results');

searchBar.addEventListener('input', function() {
  var query = searchBar.value;

  // Make an AJAX request to fetch the results for the query.
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/search?query=' + query);
  xhr.onload = function() {
    var resultsData = JSON.parse(xhr.responseText);

    // Clear the results list.
    results.innerHTML = '';

    // Add the results to the results list.
    for (var i = 0; i < resultsData.length; i++) {
      var result = resultsData[i];
      var li = document.createElement('li');
      li.innerHTML = result.title;
      results.appendChild(li);
    }
  };

  xhr.send();
});

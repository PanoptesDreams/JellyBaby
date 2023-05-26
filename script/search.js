document.addEventListener("DOMContentLoaded", function () {

    function search() {
        // Get the selected search engine
        var searchEngine = document.getElementById("search-engine").value;

        // Get the search term entered by the user
        var searchTerm = document.getElementById("search-box").value.trim();

        if (searchTerm) {
            // Construct the search URL
            var searchUrl = searchEngine + searchTerm;

            // Open the search results in a new tab
            window.open(searchUrl, "_blank");
        }
    }

    // Function to handle the Enter key press on the search input
    function handleSearchKeyPress(event) {
        if (event.key === 'Enter') {
            search();
        }
    }

    // Add a click event listener to the search button
    const searchButton = document.querySelector('.searcherbutton');
    searchButton.addEventListener('click', search);

    // Add a keydown event listener to the search input
    const searchInput = document.getElementById('search-box');
    searchInput.addEventListener('keydown', handleSearchKeyPress);

});

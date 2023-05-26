document.addEventListener('DOMContentLoaded', function () {
    fetch('/quotes.txt')
        .then(response => response.text())
        .then(text => {
            const quotes = text.split('\n').filter(line => line.trim() !== '');

            // Get a random quote
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

            // Add the quote div to the main-content div
            const mainContent = document.getElementById('quotespace');
            mainContent.innerHTML = randomQuote;
        });
});

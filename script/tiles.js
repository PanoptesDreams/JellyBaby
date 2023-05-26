document.addEventListener("DOMContentLoaded", function () {

    const leftColumnLinksDiv = document.getElementById('left-column-links');

    // Read the contents of the `tile` folder
    fetch('./tile/')
      .then(response => response.text())
      .then(html => {
          // Parse the HTML string into a DOM tree
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');

          // Get all the HTML files in the folder
          const htmlFiles = Array.from(doc.querySelectorAll('a[href$=".html"]'))
                                .map(link => link.getAttribute('href'));

          // For each HTML file, fetch its contents and append them to the div
          htmlFiles.forEach(file => {
              fetch(`./tile/tile_${file}`)
                .then(response => response.text())
                .then(html => {
                    // Create a div element to hold the contents of the file
                    const fileDiv = document.createElement('div');
                    fileDiv.innerHTML = html;

                    // Append the contents to the `left-column-links` div
                    leftColumnLinksDiv.appendChild(fileDiv);
                });
          });
      });
});
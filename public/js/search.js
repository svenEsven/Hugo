document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    fetch("/index.json")
        .then(response => response.json())
        .then(data => {
            console.log('Fetched data:', data); // Debugging log

            const idx = lunr(function () {
                this.ref("href");
                this.field("title", { boost: 10 });
                this.field("summary");
                this.field("content");

                // Custom tokenizer for partial matches
                this.pipeline.remove(lunr.trimmer);
                this.pipeline.add(function (token) {
                    const minLength = 3; // Minimum length for partial matches
                    const tokens = [];
                    for (let i = minLength; i <= token.length; i++) {
                        tokens.push(token.slice(0, i));
                    }
                    return tokens;
                });

                data.forEach(doc => {
                    this.add(doc);
                });
            });

            // Handle search form submission
            const searchForm = document.getElementById("search-form");
            if (searchForm) {
                searchForm.addEventListener("submit", function (event) {
                    event.preventDefault();
                    const query = searchInput.value.trim();
                    if (query) {
                        window.location.href = `/search?q=${encodeURIComponent(query)}`;
                    }
                });
            }

            // Handle search results on the search results page
            const urlParams = new URLSearchParams(window.location.search);
            const query = urlParams.get("q");
            if (query && searchResults) {
                searchInput.value = query;
                const results = idx.search(query);
                console.log('Search results:', results); // Debugging log

                if (results.length > 0) {
                    searchResults.innerHTML = results.map(result => {
                        const item = data.find(doc => doc.href === result.ref);
                        if (!item) {
                            console.error(`No item found for href: ${result.ref}`);
                            return '';
                        }
                        return `<div><a href="${item.href}">${item.title}</a></div>`;
                    }).join("");
                } else {
                    searchResults.innerHTML = "<div>No results found</div>";
                }
            }

            searchInput.addEventListener("input", function () {
                const query = searchInput.value.trim();
                console.log('Search query:', query); // Debugging log

                if (query === "") {
                    searchResults.innerHTML = ""; // Clear results if input is empty
                    searchResults.style.display = "none"; // Hide the dropdown
                    return;
                }

                const results = idx.search(query);
                console.log('Search results:', results); // Debugging log

                if (results.length > 0) {
                    searchResults.innerHTML = results.map(result => {
                        const item = data.find(doc => doc.href === result.ref);
                        if (!item) {
                            console.error(`No item found for href: ${result.ref}`);
                            return '';
                        }
                        return `<div onclick="window.location.href='${item.href}'">${item.title}</div>`;
                    }).join("");
                    searchResults.style.display = "block"; // Show the dropdown
                } else {
                    searchResults.innerHTML = "<div>No results found</div>";
                    searchResults.style.display = "block"; // Show the dropdown
                }
            });

            // Hide the dropdown when clicking outside
            document.addEventListener("click", function (event) {
                if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
                    searchResults.style.display = "none";
                }
            });
        })
        .catch(error => {
            console.error('Error fetching or processing index.json:', error);
        });
});
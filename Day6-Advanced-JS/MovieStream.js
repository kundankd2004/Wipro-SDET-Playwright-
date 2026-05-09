const rawMovies = [
    "Inception | Sci-Fi | 12000",
    "The Lion King | Animation | 8000",
    "Mad Max | Action | invalid",
    "The Matrix | Sci-Fi | 15000",
    "Gladiator | Action | 4500",
]
function parseMovies(rawMovies) {
    const formattedMovies = rawMovies.map(movie => {
        const [name, genre, viewsText] = movie.split(" | ");
        let views = Number(viewsText);
        if (isNaN(views)) {
            views = 0;
        }
        return { name, genre, views };
    });

    const filteredMovies = formattedMovies.filter(movie => 
    (movie.genre === "Action" || movie.genre === "Sci-Fi") && movie.views > 5000);

    filteredMovies.sort((a, b) => b.views - a.views);

    return JSON.stringify(filteredMovies, null, 2);
}
console.log(parseMovies(rawMovies));
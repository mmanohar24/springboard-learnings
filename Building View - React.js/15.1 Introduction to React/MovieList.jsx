const MovieList = () => {
    return (
        <ul>
            <li> Top Gun: Maverick </li>
            <li> Grey's Anatomy </li>
            <li> Rebel & Ridge </li>
            <li> With Love </li>
        </ul>
    );
}


const App = () => {
    return (
        <div>
            <h2> App Component </h2>

            <h3> Here's my movie list </h3>
            <MovieList/>
        </div>
    );
}

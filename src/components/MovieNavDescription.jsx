import "./MovieNavDescription.css"

export function MovieNavDescription() {
    return (
        <div className="movieNavDescription">
            <p className="movie-nav-description">Play movie quizes
                and earn
                free tickets</p>
            <p className="movie-nav-subdesc">50k people are playing
                now</p>
            <div className="desc-btndiv">
                <button className="desc-btn">Start playing</button>
            </div>
        </div>
    )
}
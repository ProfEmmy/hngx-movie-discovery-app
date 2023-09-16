import "./Card.css"
import tomatoIcon from "../assets/PngItem_1381056 1.svg"
import ratingIcon from "../assets/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.svg"
import heartIcon from "../assets/Icon (2).svg"

export function Card({ posterImg, title, genres, releaseDate, vote_average, id }) {
    return (
        <div className="movie-card" data-testid="movie-card">
            <img src={posterImg} alt="movie poster" className="movie-poster" data-testid="movie-poster" />
            <button className="fav-btn" onClick={e => e.target.classList.toggle("active-fav-btn")}>
                <img src={heartIcon} alt="hear-icon" onClick={e => e.target.closest("button").classList.toggle("active-fav-btn")} />
            </button>
            <div className="movie-info">
                <p className="place-time" data-testid="movie-release-date">{releaseDate}</p>
                <a className="movie-title_" href={`/movies/${id}`} data-testid="movie-title">{title}</a>
                <div className="ratings-div">
                    <div className="ratings1">
                        <img src={ratingIcon} alt="rating icon" className="rating-icon" />
                        <p className="rating">{vote_average} / 100</p>
                    </div>
                    <div className="ratings2">
                        <img src={tomatoIcon} alt="tomato icon" className="tomato-icon" />
                        <p className="rating-percent">{vote_average}%</p>
                    </div>
                </div>
                <div className="movie-type">{genres}</div>
            </div>
        </div >
    )
}
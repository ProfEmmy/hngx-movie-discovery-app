import { MovieNavItem } from "../components/MovieNavItem"
import { MovieNavDescription } from "../components/MovieNavDescription"
import "./Movie.css"
import logo from "../assets/tv.svg"
import homeIcon from "../assets/Home.svg"
import moviesIcon from "../assets/Movie Projector.svg"
import tvIcon from "../assets/TV Show.svg"
import calendarIcon from "../assets/Calendar.svg"
import logoutIcon from "../assets/Logout.svg"
import movieImage from "../assets/Rectangle 29.svg"
import starIcon from "../assets/Star.svg"
import twotickets from "../assets/Two Tickets.svg"
import listIcon1 from "../assets/List (2).svg"
import moviesPreview from "../assets/movies preview.svg"
import playIcon from "../assets/Play.svg"

export function Movie({ movie_image, title, releaseYear, adult, overview, genres, runtime }) {
    return (
        <div className="movie-details-div">
            <nav className="movie-nav">
                <div className="movie-nav-div">
                    <div className="logo-nav-item">
                        <img src={logo} alt="logo" />
                        <h2>MovieBox</h2>
                    </div>
                    <MovieNavItem img={homeIcon} text="Home" href_="/" />
                    <div className="movies-nav-item">
                        <div className="movies-nav-item-div">
                            <img src={moviesIcon} className="movies-nav-item-img" />
                            <a href="" className="movies_nav_link">Movies</a>
                        </div>
                        <hr className="hr" />
                    </div>
                    <MovieNavItem img={tvIcon} text="Tv Series" />
                    <MovieNavItem img={calendarIcon} text="Upcoming" />
                    <MovieNavDescription />
                    <MovieNavItem img={logoutIcon} text="Log out" />
                </div>
            </nav>

            <main className="main">
                <div className="main-div">
                    <div className="movie">
                        <img src={movie_image} alt="" className="movie-img" />
                        <div className="play-icon-div">
                            <img src={playIcon} alt="play icon" />
                        </div>
                    </div>
                    <div className="movie_details_div_">
                        <div className="movie-info_">
                            <h3 className="movie-title" data-testid="movie-title">{title}</h3>
                            <ul className="ul">
                                <li className="year-li">
                                    <h3 className="movie-year" data-testid="movie-release-date">{releaseYear}</h3>
                                </li>
                                <li className="year-li">
                                    <h3>{adult ? "PG - 13" : "PG"}</h3>
                                </li>
                                <li className="year-li">
                                    <h3 data-testid="movie-runtime">{runtime}</h3>
                                </li>
                            </ul>
                            <ul className="movie-genres">
                                {
                                    genres.map(genre => {
                                        return <li>{genre.name}</li>
                                    })
                                }
                            </ul>
                            <div className="movie-rating-div">
                                <img src={starIcon} alt="rating star" className=".star-icon" />
                                <p className="rating_p">
                                    <span className="rating">8.5</span>
                                    <hr />
                                    <span className="number_of_rates">350K</span>
                                </p>
                            </div>
                        </div>
                        <div className="movie_details_div__">
                            <div className="movie-details">
                                <p className="movie-overview" data-testid="movie-overview">{overview}</p>
                                <div className="movie_details">
                                    <p className="director_p">Director: <span className="director">Unknown</span></p>
                                    <p className="writer_p">Writer: <span className="writer">Unknown</span></p>
                                    <p className="starts_p">Stars: <span className="stars">Unknown</span></p>
                                </div>
                            </div>
                            <div className="more-options-div">
                                <button className="buy-tickets-btn more-btn">
                                    <img src={twotickets} alt="tickets icon" />
                                    See Showtimes
                                </button>
                                <button className="more-options-btn more-btn">
                                    <img src={listIcon1} alt="tickets icon" />
                                    More watch options
                                </button>
                                <img src={moviesPreview} alt="movies preview image" className="movies-preview-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
import { NavDescription } from "../components/NavDescription"
import { Footer } from "../components/footer"
import { Card } from "../components/Card"
import { useEffect, useState } from "react"
import logoImg from "../assets/tv.svg"
import searchIcon from "../assets/Icon.svg"
import menuIcon from "../assets/Menu alt 4.svg"
import "./Home.css"

export function Home() {

    const [tenMovies, setTenMovies] = useState([])
    const [genresDB, setGenres] = useState([])
    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=97f2c90cfe33648e4725f86286eb4c99")
            .then(response => response.json())
            .then(data => setTenMovies(data.results.splice(10)))
            .catch(e => console.error(e))

        fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=97f2c90cfe33648e4725f86286eb4c99")
            .then(response => response.json())
            .then(data => setGenres(data.genres))
            .catch(e => console.error(e))
    }, [])

    useEffect(() => {
        setLoading(true)
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=97f2c90cfe33648e4725f86286eb4c99")
            .then(response => response.json())
            .then(data => setMovies(data.results))
            .catch(e => console.error(e))
            .finally(() => {
                setLoading(false)
            })
    }, [filteredMovies])

    console.log(tenMovies)
    console.log(movies)

    function handleSearch(e) {
        e.preventDefault()

        if (e.target.children[0].value == "") {
            setFilteredMovies(tenMovies)
            return
        }

        const input_value = e.target.children[0].value
        const formatted_input_value = input_value.charAt(0).toUpperCase() + input_value.slice(1)

        const filtered = movies.filter(movie => movie.title.startsWith(formatted_input_value))
        setFilteredMovies(filtered)

        if (filtered.length === 0) {
            console.log("It is")
            e.target.value = "Sorry we could'nt find that movie"
        }
    }

    return (
        <>
            <nav className="nav">
                <div className="nav-div">
                    <header>
                        <div className="logo-div">
                            <img src={logoImg} alt="logo" />
                            <h2>MovieBox</h2>
                        </div>
                        <form id="form" onSubmit={handleSearch}>
                            <input type="text" className="searchField" placeholder="What do you want to watch?" />
                            <button type="submit" className="search-btn">
                                <img src={searchIcon} alt="search icon" type="submit" className="search-icon" />
                            </button>
                        </form>
                        <div className="signin-div">
                            <a href="#" className="signin-link"><p>Sign in</p></a>
                            <div className="menuicon-div">
                                <img src={menuIcon} alt="menu icon" className="menu-icon" />
                            </div>
                        </div>
                    </header>
                    <NavDescription />
                </div>
            </nav>

            <section className="movies-section">
                <div className="movies-section-div">
                    <div className="movies-header-div">
                        <h2 className="movies-heading">Featured Movie</h2>
                        <div className="see-more-div">
                            <p className="see-more">See more</p>
                            <i className="right-arrow-icon" />
                        </div>
                    </div>

                    <div className="movies">
                        {
                            filteredMovies.length === 0 ? tenMovies.map((mov, index) => {
                                let mov_genres = ""
                                mov.genre_ids.map(genre_id => {
                                    genresDB.map(genre => {
                                        if ((genre_id === genre.id) && (mov_genres !== "")) {
                                            mov_genres = `${mov_genres}, ${genre.name}`
                                        }
                                        if ((genre_id === genre.id) && (mov_genres === "")) {
                                            mov_genres = `${genre.name}`
                                        }
                                    })
                                })

                                const release_year = mov.release_date.split("-")[0]
                                let current = true
                                if (release_year == "2023") {
                                    current = true
                                } else {
                                    current = false
                                }

                                return <Card posterImg={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} id={mov.id} vote_average={parseInt(mov.vote_average) * 10} releaseDate={mov.release_date} year={release_year} genres={mov_genres} title={mov.title} key={index} />
                            }) : filteredMovies.map((mov, index) => {
                                let mov_genres = ""
                                mov.genre_ids.map(genre_id => {
                                    genresDB.map(genre => {
                                        if ((genre_id === genre.id) && (mov_genres !== "")) {
                                            mov_genres = `${mov_genres}, ${genre.name}`
                                        }
                                        if ((genre_id === genre.id) && (mov_genres === "")) {
                                            mov_genres = `${genre.name}`
                                        }
                                    })
                                })
                                return <Card posterImg={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} id={mov.id} vote_average={parseInt(mov.vote_average) * 10} releaseDate={mov.release_date} genres={mov_genres} title={mov.title} key={index} />
                            })
                        }
                    </div>
                </div>
            </section>

            {loading ? <div className="loading-div">
                <i className="loading-icon"></i>
                <h1>Fetching Your Movies...</h1>
            </div> : <div></div>}

            <Footer />
        </>
    )
}
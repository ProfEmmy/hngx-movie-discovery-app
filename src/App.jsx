import { useEffect, useState } from "react"
import { Home } from "./pages/Home"
import { Movie } from "./pages/Movie"

function App() {

  const [movieDetails, setMovieDetails] = useState({})

  const pathName = window.location.pathname
  let Component
  let movie_id

  if (pathName == "/") {
    Component = Home
  } else if (pathName.includes("movies")) {
    movie_id = pathName.split("/")[pathName.split("/").length - 1]
    Component = Movie
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=97f2c90cfe33648e4725f86286eb4c99`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setMovieDetails(data)
      })
      .catch(e => {
        console.error(e)
      })
  }, [])

  console.log(movieDetails.genres)
  return <Component
    movie_image={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
    title={movieDetails.title}
    releaseYear={movieDetails.release_date != undefined ? movieDetails.release_date : "not found"}
    adult={movieDetails.adult}
    overview={movieDetails.overview}
    genres={movieDetails.genres != undefined ? movieDetails.genres : ["not found"]}
    runtime={movieDetails.runtime}
  />
}

export default App

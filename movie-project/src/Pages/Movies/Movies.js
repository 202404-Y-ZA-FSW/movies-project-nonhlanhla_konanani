<<<<<<< HEAD
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { fetchMovies } from "../../util/API"
import "../../Styles.css"
import Design from "../../components/Design/Design"

const Movies = () => {
  const { category } = useParams()
  const [movies, setMovies] = useState([])
=======
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchMovies } from '../../util/API';
import useScrollToTop from "../../ScrollToTop";

const Movies = () => {
  useScrollToTop();
  const { category } = useParams();
  const [movies, setMovies] = useState([]);
>>>>>>> a3148e083480876a369ee9c5ca68b5cabd08c61f

  useEffect(() => {
    const fetchCategoryMovies = async () => {
      let criteria
      switch (category) {
        case "top-rated":
          criteria = "top_rated"
          break
        case "popular":
          criteria = "popular"
          break
        case "latest":
          criteria = "top-rated"
          break
        case "now-playing":
          criteria = "now_playing"
          break
        case "upcoming":
          criteria = "upcoming"
          break
        default:
          criteria = "popular"
      }

      try {
        const response = await fetchMovies(criteria)
        setMovies(response.results || [])
      } catch (error) {
        console.error("Error fetching movies:", error)
      }
    }

    fetchCategoryMovies()
  }, [category])

  return (
    <div>
      <section className="design">
        <Design />
      </section>
      <h2>{category.replace("-", " ")}</h2>
      <div className="movies-list-style ">
        {" "}
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card-style">
            {" "}
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3 className="movie-title-style">{movie.title}</h3>{" "}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Movies

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import movies from "../data/movies";

function MovieList() {
  return (
    <>
      <h1>Movie List Section</h1>
      <div className="movie-list">
        {movies.map((item, index) => {
          return (
            <div
              className="movie-box"
              key={index}
              css={css`
                width: 580px;
                display: flex;
                padding: 1.5rem 1rem;
                margin-bottom: 5rem;
                gap: 1rem;
                border-radius: 10px;
                box-shadow: 0px 4px 40px 0px rgba(145, 124, 124, 0.25);
              `}
            >
              <div
                className="movie-img"
                css={css`
                  width: 100px;
                  height: 100px;
                  border-radius: 10px;
                  overflow: hidden;
                `}
              >
                <img
                  src={item.image}
                  alt=""
                  css={css`
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    object-position: center;
                  `}
                />
              </div>
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  font-size: 1.2rem;
                  font-weight: bold;
                  gap: 1rem;
                `}
              >
                <p>Title: {item.title}</p>
                <p>Year: {item.year}</p>
                <p>Runtime: {item.runtime}</p>
                <p>
                  Genres:{" "}
                  {item.genres.map((item, index) => {
                    return (
                      <span
                        key={index}
                        css={css`
                          padding: 0.3rem 1rem;
                          margin-right: 0.5rem;
                          border-radius: 10px;
                          background-color: #eaac99;
                        `}
                      >
                        {item}
                      </span>
                    );
                  })}
                </p>
                <p>IMDB Ratings: {item.imdbRating}</p>
                <p>IMDB Votes: {item.imdbVotes}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MovieList;

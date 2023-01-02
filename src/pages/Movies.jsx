/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useState, useEffect } from "react";
import CustomPagination from "../components/Pagination/CustomPagination";
import SingleContent from "../components/SingleContent/SingleContent";

const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const [numOfPage, setNumOfPage] = useState();

  const [selectedGenres, setSelectedGenres] = useState();

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=849d1235b4f690bf48039d1e3bff9f5c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
      //with_genres=${genreforURL}
    );

    setContent(data.results);
    setNumOfPage(data.total_pages);
  };
  useEffect(() => {
    fetchMovies();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Movies</span>

      <div className="trending">
        {content &&
          content.map((c) => {
            return (
              <SingleContent
                key={c.id}
                id={c.id}
                poster={c.poster_path}
                title={c.title || c.name}
                date={c.release_date || c.first_air_date}
                media_type="Movie"
                vote_average={Math.round(c.vote_average)}
              ></SingleContent>
            );
          })}
      </div>
      {numOfPage > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPage} />
      )}
    </div>
  );
};

export default Movies;

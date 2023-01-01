import React, { useState, useEffect } from "react";

import "./Trending.css";

import axios from "axios";
import SingleContent from "../components/SingleContent/SingleContent";
import CustomPagination from "../components/Pagination/CustomPagination";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=849d1235b4f690bf48039d1e3bff9f5c&page=${page}`
    );
    setContent(data.results);
  };
  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
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
                media_type={c.media_type}
                vote_average={Math.round(c.vote_average)}
              ></SingleContent>
            );
          })}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;

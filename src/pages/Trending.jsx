import React, { useState, useEffect } from "react";

import "./Trending.css"

import axios from "axios";
import SingleContent from "../components/SingleContent/SingleContent";

const Trending = () => {
  const [content, setContent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=849d1235b4f690bf48039d1e3bff9f5c`
    );
    setContent(data.results);
  };
  useEffect(() => {
    fetchTrending();
  }, []);

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
    </div>
  );
};

export default Trending;

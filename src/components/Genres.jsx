/* eslint-disable react-hooks/exhaustive-deps */
import { Chip } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  setPage,
  type,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=849d1235b4f690bf48039d1e3bff9f5c&language=en-US`
    );
    setGenres(data.genres);
  };

  console.log(genres);
  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          style={{
            color: "red",
            padding: "10px",
            margin: 2,
            fontWeight: "bold",
            fontSize: "20px",
          }}
          key={genre.id}
          label={genre.name}
          clickable
          onDelete={() => handleRemove(genre)}
        />
      ))}

      {genres.map((genre) => (
        <Chip
          style={{
            color: "white",
            padding: "10px",
            margin: "10px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
          key={genre.id}
          label={genre.name}
          clickable
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;

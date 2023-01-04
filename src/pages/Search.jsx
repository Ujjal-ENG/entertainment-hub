/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Tab, Tabs, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SingleContent from "../components/SingleContent/SingleContent";
import CustomPagination from "../components/Pagination/CustomPagination";
import axios from "axios";

const Search = () => {
  const [page, setPage] = useState();
  const [type, setType] = useState(0);
  const [content, setContent] = useState([]);
  const [searchText, setSearchText] = useState();
  const [numOfPage, setNumOfPage] = useState();

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${
        type ? "tv" : "movie"
      }?api_key=849d1235b4f690bf48039d1e3bff9f5c&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.results);
    setNumOfPage(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [type, page]);

  return (
    <>
      <div style={{ display: "flex", margin: "15px 0" }}>
        <TextField
          style={{ flex: 1 }}
          className="searchBox"
          id="filled-basic"
          label="Filled"
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div>
          <Button
            variant="contained"
            style={{ marginLeft: 10, padding: "16px" }}
            onClick={fetchSearch}
          >
            <SearchIcon />
          </Button>
        </div>
      </div>
      <div>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, newValue) => {
            setType(newValue);
            setPage(1);
          }}
          style={{ paddingBottom: 5 }}
        >
          <Tab label="Search Movies Here" style={{ width: "50%" }} />
          <Tab label="Search TV Series Here" style={{ width: "50%" }} />
        </Tabs>
      </div>
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
                media_type={type ? "tv" : "movie"}
                vote_average={Math.round(c.vote_average)}
              ></SingleContent>
            );
          })}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPage > 1 && (
        <CustomPagination setPage={setPage} numOfPage={numOfPage} />
      )}
    </>
  );
};

export default Search;

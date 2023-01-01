import { createTheme, Pagination, ThemeProvider } from "@mui/material";
import React from "react";

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div>
      <Pagination
        count={numOfPages}
        onChange={(e) => handlePageChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
        color="primary"
      />
    </div>
  );
};

export default CustomPagination;

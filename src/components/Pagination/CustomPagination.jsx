import { Pagination } from "@mui/material";
import React from "react";

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div>
      <Pagination
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
        }}
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

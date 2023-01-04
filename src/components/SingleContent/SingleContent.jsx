import { Badge } from "@mui/material";
import React from "react";
import { img_300, unavailable } from "../../config/config";
import ContentModal from "../ContentModal/ContentModal";

import "./SingleContent.css";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal className="media">
      <Badge
        badgeContent={vote_average}
        color={`${vote_average > 6 ? "primary" : "secondary"}`}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <strong className="title">{title}</strong>

      <div className="subTitle">
        <span>{media_type === "tv" ? "TV Series" : "Movies"}</span>
        <span>{date}</span>
      </div>
    </ContentModal>
  );
};

export default SingleContent;

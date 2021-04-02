import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

const MainImage = ({ mainImage, width = 1200 }) => {
  const imgUrl =
    mainImage &&
    imageUrlFor(buildImageObj(mainImage))
      .width(width)
      .fit("max")
      .auto("format")
      .url();

  return imgUrl ? <img src={imgUrl} alt={mainImage.alt || ""} /> : <></>;
};

export default MainImage;

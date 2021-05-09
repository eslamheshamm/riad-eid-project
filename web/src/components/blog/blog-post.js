// import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import PortableText from "../portableText";
import Container from "../container";

import styles from "./blog-post.module.css";

function BlogPost(props) {
  const { _rawBody, title, mainImage } = props;
  return (
    <article className="w-7/12 mx-auto">
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div>
          <div className={styles.mainContent}>
            <h1 className={`font-yasser text-4xl my-6`}>{title}</h1>
            <div className="mb-32"> {_rawBody && <PortableText blocks={_rawBody} />}</div>
          </div>
        </div>
      </Container>
    </article>
  );
}

export default BlogPost;

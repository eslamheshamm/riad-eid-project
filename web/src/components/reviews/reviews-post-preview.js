// import { format } from "date-fns";
import React from "react";
import { buildImageObj, cn } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import PortableText from "../portableText";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import arSA from "date-fns/locale/ar-SA";

import styles from "./reviews-post-preview.module.css";

function ReviewsPostPreview(props) {
  const date = props.publishedAt;
  return (
    <div className={props.isInList ? styles.inList : styles.inGrid}>
      <div className="flex flex-col py-4 px-8">
        <div className="flex flex-col items-start justify-start ">
          <div className="flex items-center">
            {props.mainImage && props.mainImage.asset && (
              <div className="w-8  ml-1">
                <img
                  src={imageUrlFor(buildImageObj(props.mainImage))
                    .width(600)
                    .height(Math.floor((9 / 16) * 600))
                    .auto("format")
                    .url()}
                  alt={props.mainImage.alt}
                  className="rounded-md"
                />
              </div>
            )}
            <h3 className={cn(styles.title)}>{props.country}</h3>
          </div>
          <div className={cn(styles.date, "opacity-50")}>
            منذ {formatDistanceToNow(new Date(date), { locale: arSA })}
          </div>

          <div className="flex flex-col items-start">
            {props._rawExcerpt && (
              <div className={cn(styles.excerpt, "opacity-75")}>
                <PortableText blocks={props._rawExcerpt} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsPostPreview;

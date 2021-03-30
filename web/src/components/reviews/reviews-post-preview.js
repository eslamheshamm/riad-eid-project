// import { format } from "date-fns";
import React from "react";
import { buildImageObj, cn, getPressUrl } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import PortableText from "../portableText";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import arSA from "date-fns/locale/ar-SA";

import styles from "./reviews-post-preview.module.css";

function ReviewsPostPreview(props) {
  const date = props.publishedAt;
  console.log(props._rawExcerpt, "textt");
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
          <div className={styles.date}>
            منذ {formatDistanceToNow(new Date(date), { locale: arSA })}
          </div>

          <div className="flex flex-col items-start">
            {props._rawExcerpt && (
              <div className={styles.excerpt}>
                <PortableText blocks={props._rawExcerpt} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
function Bookmark(props) {
  return (
    <svg width={24} height={32} viewBox="0 0 24 32" fill="none" {...props}>
      <path
        d="M18.884 1.31a41.713 41.713 0 00-13.77 0 4.073 4.073 0 00-3.318 3.209A61.484 61.484 0 001.55 27.51l.556 3.099a1.22 1.22 0 002.04.668l6.706-6.37a1.667 1.667 0 012.296 0l6.706 6.37a1.22 1.22 0 002.04-.668l.555-3.099a61.485 61.485 0 00-.245-22.991 4.073 4.073 0 00-3.32-3.21z"
        fill="#1ACBD2"
      />
    </svg>
  );
}
export default ReviewsPostPreview;

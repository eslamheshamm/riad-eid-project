// import { format } from "date-fns";
import { Link } from "gatsby";
import React from "react";
import { buildImageObj, cn, getInterviewsUrl } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import PortableText from "../portableText";

import styles from "./interviews-post-preview.module.css";
import { responsiveTitle3 } from "../typography.module.css";

function InterviewsPostPreview(props) {
  return (
    <div className={props.isInList ? styles.inList : styles.inGrid}>
      <div className="flex flex-col">
        <div className={styles.leadMediaThumb}>
          <Link to={getInterviewsUrl(props.slug.current)} className="focus:outline-none ">
            <Play className={styles.play} />

            {props.mainImage && props.mainImage.asset && (
              <img
                src={imageUrlFor(buildImageObj(props.mainImage))
                  .width(600)
                  .height(Math.floor((9 / 16) * 600))
                  .auto("format")
                  .url()}
                alt={props.mainImage.alt}
              />
            )}
          </Link>
        </div>
        <div className={styles.text}>
          <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
          {props._rawExcerpt && (
            <div className={styles.excerpt}>
              <PortableText blocks={props._rawExcerpt} />
            </div>
          )}
          {/* <div className={styles.date}>{format(props.publishedAt, "MMMM Do, YYYY")}</div> */}
        </div>
      </div>
    </div>
  );
}

function Play(props) {
  return (
    <svg width={72} height={72} viewBox="0 0 72 72" fill="none" {...props}>
      <rect width={72} height={72} rx={36} fill="#fff" />
      <path
        d="M48.11 38.527a3.195 3.195 0 000-5.054 59.602 59.602 0 00-16.527-9.027l-1.087-.386c-2.08-.739-4.278.669-4.56 2.816-.787 6-.787 12.247 0 18.248.282 2.147 2.48 3.555 4.56 2.816l1.087-.386a59.603 59.603 0 0016.527-9.027z"
        fill="#FF337F"
      />
    </svg>
  );
}

export default InterviewsPostPreview;

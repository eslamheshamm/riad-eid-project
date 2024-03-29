// import { format } from "date-fns";
import React from "react";
import { Link } from "gatsby";
import { buildImageObj, cn, getPressUrl } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import PortableText from "../portableText";

import styles from "./press-post-preview.module.css";
import { responsiveTitle3 } from "../typography.module.css";

function PressPostPreview(props) {
  return (
    <div className={props.isInList ? styles.inList : styles.inGrid}>
      <div className="flex flex-col">
        <div className={styles.leadMediaThumb}>
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
        </div>
        <div className={styles.text}>
          <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
          {props._rawExcerpt && (
            <div className={styles.excerpt}>
              <PortableText blocks={props._rawExcerpt} />
            </div>
          )}

          <button className={styles.button}>
            <Link to={getPressUrl(props.slug.current)} className="focus:outline-none">
              قراءة المزيد{" "}
            </Link>
          </button>
          {/* <div className={styles.date}>{format(props.publishedAt, "MMMM Do, YYYY")}</div> */}
        </div>
      </div>
    </div>
  );
}

export default PressPostPreview;

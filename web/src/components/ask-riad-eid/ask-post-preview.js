// import { format } from "date-fns";
import React from "react";
import { Link } from "gatsby";

import { getAskUrl } from "../../lib/helpers";
import PortableText from "../portableText";

import styles from "./qoustions-post-preview.module.css";

function AskPostPreview(props) {
  return (
    <div className={props.isInList ? styles.inList : styles.inGrid}>
      <div className="flex py-4 px-8">
        <div className="flex items-start justify-start ">
          <div className="hidden sm:block">
            <Bookmark className="w-10 h-full " />
          </div>

          <div className="flex flex-col items-start mr-6">
            <h3 className={styles.title}>
              <Link
                to={getAskUrl(props.slug.current)}
                className="focus:outline-none hover:underline"
              >
                {props.qoustion}
              </Link>
            </h3>

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
    <svg viewBox="0 0 40 48" fill="none" {...props}>
      <path
        d="M18.884 1.31a41.713 41.713 0 00-13.77 0 4.073 4.073 0 00-3.318 3.209A61.484 61.484 0 001.55 27.51l.556 3.099a1.22 1.22 0 002.04.668l6.706-6.37a1.667 1.667 0 012.296 0l6.706 6.37a1.22 1.22 0 002.04-.668l.555-3.099a61.485 61.485 0 00-.245-22.991 4.073 4.073 0 00-3.32-3.21z"
        fill="#1ACBD2"
      />
    </svg>
  );
}
export default AskPostPreview;

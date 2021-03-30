// import { format } from "date-fns";
import React from "react";
import { cn } from "../../../lib/helpers";
import PortableText from "../../portableText";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import arSA from "date-fns/locale/ar-SA";
import styles from "./reviews-post-preview.module.css";
import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "../../../../client-config";

const maybeImage = illustration => {
  let img = null;
  if (
    illustration &&
    illustration.disabled !== true &&
    illustration.image &&
    illustration.image.asset
  ) {
    const fluidProps = getFluidGatsbyImage(
      illustration.image.asset._id,
      { maxWidth: 960 },
      clientConfig.sanity
    );

    img = <img className="w-full rounded-md " src={fluidProps.src} alt={illustration.image.alt} />;
  }
  return img;
};

function ReviewsPostPreview(props) {
  const date = props.publishedAt;
  const img = maybeImage(props.illustration);
  console.log(props.text, "text");
  return (
    <div className={props.isInList ? styles.inList : styles.inGrid}>
      <div className="flex flex-col py-4 px-8 text-black">
        <div className="flex flex-col items-start justify-start ">
          <div className="flex items-center">
            {img && <div className="w-8 ml-1 rounded-md ">{img}</div>}
            <h3 className={cn(styles.title)}>{props.title}</h3>
          </div>
          <div className={styles.date}>
            منذ {date && formatDistanceToNow(new Date(date), { locale: arSA })}
          </div>

          <div className="flex flex-col items-start">
            {props.text && (
              <div className={cn(styles.excerpt, "text-lg text-black")}>
                <PortableText blocks={props.text} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewsPostPreview;

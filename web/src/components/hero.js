import React from "react";
import PortableText from "./portableText";
import clientConfig from "../../client-config";
import CTALink from "./CTALink";
import styles from "./hero.module.css";

import { getFluidGatsbyImage } from "gatsby-source-sanity";
const maybeImage = illustration => {
  let img = null;
  if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
    const fluidProps = getFluidGatsbyImage(
      illustration.image.asset._id,
      { maxWidth: 960 },
      clientConfig.sanity
    );

    img = <img className="w-full z-50" src={fluidProps.src} alt={illustration.image.alt} />;
  }
  return img;
};

function Hero(props) {
  const img = maybeImage(props.illustration);
  return (
    <div className=" px-3 grid grid-cols-2 gap-6 text-black my-40">
      {/* Left col */}
      <div className="flex flex-col  justify-center items-start">
        <h1
          className={
            props.size === "small"
              ? " text-3xl leading-snug font-yasser"
              : props.size === "big"
              ? " text-6xl leading-snug font-yasser"
              : ""
          }
        >
          {props.heading}
        </h1>
        <div className="leading-normal  my-8">
          <PortableText blocks={props.tagline} />
        </div>
        {props.cta && props.cta.title && (
          <CTALink {...props.cta} buttonActionClass={styles.button} />
        )}
      </div>
      {/* Right col */}
      <div className="flex items-center justify-center">
        <div className="w-8/12">{img}</div>
      </div>
    </div>
  );
}

export default Hero;

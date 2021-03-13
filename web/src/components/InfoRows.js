import React from "react";
import PortableText from "./portableText";

import { getFluidGatsbyImage } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

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

    img = <img className="w-full sm:h-20" src={fluidProps.src} alt={illustration.image.alt} />;
  }
  return img;
};

const InfoRow = props => {
  const img = maybeImage(props.illustration);
  return (
    <div className={"flex p-4 pb-8 shadow-lg flex-col rounded-3xl"}>
      <div>
        {img && <div className="w-16 ">{img}</div>}

        <h3 className="text-2xl text-black leading-snug my-4 font-yasser">{props.title}</h3>
        <p className="text-black">
          <PortableText blocks={props.text} />
        </p>
      </div>
    </div>
  );
};

const InfoRows = props => {
  const contentRows = (props.rows || [])
    .filter(r => !r.disabled)
    .map((r, i) => {
      return <InfoRow key={r._key} {...r} />;
    });

  return (
    <section className="bg-white py-8 ">
      <h1 className="w-full my-6 text-3xl  leading-snug text-center text-black font-yasser">
        {props.title}
      </h1>
      <p className="w-full text-center text-black leading-snug mb-16">{props.description}</p>
      <div className="  mx-auto m-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contentRows}
      </div>
    </section>
  );
};

export default InfoRows;

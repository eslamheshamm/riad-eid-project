import React from "react";
// import Figure from "./Figure";
import MainImage from "./blog/MainImage";
import ReactPlayer from "react-player";
import InstagramEmbed from "react-instagram-embed";
import LatexRenderer from "./Latex";
import styles from "./serializers.module.css";
const AuthorReference = ({ node }) => {
  if (node && node.author && node.author.name) {
    return <span>{node.author.name}</span>;
  }
  return <></>;
};

const serializers = {
  types: {
    authorReference: AuthorReference,
    mainImage: ({ node }) => <MainImage mainImage={node} />,
    videoEmbed: ({ node }) => (
      <div className={styles.playerWrapper}>
        <ReactPlayer
          width="100%"
          height="100%"
          className={styles.reactPlayer}
          url={node.url}
          controls
        />
      </div>
    ),
    instagram: ({ node }) => {
      if (!node.url) return null;
      return <InstagramEmbed url={node.url} className="container mx-auto mt-6 mb-6" />;
    },
    math: ({ node, isInline = false }) => <LatexRenderer isInline={isInline} latex={node.latex} />
  }
};

export default serializers;

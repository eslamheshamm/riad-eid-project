// import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import PortableText from "../portableText";
import Container from "../container";
import ReactPlayer from "react-player";

// import AuthorList from "./author-list";
// authors, categories,publishedAt
import styles from "./interviews-post.module.css";

function InterviewsPost(props) {
  const { _rawBody, title, video } = props;
  return (
    <article className="md:w-9/12 lg:w-8/12 mx-auto">
      <div className={styles.playerWrapper}>
        <ReactPlayer
          width="100%"
          height="100%"
          className={styles.reactPlayer}
          url={video}
          controls
        />
      </div>
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

export default InterviewsPost;

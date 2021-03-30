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
    <article className="w-7/12 mx-auto">
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
          {/* <aside className={styles.metaContent}>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), "MMMM Do, YYYY")}
              </div>
            )}
            {authors && <AuthorList items={authors} title='Authors' />}
            {categories && (
              <div className={styles.categories}>
                <h3 className={styles.categoriesHeadline}>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside> */}
        </div>
      </Container>
    </article>
  );
}

export default InterviewsPost;

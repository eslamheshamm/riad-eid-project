// import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import PortableText from "../portableText";
import Container from "../container";
import styles from "./qoustions-post.module.css";

function QuestionPost(props) {
  const { _rawExcerpt, qoustion } = props;
  return (
    <article className="sm:w-8/12 mx-auto">
      <Container>
        <div>
          <div className={styles.mainContent}>
            <h1 className={`font-yasser text-4xl my-6`}>{qoustion}</h1>
            <div className="mb-32">{_rawExcerpt && <PortableText blocks={_rawExcerpt} />}</div>
          </div>
        </div>
      </Container>
    </article>
  );
}

export default QuestionPost;

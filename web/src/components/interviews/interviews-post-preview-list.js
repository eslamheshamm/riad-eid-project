import { Link } from "gatsby";
import React from "react";
import InterviewsPostPreview from "./interviews-post-preview";

import styles from "./interviews-post-preview-list.module.css";

function InterviewsPostPreviewGrid(props) {
  return (
    <div className="w-full">
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 h-auto">
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <InterviewsPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

InterviewsPostPreview.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default InterviewsPostPreviewGrid;

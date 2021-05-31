import { Link } from "gatsby";
import React from "react";
import BlogPostPreview from "./blog-post-preview";

import styles from "./blog-post-preview-list.module.css";

function BlogPostPreviewGrid(props) {
  return (
    <div className="w-full">
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-3 lg:gap-6">
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
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

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default BlogPostPreviewGrid;

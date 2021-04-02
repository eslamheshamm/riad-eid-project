import { Link } from "gatsby";
import React from "react";
import QoustionsPostPreview from "./qoustions-post-preview";
import styles from "./qoustions-post-preview-list.module.css";

function QoustionsPostPreviewGrid(props) {
  return (
    <div className="w-full text-black my-32">
      <div className="text-center mb-12">
        {props.title && <h2 className="text-4xl font-yasser my-6 text-black">{props.title}</h2>}
        <p className="text-lg">{props.description}</p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full gap-6 h-auto">
        {props.rows &&
          props.rows.map(node => (
            <li key={node.id}>
              <QoustionsPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
      <div className="text-center mt-12">
        <button className={styles.button}>
          <Link to="/questions">قراءة المزيد</Link>
        </button>
      </div>
    </div>
  );
}

QoustionsPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default QoustionsPostPreviewGrid;

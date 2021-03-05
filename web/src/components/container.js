import React from "react";

import styles from "./container.module.css";

const Container = ({ children }) => {
  return <div className="w-full">{children}</div>;
};

export default Container;

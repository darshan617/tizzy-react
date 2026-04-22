import React from "react";
import styles from "@/components/Layout/main-container/MainContainer.module.css";
const MainContainer = ({ children, bgColor = "#fff" }) => {
  return (
    <>
      <div className={styles.mainWrapper} style={{ background: bgColor }}>
        <div className="mainContainer">{children}</div>
      </div>
    </>
  );
};

export default MainContainer;

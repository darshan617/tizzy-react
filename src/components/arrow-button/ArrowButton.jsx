import React from "react";
import styles from "@/components/arrow-button/ArrowButton.module.css";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

const ArrowButton = ({ text = "" }) => {
  return (
    <Link href={"#"} className={styles.btnWrapper}>
      <p>{text}</p>
      <span>
        <IoArrowForward color="#ffffff" />
      </span>
    </Link>
  );
};

export default ArrowButton;

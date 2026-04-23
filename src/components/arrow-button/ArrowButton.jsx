import React from "react";
import styles from "@/components/arrow-button/ArrowButton.module.css";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

const ArrowButton = ({ text = "", link = "#" }) => {
  return (
    <Link href={link} className="tp-btn-black">
      <span className="tp-btn-black-filter d-inline-flex align-items-center">
        <span className="tp-btn-black-text">{text}</span>
        <span className="tp-btn-black-circle">
          <svg
            width="10"
            height="10"
            viewbox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9L9 1M9 1H1M9 1V9"
              stroke="currentcolor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>
      </span>
    </Link>
  );
};

export default ArrowButton;

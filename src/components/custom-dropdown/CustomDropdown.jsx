import React from "react";
import styles from "@/components/custom-dropdown/CustomDropdown.module.css";
import { IoChevronDown } from "react-icons/io5";
import Link from "next/link";
const CustomDropdown = ({
  isDropdownOpen,
  mainText = "",
  actionOn = "hover",
  onMouseEnter,
  onMouseLeave,
  onClick,
  setterKeyword,
  options,
  customStyles,
  linkStyles,
  ddStyles,
}) => {
  return (
    <div
      className={styles.ddWrapper}
      {...(actionOn === "hover"
        ? {
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
          }
        : {
            onClick: onClick,
          })}
      style={customStyles}
    >
      <span className={styles.manageServiceText}>{mainText}</span>{" "}
      <IoChevronDown
        size={15}
        style={{
          transform:
            isDropdownOpen === setterKeyword
              ? "rotate(-180deg)"
              : "rotate(0deg)",
          transition: "0.3s",
        }}
      />
      {isDropdownOpen === setterKeyword && (
        <div className={styles.dropdown} style={ddStyles}>
          {options?.map((item, idx) => {
            return (
              <Link href={item?.link} style={linkStyles}>
                {item?.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;

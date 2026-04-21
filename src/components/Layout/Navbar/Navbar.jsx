import React, { useState } from "react";
import styles from "@/components/Layout/Navbar/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import helplineImg from "@/assets/Navbar/helpline.png";
import mainLogo from "@/assets/Navbar/mainLogo.png";
import { FaChevronDown, FaRegUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className={styles.navbarContainer}>
      <div className={`${styles.topNav}`}>
        <div className="mainContainer">
          <ul>
            <li>
              <Link href={"/#"}>Quick Assist</Link>
            </li>
            <li>
              <Link href={"/#"}>Parther with us</Link>
            </li>
            <li>
              <Link href={"/#"}>Sales Enquiry</Link>
            </li>
            <li>
              <Link
                href={"tel:+9199259925"}
                className={styles.helplineContainer}
              >
                <Image
                  src={helplineImg}
                  height={800}
                  width={800}
                  alt="helplineImg"
                />
                +91 9925 9925
              </Link>
            </li>
            <li>
              <div className={styles.authNav}>
                <FaRegUser />
                <Link href={"/login"}>Log In</Link>/
                <Link href={"/#"}>Sign Up</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.mainNav}>
        <div className="mainContainer">
          <div className={styles.mainMenuWrapper}>
            <Image
              src={mainLogo}
              className={styles.mainLogo}
              width={800}
              height={800}
              alt="logo"
            />
            <div className={styles.menuLinks}>
              <Link href={"#"}>Tizzy Mail</Link>
              <Link href={"#"}>Microsoft 365</Link>
              <Link href={"#"}>Google Workspace</Link>
              <Link href={"#"}>Migration</Link>

              <div
                className={styles.ddWrapper}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <span className={styles.manageServiceText}>
                  Managed Services
                </span>{" "}
                <IoChevronDown
                  size={15}
                  style={{
                    transform: isDropdownOpen
                      ? "rotate(-180deg)"
                      : "rotate(0deg)",
                    transition: "0.3s",
                  }}
                />
                {isDropdownOpen && (
                  <div className={styles.dropdown}>
                    <Link href={"#"}>Migration</Link>
                    <Link href={"#"}>Backup & Restore</Link>
                  </div>
                )}
              </div>

              <Link href={"#"} className={styles.cartCountWrapper}>
                <BsCart size={22} color="#8a8a8a" />
                <span className={styles.cartCount}>01</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

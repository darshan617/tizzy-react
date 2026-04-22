import React, { useState } from "react";
import styles from "@/components/Layout/Navbar/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import helplineImg from "@/assets/Navbar/helpline.png";
import mainLogo from "@/assets/Navbar/mainLogo.png";
import { FaRegUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import Sidebar from "../sidebar/Sidebar";
import CustomDropdown from "@/components/custom-dropdown/CustomDropdown";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const MANAGED_SERVICE_OPTIONS = [
    {
      label: "Migration",
      link: "#",
    },
    {
      label: "Backup & Restore",
      link: "#",
    },
  ];

  return (
    <>
      <nav className={styles.navbarContainer}>
        <div className={`${styles.topNav}`}>
          <div className="mainContainer">
            <ul>
              <li>
                <Link href={"/#"}>Quick Assist</Link>
              </li>
              <li className={styles.hideLink}>
                <Link href={"/#"}>Parther with us</Link>
              </li>
              <li>
                <Link href={"/#"}>Sales Enquiry</Link>
              </li>
              <li className={styles.hideLink}>
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
                <CustomDropdown
                  isDropdownOpen={isDropdownOpen}
                  mainText={"Managed Services"}
                  actionOn={"hover"}
                  onMouseEnter={() => setIsDropdownOpen("managed-service")}
                  onMouseLeave={() => setIsDropdownOpen("")}
                  onClick={() => setIsDropdownOpen("managed-service")}
                  setterKeyword="managed-service"
                  options={MANAGED_SERVICE_OPTIONS}
                />

                <Link href={"#"} className={styles.cartCountWrapper}>
                  <BsCart size={22} color="#8a8a8a" />
                  <span className={styles.cartCount}>01</span>
                </Link>
              </div>
              <div
                className={styles.hamburgerMenu}
                onClick={() => setIsSidebarOpen(true)}
              >
                <p className={styles.menuIcon}></p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
    </>
  );
};

export default Navbar;

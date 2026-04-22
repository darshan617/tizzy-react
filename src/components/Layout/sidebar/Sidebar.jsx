import React from "react";
import styles from "@/components/Layout/sidebar/Sidebar.module.css";
import Image from "next/image";
import mainLogo from "@/assets/Navbar/mainLogo.png";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import CustomDropdown from "@/components/custom-dropdown/CustomDropdown";
import ArrowButton from "@/components/arrow-button/ArrowButton";
const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isDropdownOpen,
  setIsDropdownOpen,
}) => {
  const dropdownOptions = {
    manageService: [
      {
        label: "Migration",
        link: "#",
      },
      {
        label: "Backup & Restore",
        link: "#",
      },
    ],
    myAccounts: [
      {
        label: "Webmail Login",
        link: "#",
      },
      {
        label: "Customer Login",
        link: "#",
      },
      {
        label: "Reseller Login",
        link: "#",
      },
    ],
    userDetails: [
      {
        label: "Profile",
        link: "#",
      },
      {
        label: "Active Service List",
        link: "#",
      },
      {
        label: "Logout",
        link: "#",
      },
    ],
  };

  const commonDropdownStyles = {
    wrapper: {
      display: "block",
      position: "relative",
      padding: 0,
    },
    link: {
      padding: "5px",
      fontSize: "16px",
      borderBottom: "none",
    },
    dropdown: {
      width: "100%",
      position: "relative",
    },
  };

  return (
    <>
      {isSidebarOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      <div
        className={`${styles.sidebarContainer} ${isSidebarOpen ? styles.openSidebar : styles.closeSidebar}`}
      >
        <div className={styles.sidebarHeader}>
          <Link href={"#"}>
            <Image
              src={mainLogo}
              width={800}
              height={800}
              className={styles.sidebarLogo}
              alt="logo"
            />
          </Link>
          <button
            className={styles.closeBtn}
            onClick={() => setIsSidebarOpen(false)}
          >
            <IoCloseOutline size={24} />
          </button>
        </div>
        <div className={styles.sidebarContent}>
          <ul>
            <li>
              <Link href={"#"} className={styles.sidebarMenuLinks}>
                Tizzy Mail
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.sidebarMenuLinks}>
                Microsoft 365
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.sidebarMenuLinks}>
                Google Workspace
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.sidebarMenuLinks}>
                Migration
              </Link>
            </li>
            <li>
              <CustomDropdown
                isDropdownOpen={isDropdownOpen}
                mainText={"Managed Services"}
                actionOn={"hover"}
                onMouseEnter={() => setIsDropdownOpen("managed-service")}
                onMouseLeave={() => setIsDropdownOpen("")}
                onClick={() => setIsDropdownOpen("managed-service")}
                setterKeyword="managed-service"
                options={dropdownOptions?.manageService}
                customStyles={commonDropdownStyles.wrapper}
                linkStyles={commonDropdownStyles.link}
                ddStyles={commonDropdownStyles.dropdown}
              />
            </li>
            <li>
              <CustomDropdown
                isDropdownOpen={isDropdownOpen}
                mainText={"My Account"}
                actionOn={"hover"}
                onMouseEnter={() => setIsDropdownOpen("myAccounts")}
                onMouseLeave={() => setIsDropdownOpen("")}
                onClick={() => setIsDropdownOpen("myAccounts")}
                setterKeyword="myAccounts"
                options={dropdownOptions?.myAccounts}
                customStyles={commonDropdownStyles.wrapper}
                linkStyles={commonDropdownStyles.link}
                ddStyles={commonDropdownStyles.dropdown}
              />
            </li>
            <li>
              <CustomDropdown
                isDropdownOpen={isDropdownOpen}
                mainText={`Hello, User`}
                actionOn={"hover"}
                onMouseEnter={() => setIsDropdownOpen("userDetails")}
                onMouseLeave={() => setIsDropdownOpen("")}
                onClick={() => setIsDropdownOpen("userDetails")}
                setterKeyword="userDetails"
                options={dropdownOptions?.userDetails}
                customStyles={commonDropdownStyles.wrapper}
                linkStyles={commonDropdownStyles.link}
                ddStyles={commonDropdownStyles.dropdown}
              />
            </li>
            <li>
              <Link href={"#"} className={styles.otherLinks}>
                About Us
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.otherLinks}>
                Partner with us
              </Link>
            </li>
            <li>
              <Link href={"#"} className={styles.otherLinks}>
                Contact Us
              </Link>
            </li>
            <li>
              <ArrowButton text={"GET START NOW"} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

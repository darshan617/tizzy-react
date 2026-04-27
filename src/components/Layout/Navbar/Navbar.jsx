"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/components/Layout/Navbar/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import helplineImg from "@/assets/Navbar/helpline.png";
import mainLogo from "@/assets/Navbar/mainLogo.png";
import { FaRegUser } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import Sidebar from "../sidebar/Sidebar";
import CustomDropdown from "@/components/custom-dropdown/CustomDropdown";
import ArrowButton from "@/components/arrow-button/ArrowButton";
import tizzyMailImg from "@/assets/navbar/tizzyMail.png";
import microsoftImg from "@/assets/navbar/microsoft.png";
import Google_WorkspaceImg from "@/assets/navbar/Google_Workspace.png";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserLoginIn, setIsUserLoginIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  // const isUserLoginIn = (() => {
  //   try {
  //     const cookie = Cookies.get("userData");
  //     if (!cookie) return false;

  //     const parsed = JSON.parse(cookie);
  //     return Object.keys(parsed).length > 0;
  //   } catch {
  //     return false;
  //   }
  // })();
  // const userData = (() => {
  //   try {
  //     const cookie = Cookies.get("userData");
  //     if (!cookie) return null;

  //     const parsed = JSON.parse(cookie);
  //     return parsed;
  //   } catch (error) {
  //     return null;
  //   }
  // })();
  useEffect(() => {
    try {
      const cookie = Cookies.get("userData");
      if (!cookie) return;

      const parsed = JSON.parse(cookie);

      if (parsed && Object.keys(parsed).length > 0) {
        setIsUserLoginIn(true);
        setUserData(parsed);
      }
    } catch (err) {
      setIsUserLoginIn(false);
      setUserData(null);
    }
  }, []);
  console.log("userData", userData, isUserLoginIn);

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
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;

      if (window.scrollY > 45) {
        navRef.current.classList.add(styles.fixedNav);
      } else {
        navRef.current.classList.remove(styles.fixedNav);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className="main-header g_header">
        {/* Top Header */}
        <div className={styles.topHeader}>
          <div className="container container-1760">
            <div className="col-lg-12">
              <ul
                className={`${styles.topHeaderText} d-flex align-items-center`}
              >
                <li>
                  <Link href="/contact">Quick Assist</Link>
                </li>
                <li>
                  <Link href="/partner">Partner with us</Link>
                </li>
                <li>
                  <Link href="/contact">Sales Enquiry</Link>
                </li>

                <li className={styles.helpline}>
                  <a href="tel:+919925992599">
                    <Image
                      src={helplineImg}
                      alt="Helpline"
                      width={20}
                      height={20}
                    />{" "}
                    +91 9925 9925 99
                  </a>
                </li>

                {/* Auth Section */}
                {isUserLoginIn ? (
                  <li className="topbar-dropdown">
                    <Link
                      href="/dashboard"
                      className="d-flex align-items-center gap-2 text-decoration-none"
                    >
                      <div className="rounded-circle d-flex align-items-center justify-content-center text-white topbar-avatar">
                        {userData?.name?.charAt(0) || ""}
                      </div>

                      <div className="d-none d-md-flex flex-column lh-sm text-start">
                        <span className="text-white">
                          {userData?.name || ""}
                        </span>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={styles.login}>
                    <FaRegUser
                      size={14}
                      color="var(--color-c0daf9)"
                      className="mx-1"
                    />
                    <Link href="auth/login"> Log In</Link>
                    <span> / </span>
                    <Link href="/auth/signup">Sign Up</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className={styles.mainNav} ref={navRef}>
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
      </header>
      <div className={styles.bottomHeader}>
        <div className="container container-1760">
          <div className="col-lg-12 d-flex align-items-center">
            {/* Workspace Icons */}
            <div
              className={`${styles.workspaceSection} d-flex justify-content-lg-evenly justify-content-between`}
            >
              <div
                className={`${styles.workspaceBox} text-center`}
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                <Link href="/tizzy-mail" className={styles.workspaceA}>
                  <div className={styles.workspaceIcon}>
                    <Image
                      src={tizzyMailImg}
                      alt="Tizzy Mail"
                      width={200}
                      height={100}
                    />
                  </div>
                </Link>
              </div>

              <div
                className={`${styles.workspaceBox} text-center`}
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1200"
              >
                <Link href="/cloud-microsoft-365" className={styles.workspaceA}>
                  <div className={styles.workspaceIcon}>
                    <Image
                      src={microsoftImg}
                      alt="Microsoft 365"
                      width={200}
                      height={100}
                    />
                  </div>
                </Link>
              </div>

              <div
                className={`${styles.workspaceBox} text-center`}
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                <Link href="/google-workspace" className={styles.workspaceA}>
                  <div className={styles.workspaceIcon}>
                    <Image
                      src={Google_WorkspaceImg}
                      alt="Google Workspace"
                      width={200}
                      height={100}
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* CTA Button */}
            <div
              className={`${styles.workspaceRight} ${styles.workspaceRightDesktop} d-flex justify-content-end`}
            >
              <ArrowButton text="Get Start Now" />
            </div>
          </div>
        </div>
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
        isUserLoginIn={isUserLoginIn}
        userData={userData}
      />
    </>
  );
};

export default Navbar;

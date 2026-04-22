import React from "react";
import styles from "@/components/Layout/Footer/Footer.module.css";
import Image from "next/image";
import mainLogo from "@/assets/Navbar/mainLogo.png";
import Link from "next/link";
import isoImg from "@/assets/footer/iso.png";
import MainContainer from "../main-container/MainContainer";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <MainContainer>
        <div className={styles.footerMain}>
          <div className={styles.footerLogoWrapper}>
            <Image
              src={mainLogo}
              width={800}
              height={800}
              alt="logo"
              className={styles.footerLogo}
            />
            <div className={styles.socialLinksWrapper}>
              <Link href={"#"}>
                <FaFacebookF />
              </Link>
              <Link href={"#"}>
                <FaXTwitter />
              </Link>
              <Link href={"#"}>
                <FaInstagram />
              </Link>
              <Link href={"#"}>
                <FaLinkedinIn />
              </Link>
              <Link href={"#"}>
                <FaYoutube />
              </Link>
            </div>
          </div>
          <div className={styles.quickLinks}>
            <div>
              <h6>Tizzy Info</h6>
              <Link href={"#"}>About</Link>
              <Link href={"#"}>Contact</Link>
            </div>
            <div>
              <h6>Solutions</h6>
              <Link href={"#"}>Tizzy Mail</Link>
              <Link href={"#"}>Google Workspace</Link>
              <Link href={"#"}>Microsoft 365</Link>
            </div>
            <div>
              <h6>Support</h6>
              <Link href={"#"}>Migration</Link>
            </div>
          </div>
          <div className={styles.footerDescContainer}>
            <p className={styles.footerDesc}>
              Tizzy Cloud is a team of enthusiastic techies specialized in Cloud
              Computing services. Since inception we are focused on educating
              rather just selling services.
            </p>
          </div>
        </div>
      </MainContainer>

      <MainContainer bgColor="var(--color-f4f9ff)">
        <div className={styles.copyrightContainer}>
          <p>&copy; 2026 Tizzy Cloud. All rights reserved.</p>
          <Image
            src={isoImg}
            height={800}
            width={800}
            className={styles.footerIsoImg}
          />
        </div>
      </MainContainer>
    </footer>
  );
};

export default Footer;

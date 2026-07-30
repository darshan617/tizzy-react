import React from "react";
import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";

const MicroSoft365 = ({
  title,
  description,
  image,
  buttonText,
  buttonLink,
  bannerList,
  backgroundColor,
  imageWidth,
  imageHeight,
  objectFit = "fill",
  objectPosition = "end",
  
}) => {
  return (
    <section className="home-banner position-relative">
      <div
        className="microsoft-banner"
        style={{ backgroundColor: backgroundColor }}
      >
        <Image
          src={image}
          className="img"
          alt="microsoft banner"
          width={imageWidth}
          height={imageHeight}
          style={{
            width: "100%",
            height: "100%",
            objectFit,
            objectPosition,
            margin: "0 auto",
          }}
        />
      </div>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-6 col-md-12 col-12 d-flex align-items-center">
            <div className="banner-text">
              <h1 className="title mb-0">{title}</h1>
              <p className="p-content">{description}</p>
              <ul
                className="workspace-list mt-40 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="600"
              >
                {bannerList &&
                  bannerList.map((item, index) => (
                    <li key={index}>
                      {" "}
                      {item.icon} {item.text}
                    </li>
                  ))}
              </ul>
              <div className="d-flex flex-column flex-lg-row gap-5 mt-40">
                <a href={buttonLink} target="_blank" className="tp-btn-black">
                  <span className="tp-btn-black-filter d-inline-flex align-items-center">
                    <span className="tp-btn-black-text">{buttonText}</span>
                    <span className="tp-btn-black-circle">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroSoft365;

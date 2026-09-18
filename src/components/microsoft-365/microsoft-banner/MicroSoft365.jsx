import React from "react";
import Image from "next/image";

const MicroSoft365 = ({
  title,
  description,
  image,
  buttonText,
  buttonLink,
  bannerList,
  backgroundColor,
  imageWidth = 600,
  imageHeight = 600,
  objectFit = "cover",
  objectPosition = "center",
  textColor = "black",
}) => {
  return (
    <section
      className="microsoft-banner position-relative"
      style={{ minHeight: "600px", width: "100%", background: "#d1e9e5" }}
    >
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-6 col-md-12 col-12 d-flex align-items-center">
            <div className="banner-text">
              <h1 className="title mb-0" style={{ color: textColor }}>
                {title}
              </h1>
              <p className="p-content" style={{ color: textColor }}>
                {description}
              </p>

              {bannerList && bannerList.length > 0 && (
                <ul className="workspace-list mt-40">
                  {bannerList.map((item, index) => (
                    <li key={index} style={{ color: textColor }}>
                      {item.icon} {item.text}
                    </li>
                  ))}
                </ul>
              )}

              <div className="d-flex flex-column flex-lg-row gap-5 mt-40">
                <a
                  href={buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tp-btn-black"
                >
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
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-12 d-flex align-items-center justify-content-center">
            <div
              className="banner-img"
              style={{
                backgroundColor: backgroundColor || "transparent",
                width: "100%",
                height: "100%",
                position: "relative",
                minHeight: "300px",
              }}
            >
              {image && (
                <Image
                  src={image}
                  alt="microsoft banner"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit,
                    objectPosition,
                  }}
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroSoft365;

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { BiUser } from "react-icons/bi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import userImg from "@/assets/home/testimonial/user.png";
import styles from "@/components/home/testimonials/Testimonial.module.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const testimonials = [
  {
    text: "Our existing vendor was not able to solve daily issues related to emails so we were about to migrate all 200 email users to either Google or Microsoft. After trying Tizzy Mail our team was very happy as almost all the issues were solved immediately after activation.",
    name: "IT Manager of leading HR Company",
    location: "MUMBAI, INDIA",
    image: userImg,
    rating: 5,
  },
  {
    text: "IP blacklisting issue, UCE Protect level 2 and level 3 listing issues, spamming issues, other DNS related issues all were solved after moving all 350 emails to Tizzy Mail. We always wanted Indian Data Center and with Tizzy Mail all our Email Data is now stored only in India.",
    name: "IT Manager of multinational manufacturing company",
    location: "MUMBAI, INDIA",
    image: userImg,
    rating: 4,
  },
  {
    text: "Incoming spam emails are reduced to 60-70%, almost ZERO complaints from our customers, quick response to our emails. All IT companies should offer only Tizzy Mail service to their clients.",
    name: "Owner of 22-year-old IT company",
    location: "MUMBAI, INDIA",
    image: userImg,
    rating: 5,
  },
  {
    text: "Our existing vendor was not able to solve daily issues related to emails so we were about to migrate all 200 email users to either Google or Microsoft. After trying Tizzy Mail our team was very happy as almost all the issues were solved immediately after activation.",
    name: "IT Manager of leading HR Company",
    location: "MUMBAI, INDIA",
    image: userImg,
    rating: 4,
  },
  {
    text: "IP blacklisting issue, UCE Protect level 2 and level 3 listing issues, spamming issues, other DNS related issues all were solved after moving all 350 emails to Tizzy Mail. We always wanted Indian Data Center and with Tizzy Mail all our Email Data is now stored only in India.",
    name: "IT Manager of multinational manufacturing company",
    location: "MUMBAI, INDIA",
    image: userImg,
    rating: 5,
  },
];

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="testimonial-section pt-100 pb-100">
      <div className="row m-0">
        <div className="col-lg-12 p-0 d-flex flex-column flex-lg-row">
          {/* LEFT */}
          <div className="testimonial-left">
            <ImQuotesLeft color="#a8a8a8" size={60} className="quote" />

            <h2 className="div-title color-333233">
              What Our Customers Are Saying
            </h2>

            {/* CUSTOM ARROWS */}
            <div
              className={`mt-50 d-flex align-items-center gap-3 ${styles.navigationBtnWrapper}`}
            >
              <button
                ref={prevRef}
                className={`arrow-btn ${styles.navigationBtn}`}
              >
                <FaArrowLeftLong size={20} color="var(--color-1e58b4)" />
              </button>

              <div className="line"></div>

              <button
                ref={nextRef}
                className={`arrow-btn ${styles.navigationBtn}`}
              >
                <FaArrowRightLong size={20} color="var(--color-1e58b4)" />
              </button>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="testimonial-right">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              speed={600}
              slidesPerGroup={1}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 2.5 },
              }}
            >
              {testimonials.map((item, i) => {
                const UserImg = item?.image;
                return (
                  <SwiperSlide key={i}>
                    <div className="testimonial-box">
                      <div className="customer-details position-relative">
                        {/* <Image
                        src={quoteBlack}
                        alt="Quote Black"
                        className="quote-black"
                      /> */}
                        <ImQuotesLeft
                          size={25}
                          className={`${styles.testimonialQuoteIcon} `}
                        />

                        <p>{item.text}</p>

                        <div className="rating d-flex gap-1 mt-2">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              color={i < item.rating ? "#ff6a00" : "#ccc"}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="customer-name d-flex align-items-center">
                        <Image
                          src={UserImg}
                          alt="User"
                          style={{ width: "50px", height: "100%" }}
                        />

                        <div className="ms-2">
                          <h3 className="p-content weight-SemiBold mb-0">
                            {item.name}
                          </h3>
                          <h4 className="small-text color-333233 mb-0">
                            {item.location}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

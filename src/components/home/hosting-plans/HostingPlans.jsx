import React from "react";
import Link from "next/link";

const HostingPlans = () => {
  const PLANS = [
    {
      id: 1,
      name: "Starter",
      storage: "5 GB Storage",
      price: 792,
      renewPrice: 792,
    },
    {
      id: 2,
      name: "Business",
      storage: "25 GB Storage",
      price: 1499,
      renewPrice: 1499,
    },
    {
      id: 3,
      name: "Enterprise",
      storage: "50 GB Storage",
      price: 2499,
      renewPrice: 2499,
    },
  ];

  return (
    <section className="hosting-plans-section position-relative pt-100 pb-100">
      <div className="container">
        {/* TITLE */}
        <div className="row">
          <div className="col-lg-12">
            <div
              className="plans-title text-center"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h2 className="title">Tizzy Cloud Email Plans</h2>
            </div>
          </div>
        </div>

        {/* PLANS */}
        <div className="row justify-content-center mt-40">
          <div className="col-xxl-10 col-xl-10 col-lg-12 col-md-12">
            <div className="row gx-4">
              {PLANS.map((plan, index) => (
                <div
                  key={plan.id}
                  className="col-xl-4 col-lg-4 col-md-6 col-12"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="plan-box">
                    <div className="best-value">
                      <h3 className="small-text mb-0 weight-Regular">
                        {plan.name}
                      </h3>
                    </div>

                    <div className="plans-details">
                      <div className="plans-details-text">
                        <h4 className="div-text mb-0 weight-Regular">
                          {plan.name}
                        </h4>

                        <h5 className="div-sub-title mb-0 weight-SemiBold">
                          {plan.storage}
                        </h5>

                        <h6 className="div-title mb-0 weight-SemiBold color-1e58b4">
                          ₹ {plan.price}
                        </h6>

                        <span className="extra-small-text d-block">
                          /Per user /Per Year
                        </span>

                        <Link
                          href={`/select-plan/${plan.id}`}
                          className="buy-now"
                        >
                          Buy Now
                        </Link>
                      </div>

                      <div className="gst-bg">
                        <div className="small-text renews">
                          Renews at{" "}
                          <span className="div-text">₹ {plan.renewPrice}</span>
                        </div>
                      </div>

                      <div className="plans-details-text plans-details-text-bottom">
                        <h4 className="small-text">GST 18% Additional</h4>

                        <Link href="/tizzy-mail" className="tp-btn-black">
                          <span className="tp-btn-black-filter d-inline-flex align-items-center">
                            <span className="tp-btn-black-text">Details</span>
                            <span className="tp-btn-black-circle">
                              <svg width="10" height="10" viewBox="0 0 10 10">
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
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VIEW ALL */}
          <div className="col-12 mt-80 d-flex justify-content-center">
            <Link
              href="/tizzy-mail"
              className="tp-btn-black btn-red-bg"
              data-aos="zoom-in"
              data-aos-duration="800"
            >
              <span className="tp-btn-black-filter d-inline-flex align-items-center">
                <span className="tp-btn-black-text">View All Plans</span>
                <span className="tp-btn-black-circle">
                  <svg width="10" height="10" viewBox="0 0 10 10">
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingPlans;

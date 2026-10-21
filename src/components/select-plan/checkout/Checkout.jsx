"use client";

import React from "react";
import Image from "next/image";

const Checkout = () => {
  const states = [
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <section className="checkout-section select-plan-section position-relative">
      <div className="container">
        <h2 className="your-cart-heading">Your Cart</h2>

        <div className="cart-progress">
          <div className="step-wrapper">
            <div className="step">Select Plan</div>
            <div className="step active">Checkout</div>
            <div className="step">Payment</div>
          </div>

          <div className="back-btn">← Back</div>
        </div>

        <div className="row mt-40">
          <div className="col-lg-8 col-md-7 col-12">
            <div className="cart-plan-box mb-30" id="domain-setup-box">
              <h3 className="plan-box-title div-text mb-0">
                <Image
                  src="https://goyalinfotech.in/tizzy/public/home/images/icons/world-wide-web.png"
                  alt="world-wide-web"
                  width={24}
                  height={24}
                  unoptimized
                />{" "}
                Set Up Business Email on Your Domain
              </h3>

              <div className="domain-section">
                <div id="domain-input-container">
                  <form id="domain-form" className="domain-box">
                    <div className="domain-input position-relative w-100">
                      <i className="fa fa-globe search-icon-input" />

                      <input
                        type="text"
                        name="domain_name"
                        id="domain_name"
                        placeholder="Enter Domain Name (e.g. tizzycloud)"
                        autoComplete="off"
                        className="form-control"
                        style={{
                          height: "55px",
                          borderRadius: "10px",
                        }}
                      />

                      <div
                        id="domain-suggestions"
                        className="domain-suggestions-dropdown"
                        style={{ display: "none" }}
                      />

                      <div
                        id="domain-loader"
                        className="spinner-border spinner-border-sm position-absolute"
                        role="status"
                        style={{
                          right: "15px",
                          top: "18px",
                          display: "none",
                        }}
                      />
                    </div>

                    <button type="submit" className="domain-btn">
                      Add
                    </button>
                  </form>
                </div>

                <div id="selected-domain-container" style={{ display: "none" }}>
                  <div className="selected-domain-bar">
                    <span
                      className="selected-domain-name"
                      id="display-selected-domain"
                    />

                    <i
                      className="fa fa-trash-o delete-domain-btn"
                      id="remove-domain"
                      title="Delete Domain"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="account-card card-bg disabled-section"
              id="account-section"
            >
              <div className="register-box">
                <form className="dashboard-form" id="checkout-form">
                  <input
                    type="hidden"
                    name="_token"
                    value=""
                    autoComplete="off"
                  />
                  <input
                    type="hidden"
                    name="order_id"
                    id="form_order_id"
                    value=""
                  />
                  <input
                    type="hidden"
                    name="total_amount"
                    id="form_total_amount"
                    value=""
                  />
                  <input
                    type="hidden"
                    name="tax_amount"
                    id="form_tax_amount"
                    value=""
                  />
                  <input
                    type="hidden"
                    name="subtotal"
                    id="form_subtotal"
                    value=""
                  />
                  <input
                    type="hidden"
                    name="discount_amount"
                    id="form_discount_amount"
                    value="0.00"
                  />
                  <input
                    type="hidden"
                    name="domain_name"
                    id="form_domain_name"
                    value=""
                  />
                  <input
                    type="hidden"
                    name="promo_code"
                    id="form_promo_code"
                    value=""
                  />

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="first_name"
                        id="first_name"
                      />
                      <div className="text-danger" id="error-first_name" />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="last_name"
                        id="last_name"
                      />
                      <div className="text-danger" id="error-last_name" />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        Email address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                      />
                      <div className="text-danger" id="error-email" />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        Phone number <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          id="mobile"
                          className="js-states form-control"
                          placeholder="Phone Number"
                          name="mobile"
                        />
                      </div>
                      <div className="text-danger" id="error-mobile" />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        Country <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select form-control"
                        name="country"
                        id="country_select"
                        defaultValue="101"
                      >
                        <option value="101">India</option>
                      </select>
                      <div className="text-danger" id="error-country" />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        State <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select form-control"
                        name="state"
                        id="state_select"
                        defaultValue=""
                      >
                        <option value="">Select State</option>
                        {states.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                      <div className="text-danger" id="error-state" />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        City <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select form-control"
                        name="city"
                        id="city_select"
                        defaultValue=""
                      >
                        <option value="">Select City</option>
                      </select>
                      <div className="text-danger" id="error-city" />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        Postcode <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="postcode"
                        id="postcode"
                      />
                      <div className="text-danger" id="error-postcode" />
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="companyDetails"
                          name="add_company_details"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="companyDetails"
                        >
                          Add company details
                        </label>
                      </div>
                    </div>

                    <div
                      className="col-md-12 col-12"
                      id="gstin_fields"
                      style={{ display: "none" }}
                    >
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">
                            GSTIN <span className="text-danger">*</span>
                          </label>

                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              name="gstin"
                              id="gstin"
                              placeholder="Enter 15 digit GSTIN"
                              style={{
                                textTransform: "uppercase",
                                height: "45px",
                              }}
                            />

                            <button
                              className="btn btn-outline-primary"
                              type="button"
                              id="search-gstin-btn"
                              style={{
                                borderRadius: "0 10px 10px 0",
                              }}
                            >
                              Search
                            </button>
                          </div>

                          <div className="text-danger" id="error-gstin" />
                        </div>

                        <div
                          className="col-md-6"
                          id="company_name_group"
                          style={{ display: "none" }}
                        >
                          <label className="form-label">Company Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="company_name"
                            id="company_name"
                            readOnly
                            style={{
                              backgroundColor: "#f8f9fa",
                              cursor: "not-allowed",
                            }}
                          />
                        </div>

                        <div
                          className="col-md-12"
                          id="company_address_group"
                          style={{ display: "none" }}
                        >
                          <label className="form-label">Company Address</label>
                          <textarea
                            className="form-control"
                            name="company_address"
                            id="company_address"
                            readOnly
                            rows={2}
                            style={{
                              backgroundColor: "#f8f9fa",
                              cursor: "not-allowed",
                            }}
                          />
                        </div>
                      </div>

                      <input
                        type="hidden"
                        name="last_updated"
                        id="last_updated"
                      />
                      <input
                        type="hidden"
                        name="constitution"
                        id="constitution"
                      />
                      <input
                        type="hidden"
                        name="registration_date"
                        id="registration_date"
                      />
                      <input
                        type="hidden"
                        name="nature_of_business"
                        id="nature_of_business"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-5 col-12">
            <div
              className="order-summary-box disabled-section"
              id="summary-section"
            >
              <h3 className="summary-title">Order Summary</h3>

              <div className="plan-controls">
                <div
                  className="summary-item d-flex justify-content-between align-items-center"
                  id="summary-domain-row"
                  style={{ display: "none" }}
                >
                  <span
                    id="summary-domain-name"
                    className="text-muted"
                    style={{ fontSize: "0.9rem" }}
                  >
                    No domain selected
                  </span>

                  <i
                    className="fa fa-times cross"
                    id="remove-sidebar-domain"
                    title="Remove Domain"
                  >
                    x
                  </i>
                </div>

                <div className="summary-item-header">
                  <span className="item-name" id="display-plan-name" />
                  <span className="item-price" id="display-mailboxes">
                    - 1 Mailbox
                  </span>
                </div>

                <div className="summary-item">
                  <span className="item-description">
                    <span className="color-000000" id="display-duration">
                      12 Month
                    </span>
                  </span>
                  <span className="item-price-value" id="plan-price-display">
                    ₹ 792.00
                  </span>
                </div>

                <div
                  className="summary-item"
                  id="summary-discount-row"
                  style={{ display: "none", color: "#2e7d32" }}
                >
                  <div>
                    <span
                      className="item-description"
                      style={{ color: "#2e7d32" }}
                    >
                      Discount (<span id="discount-percent-display">0</span>%)
                    </span>
                  </div>
                  <span
                    className="item-price-value"
                    id="summary-discount-amount"
                  >
                    ₹ 0.00
                  </span>
                </div>

                <div className="summary-item">
                  <div>
                    <span className="item-description">Taxes (GST 18%)</span>
                    <div className="tooltip-box">
                      <Image
                        src="https://goyalinfotech.in/tizzy/public/home/images/icons/question-mark.png"
                        alt="question mark"
                        width={16}
                        height={16}
                        unoptimized
                      />
                      <span className="tooltip-text">
                        Goods and Services Tax (GST) calculated at 18% of
                        subtotal.
                      </span>
                    </div>
                  </div>
                  <span className="item-price-value" id="summary-gst">
                    ₹ 142.56
                  </span>
                </div>

                <div
                  className="subtotal-section pt-0"
                  style={{
                    border: "none",
                    paddingTop: "15px",
                    marginTop: "10px",
                    padding: "20px 0"
                  }}
                >
                  <span
                    className="subtotal-label"
                    style={{ fontWeight: 700, fontSize: "1.2rem" }}
                  >
                    Total
                  </span>
                  <span
                    className="subtotal-amount"
                    id="summary-total"
                    style={{ fontWeight: 700, fontSize: "1.2rem" }}
                  >
                    ₹ 934.56
                  </span>
                </div>

                <div className="input-group coupon-code">
                  <input
                    type="text"
                    className="form-control"
                    id="promo_code_input"
                    placeholder="Have a coupon code?"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="apply-btn"
                    id="apply-promo-btn"
                    type="button"
                  >
                    Apply
                  </button>
                </div>

                <button
                  type="submit"
                  form="checkout-form"
                  className="checkout-btn"
                  id="secure-checkout-btn"
                >
                  <span
                    id="spinner"
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    style={{ display: "none" }}
                  />
                  <span id="btn-text">Continue to Secure Checkout</span>
                </button>

                <div className="guarantee-badge">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1L3 6V12C3 18.6 12 24 12 24S21 18.6 21 12V6L12 1Z"
                      fill="#32a953"
                      stroke="#32a953"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 14L8 12M10 14L16 8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>30 days money back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import UPI from "@/assets/images/upi.png";
import VMU from "@/assets/images/VMU.png";
import {
  FaCheckCircle,
  FaChevronDown,
  FaGoogleWallet,
  FaLock,
  FaMobileAlt,
  FaQrcode,
  FaUniversity,
} from "react-icons/fa";
import styles from "@/components/select-plan/checkout/payment/Payment.module.css";

const Payment = () => {
  const [activeMethod, setActiveMethod] = useState("upi");
  const [openAccordion, setOpenAccordion] = useState("upi-apps");
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [paymentMessage, setPaymentMessage] = useState("");

  const togglePaymentSection = (method) => {
    setActiveMethod((current) => (current === method ? "" : method));
    setPaymentMessage("");
  };

  const toggleUpiAccordion = (accordion) => {
    setOpenAccordion((current) => (current === accordion ? "" : accordion));
  };

  // Connect these handlers to your payment gateway/backend.
  const startUpiVariantPayment = (variant, app = "") => {
    setPaymentMessage(
      `Connect your payment gateway to continue with ${app || variant}.`,
    );
  };

  const generateQr = () => {
    setPaymentMessage(
      "Connect your payment gateway to generate a secure UPI QR code.",
    );
  };

  const processCustomPayment = (method) => {
    setPaymentMessage(
      `Connect your payment gateway to process ${method} payment.`,
    );
  };

  return (
    <section className="select-plan-section position-relative py-5">
      <div className="container">
        <h2 className="your-cart-heading mb-4">Complete Payment</h2>

        <div className="cart-progress mb-5">
          <div className="step-wrapper">
            <div className="step">Select Plan</div>
            <div className="step">Checkout</div>
            <div className="step active">Payment</div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <div className="select-payment__method w-100">
              <div className="h-mt-24">
                <div className="select-payment__execution-time h-t-body-1 h-mb-16">
                  Select Payment Method:
                </div>

                <div className="select-payment__methods">
                  {/* UPI */}
                  <div
                    className={`payment-method__wrapper w-100 ${
                      activeMethod === "upi" ? "active" : ""
                    }`}
                  >
                    <div
                      className="payment-method__header"
                      onClick={() => togglePaymentSection("upi")}
                    >
                      <div className="h-t-body-1-bold h-m-0">Pay via UPI</div>

                      <div className="d-flex align-items-center">
                        <Image
                          src={UPI}
                          alt="UPI"
                          className="payment-method__method-logo me-3"
                        />
                        <FaChevronDown />
                      </div>
                    </div>

                    {activeMethod === "upi" && (
                      <div className="payment-method__body">
                        <div
                          id="upi-form"
                          className="payment-form"
                          style={{ display: "block" }}
                        >
                          <div className={styles.upiOptionGrid}>
                            {/* UPI Apps */}
                            <div
                              className={`${styles.upiOptionCard} d-md-none`}
                            >
                              <button
                                type="button"
                                className={styles.upiAccordionHeader}
                                onClick={() => toggleUpiAccordion("upi-apps")}
                              >
                                <div>
                                  <div className={styles.upiOptionTitle}>
                                    <FaMobileAlt /> Pay via UPI Apps
                                  </div>
                                </div>
                                <FaChevronDown />
                              </button>

                              {openAccordion === "upi-apps" && (
                                <div className={styles.upiAccordionBody}>
                                  <div className="upi-app-grid mt-2">
                                    <a
                                      className="upi-app-link"
                                      href="#"
                                      onClick={(event) => {
                                        event.preventDefault();
                                        startUpiVariantPayment(
                                          "intent_redirect",
                                          "gpay",
                                        );
                                      }}
                                    >
                                      <span
                                        className="upi-app-fallback gpay"
                                        aria-hidden="true"
                                      >
                                        GPay
                                      </span>
                                      <span>Google Pay</span>
                                    </a>

                                    <a
                                      className="upi-app-link"
                                      href="#"
                                      onClick={(event) => {
                                        event.preventDefault();
                                        startUpiVariantPayment(
                                          "intent_redirect",
                                          "phonepe",
                                        );
                                      }}
                                    >
                                      <span
                                        className="upi-app-fallback phonepe"
                                        aria-hidden="true"
                                      >
                                        PhonePe
                                      </span>
                                      <span>PhonePe</span>
                                    </a>

                                    <a
                                      className="upi-app-link"
                                      href="#"
                                      onClick={(event) => {
                                        event.preventDefault();
                                        startUpiVariantPayment(
                                          "intent_redirect",
                                          "paytm",
                                        );
                                      }}
                                    >
                                      <span
                                        className="upi-app-fallback paytm"
                                        aria-hidden="true"
                                      >
                                        Paytm
                                      </span>
                                      <span>Paytm</span>
                                    </a>
                                  </div>

                                  <p className="upi-app-note">
                                    App will open directly after tap.
                                  </p>
                                </div>
                              )}
                            </div>

                            {/* Generate QR */}
                            <div className={styles.upiOptionCard}>
                              <button
                                type="button"
                                className={styles.upiAccordionHeader}
                                onClick={() => toggleUpiAccordion("qr")}
                              >
                                <div>
                                  <div className={styles.upiOptionTitle}>
                                    <FaQrcode className="text-primary " />{" "}
                                    Generate QR
                                  </div>
                                </div>
                                <FaChevronDown />
                              </button>

                              {openAccordion === "qr" && (
                                <div className={styles.upiAccordionBody}>
                                  <button
                                    id="generate-qr-btn"
                                    type="button"
                                    className={`${styles.upiGenerateBtn} mt-2`}
                                    onClick={generateQr}
                                  >
                                    Generate QR
                                  </button>

                                  <div
                                    id="qr-container"
                                    className={styles.upiQrBox}
                                  >
                                    <p className="upi-qr-note mb-0">
                                      Your secure UPI QR will appear here after
                                      you continue.
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Verify UPI ID */}
                            <div className={styles.upiOptionCard}>
                              <button
                                type="button"
                                className={styles.upiAccordionHeader}
                                onClick={() => toggleUpiAccordion("verify-upi")}
                              >
                                <div>
                                  <div className={styles.upiOptionTitle}>
                                    <FaCheckCircle className="text-primary " />{" "}
                                    Verify UPI ID
                                  </div>
                                  <div className="upi-option-subtitle">
                                    Confirm your UPI ID and continue to payment
                                    QR.
                                  </div>
                                </div>
                                <FaChevronDown />
                              </button>

                              {openAccordion === "verify-upi" && (
                                <div className={styles.upiAccordionBody}>
                                  <div className="form-group mb-0 mt-2">
                                    <label className="form-label">
                                      UPI ID (VPA)
                                    </label>

                                    <input
                                      type="text"
                                      id="upi_id"
                                      className="form-control-custom mb-2"
                                      placeholder="username@bankname"
                                      value={upiId}
                                      onChange={(event) =>
                                        setUpiId(event.target.value)
                                      }
                                    />

                                    <button
                                      type="button"
                                      className="pay-now-btn"
                                      onClick={() => {
                                        if (!upiId.trim()) {
                                          setPaymentMessage(
                                            "Please enter your UPI ID.",
                                          );
                                          return;
                                        }

                                        startUpiVariantPayment(
                                          "verify_collect",
                                        );
                                      }}
                                    >
                                      Pay via UPI
                                    </button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          <div
                            id="upi-error"
                            className="payment-error text-center mt-3"
                          >
                            {activeMethod === "upi" && paymentMessage}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Credit / Debit Card */}
                  <div
                    className={`payment-method__wrapper w-100 ${
                      activeMethod === "card" ? "active" : ""
                    }`}
                  >
                    <div
                      className="payment-method__header"
                      onClick={() => togglePaymentSection("card")}
                    >
                      <div className="h-t-body-1-bold h-m-0">Pay via Card</div>

                      <div className="d-flex align-items-center">
                        <Image
                          src={VMU}
                          alt="VMU"
                          className="payment-method__method-logo me-3"
                        />
                        <FaChevronDown />
                      </div>
                    </div>

                    {activeMethod === "card" && (
                      <div className="payment-method__body">
                        <div
                          id="card-form"
                          className="payment-form"
                          style={{ display: "block" }}
                        >
                          <div className="form-group">
                            <label className="form-label">Card Number</label>
                            <input
                              type="text"
                              id="card_number"
                              className="form-control-custom"
                              placeholder="0000 0000 0000 0000"
                              maxLength={19}
                              autoComplete="cc-number"
                              value={cardNumber}
                              onChange={(event) =>
                                setCardNumber(event.target.value)
                              }
                            />
                          </div>

                          <div className="form-row">
                            <div className="form-group">
                              <label className="form-label">Expiry</label>
                              <input
                                type="text"
                                id="card_expiry"
                                className="form-control-custom"
                                placeholder="MM/YY"
                                maxLength={7}
                                autoComplete="cc-exp"
                                value={cardExpiry}
                                onChange={(event) =>
                                  setCardExpiry(event.target.value)
                                }
                              />
                            </div>

                            <div className="form-group">
                              <label className="form-label">CVV</label>
                              <input
                                type="password"
                                id="card_cvv"
                                className="form-control-custom"
                                placeholder="123"
                                maxLength={4}
                                autoComplete="cc-csc"
                                value={cardCvv}
                                onChange={(event) =>
                                  setCardCvv(event.target.value)
                                }
                              />
                            </div>
                          </div>

                          <button
                            type="button"
                            className="pay-now-btn"
                            onClick={() => processCustomPayment("card")}
                          >
                            Pay Now
                          </button>

                          <div
                            id="card-error"
                            className="payment-error text-center mt-3"
                          >
                            {activeMethod === "card" && paymentMessage}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Netbanking */}
                  <div
                    className={`payment-method__wrapper w-100 ${
                      activeMethod === "netbanking" ? "active" : ""
                    }`}
                  >
                    <div
                      className="payment-method__header"
                      onClick={() => togglePaymentSection("netbanking")}
                    >
                      <div className="h-t-body-1-bold h-m-0">Netbanking</div>

                      <div className="d-flex align-items-center">
                        <FaUniversity className="me-3" />
                        <FaChevronDown />
                      </div>
                    </div>

                    {activeMethod === "netbanking" && (
                      <div className="payment-method__body">
                        <div
                          id="netbanking-form"
                          className="payment-form"
                          style={{ display: "block" }}
                        >
                          <button
                            type="button"
                            className="pay-now-btn"
                            onClick={() => processCustomPayment("netbanking")}
                          >
                            Select Bank &amp; Pay
                          </button>

                          <div
                            id="netbanking-error"
                            className="payment-error text-center mt-3"
                          >
                            {activeMethod === "netbanking" && paymentMessage}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Wallet */}
                  <div
                    className={`payment-method__wrapper w-100 ${
                      activeMethod === "wallet" ? "active" : ""
                    }`}
                  >
                    <div
                      className="payment-method__header"
                      onClick={() => togglePaymentSection("wallet")}
                    >
                      <div className="h-t-body-1-bold h-m-0">Wallet</div>

                      <div className="d-flex align-items-center">
                        <FaGoogleWallet className="me-3" /> <FaChevronDown />
                      </div>
                    </div>

                    {activeMethod === "wallet" && (
                      <div className="payment-method__body">
                        <div
                          id="wallet-form"
                          className="payment-form"
                          style={{ display: "block" }}
                        >
                          <button
                            type="button"
                            className="pay-now-btn"
                            onClick={() => processCustomPayment("wallet")}
                          >
                            Select Wallet &amp; Pay
                          </button>

                          <div
                            id="wallet-error"
                            className="payment-error text-center mt-3"
                          >
                            {activeMethod === "wallet" && paymentMessage}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-lg-5">
            <div className="order-summary-card">
              <div className="plan-badge">12 Month Plan</div>
              <h3 className="summary-title">Order Summary</h3>

              <div className="summary-row">
                <span className="summary-label">Plan</span>
                <span className="summary-value" />
              </div>

              <div className="summary-row">
                <span className="summary-label">Domain</span>
                <span className="summary-value">fff.com</span>
              </div>

              <div className="summary-row">
                <span className="summary-label">Quantity</span>
                <span className="summary-value">1 Mailbox(es)</span>
              </div>

              <div className="summary-row">
                <span className="summary-label">Subtotal</span>
                <span className="summary-value">₹ 792.00</span>
              </div>

              <div className="summary-row">
                <span className="summary-label">GST (18%)</span>
                <span className="summary-value">₹ 142.56</span>
              </div>

              <div className="summary-row summary-total">
                <span>Total Amount</span>
                <span>₹ 934.56</span>
              </div>

              <div className="mt-4 text-center">
                <p className="text-muted small">
                  <FaLock />
                  Secure SSL Encrypted Payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;

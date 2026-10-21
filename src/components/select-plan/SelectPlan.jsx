import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { IoMdArrowBack } from "react-icons/io";

const SelectPlan = () => {
  return (
    <section className="select-plan-section position-relative">
      <div className="container">
        <h2 className="your-cart-heading">Your Cart</h2>
        <div className="cart-progress">
          <div className="step-wrapper">
            <div className="step active">Select Plan</div>
            <div className="step">Checkout</div>
            <div className="step">Payment</div>
          </div>
          <div className="back-btn"> <IoMdArrowBack /> Back</div>
        </div>
        <div className="row mt-40">
          <div className="col-lg-6">
            <div className="cart-plan-box">
              <h3 className="plan-box-title div-text mb-0">Basic Plan</h3>
              <div className="plan-controls d-flex">
                <div className="d-flex gap-4 control-box">
                  <div className="control-group">
                    <label className="control-label">Plan Duration</label>
                    <select className="plan-duration-select">
                      <option>12 Month</option>
                      <option>6 Month</option>
                      <option>3 Month</option>
                      <option>1 Month</option>
                    </select>
                  </div>

                  <div className="control-group">
                    <label className="control-label">Mailboxes</label>
                    <div className="qty-wrapper ">
                      <button className="qty-btn minus">−</button>
                      <input
                        type="number"
                        className="qty-input"
                        value="1"
                        min="1"
                      />
                      <button className="qty-btn plus">+</button>
                    </div>
                  </div>
                </div>
                <div className="plan-price-display">
                  <span className="price-currency">₹</span>
                  <span className="price-amount">792.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="order-summary-box">
              <h3 className="summary-title">Order Summary</h3>
              <div className="plan-controls">
                <div className="summary-item-header">
                  <span className="item-name">Basic Plan</span>
                  <span className="item-price">1 Mailbox</span>
                </div>

                <div className="summary-item">
                  <span className="item-description">12 Month Plan</span>
                  <span className="item-price-value">₹792.00</span>
                </div>

                <div className="subtotal-section">
                  <span className="subtotal-label">Subtotal</span>
                  <span className="subtotal-amount">₹792.00</span>
                </div>

                <p className="gst-info">GST calculated at checkout</p>

                <button className="checkout-btn" onclick="continueCheckout()">
                  <span>Continue to Secure Checkout</span>
                </button>

                <div className="guarantee-badge">
                  <BsShieldFillCheck fill="#32a953" />
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

export default SelectPlan;

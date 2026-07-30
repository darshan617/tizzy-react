import Image from 'next/image'
import React from 'react'
import gmailIcon from "@/assets/images/Gmail.svg";
import driveIcon from "@/assets/images/Drive.svg";
import meetIcon from "@/assets/images/meet.svg";
import calendarIcon from "@/assets/images/Calendar.svg";
import chatIcon from "@/assets/images/chat.svg";
import geminiIcon from "@/assets/images/gemini.png";
import docsIcon from "@/assets/images/docs.svg";
import sheetsIcon from "@/assets/images/sheets.svg";
import slidesIcon from "@/assets/images/slides.svg";
import vidsIcon from "@/assets/images/vids.svg";
import keepIcon from "@/assets/images/keep.svg";
import sitesIcon from "@/assets/images/sites.svg";
import formsIcon from "@/assets/images/forms.svg";
import { FaCheckCircle } from 'react-icons/fa';
import styles from '@/components/tizzy-mail/pricing-plan/PricingPlans.module.css'
const WorkspacePlan = () => {
  return (
    <section className="workspace-plan-section hosting-plans-section pt-100 pb-100" id="pricing">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-7 col-lg-9 col-md-12 col-12">
        <div className="workspace-plan-title text-center">
          <h2 className="div-sub-title aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">Choose the Right Google Workspace Plan</h2>
          <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className="aos-init aos-animate">Simple, secure and powerful tools to Support your business grow</p>
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-20 mb-50">
      <div className="col-xl-12 col-lg-12 col-md-12 col-12">
        <div className="workspace-include aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1200">
          <div className="workspace-include-list"><Image src={gmailIcon} alt="Gmail" /></div>
          <div className="workspace-include-list"><Image src={driveIcon} alt="Drive" /></div>
          <div className="workspace-include-list"><Image src={meetIcon} alt="Meet" /></div>
          <div className="workspace-include-list"><Image src={calendarIcon} alt="Calendar" /></div>
          <div className="workspace-include-list"><Image src={chatIcon} alt="Chat" /></div>
          <div className="workspace-include-list"><Image src={geminiIcon} alt="Gemini" /></div>
          <div className="workspace-include-list"><Image src={docsIcon} alt="Docs" /></div>
          <div className="workspace-include-list"><Image src={sheetsIcon} alt="Sheets" /></div>
          <div className="workspace-include-list"><Image src={slidesIcon} alt="Slides" /></div>
          <div className="workspace-include-list"><Image src={vidsIcon} alt="Vids" /></div>
          <div className="workspace-include-list"><Image src={keepIcon} alt="Keep" /></div>
          <div className="workspace-include-list"><Image src={sitesIcon} alt="Sites" /></div>
          <div className="workspace-include-list"><Image src={formsIcon} alt="Forms" /></div>
        </div>
      </div>
    </div>
    <div className="row gx-4 aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1600">
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
        <div className="plan-box workspace-height d-flex flex-column justify-content-between">
          <div className="">
            <div className="best-value">
            <h3 className="div-text mb-0 weight-Regular">Business Starter</h3>
            <p className="mb-0">Recommended for growing businesses</p>
          </div>
          <div className="plans-details">
            <div className="plans-details-text">
              <h4 className="div-title mb-0 weight-SemiBold">₹ 3240</h4>
              <span className="extra-small-text d-block mb-0">User / Year</span>
            </div>
            <div className="gst-bg"><p className="small-text renews">GST 18% Additional</p></div>
            <ul className="plans-details-list">
              <li><FaCheckCircle className={styles.CheckIcon} />Custom business email</li>
              <li><FaCheckCircle className={styles.CheckIcon} />30 GB cloud storage per user</li>
              <li><FaCheckCircle className={styles.CheckIcon} />Secure video meetings</li>
              <li><FaCheckCircle className={styles.CheckIcon} />Standard security controls</li>
              <li><FaCheckCircle className={styles.CheckIcon} />Standard support</li>
            </ul>
          </div>
          </div>
          <div className="plans-details-text plans-details-text-bottom">
            <button type="button" className="buy-now" data-bs-toggle="modal" data-bs-target="#exampleModal">Inquiry Now</button>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
        <div className="plan-box workspace-height d-flex flex-column justify-content-between">
          <div>
            <div className="best-value">
            <h3 className="div-text mb-0 weight-Regular">Business Standard</h3>
            <p className="mb-0">Ideal for developed establishments </p>
          </div>
          <div className="plans-details">
            <h4 className="small-text mb-0 weight-SemiBold most-popular">Recommended</h4>
            <div className="plans-details-text">
              <h4 className="div-title mb-0 weight-SemiBold">₹12960</h4>
              <span className="extra-small-text d-block mb-0">User / Year</span>
            </div>
            <div className="gst-bg"><p className="small-text renews">GST 18% Additional</p></div>
            <ul className="plans-details-list">
              <li><FaCheckCircle className={styles.CheckIcon} />Custom &amp; secure business email</li>
              <li><FaCheckCircle className={styles.CheckIcon} />150 participant video meetings + recording</li>
              <li><FaCheckCircle className={styles.CheckIcon} />2 TB cloud storage per user</li>
              <li><FaCheckCircle className={styles.CheckIcon} />Advanced security controls</li>
              <li><FaCheckCircle className={styles.CheckIcon} />Enhanced collaboration tools</li>
            </ul>
          </div>
          </div>
          <div className="plans-details-text plans-details-text-bottom">
            <button type="button" className="buy-now" data-bs-toggle="modal" data-bs-target="#exampleModal">Inquiry Now</button>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
        <div className="plan-box workspace-height d-flex flex-column justify-content-between">
          <div>
          <div className="best-value">
            <h3 className="div-text mb-0 weight-Regular">Business Plus</h3>
            <p className="mb-0">Suggested for established organizations</p>
          </div>
          <div className="plans-details">
            <div className="plans-details-text">
              <h4 className="div-title mb-0 weight-SemiBold">₹20400</h4>
              <span className="extra-small-text d-block mb-0">User / Year</span>
            </div>
            <div className="gst-bg"><p className="small-text renews">GST 18% Additional</p></div>
            <ul className="plans-details-list">
              <li><FaCheckCircle className={styles.CheckIcon} />Advanced email security &amp; retention</li>
              <li><FaCheckCircle className={styles.CheckIcon} /><strong>500</strong> participant video meetings + attendance tracking</li>
              <li><FaCheckCircle className={styles.CheckIcon} /><strong>5 TB</strong> cloud storage per user</li>
              <li><FaCheckCircle className={styles.CheckIcon} />Endpoint management &amp; advanced compliance</li>
              <li><FaCheckCircle className={styles.CheckIcon} />Priority support</li>
            </ul>
          </div>
          </div>
          <div className="plans-details-text plans-details-text-bottom">
              <button type="button" className="buy-now" data-bs-toggle="modal" data-bs-target="#exampleModal">Inquiry Now</button>
            </div>
        </div>
      </div>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
        <div className="plan-box workspace-height d-flex flex-column justify-content-between">
          <div>
            <div className="best-value">
            <h3 className="div-text mb-0 weight-Regular">Enterprise</h3>
            <p className="mb-0">Powered for large-scale companies </p>
          </div>
          <div className="plans-details">
            <div className="plans-details-text">
              <h3 className="div-sub-title mb-0 weight-SemiBold">Contact sales for pricing</h3>
            </div>
            <div className="gst-bg"><p className="small-text renews">GST 18% Additional</p></div>
            <ul className="plans-details-list">
              <li><FaCheckCircle className={styles.CheckIcon} />Unlimited storage (as per policy)</li>
              <li><FaCheckCircle className={styles.CheckIcon} />Enterprise-grade security &amp; compliance</li>
              <li><FaCheckCircle className={styles.CheckIcon} />Advanced DLP, encryption &amp; access controls</li>
              <li><FaCheckCircle className={styles.CheckIcon} />Large meetings with live streaming</li>
              <li><FaCheckCircle className={styles.CheckIcon} />Premium support &amp; account management</li>
            </ul>
          </div>
          </div>
          <div className="plans-details-text plans-details-text-bottom">
              <button type="button" className="buy-now" data-bs-toggle="modal" data-bs-target="#exampleModal">Inquiry Now</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default WorkspacePlan
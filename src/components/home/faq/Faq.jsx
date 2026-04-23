import React, { useState } from "react";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import styles from "@/components/home/faq/Faq.module.css";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const FAQ_DATA = [
    {
      question: "What is Cloud Business Email Hosting Service?",
      answer:
        "Tizzy Cloud Email Hosting is a service setup on Cloud Computing Environment. Cloud enables high availability or uptime of service along with safety and security of stored data. Backup and disaster recovery is very fast on Cloud servers.",
    },
    {
      question: "What is Tizzy®Mail?",
      answer:
        "Tizzy®Mail is a Cloud Business Email Hosting Solution provided by Tizzy®Cloud. It is hosted on the most advanced Cloud Computing Infrastructure of the world.",
    },
    {
      question: "We have not heard about Tizzy®Mail so How old is Tizzy®Mail?",
      answer:
        "Tizzy®Mail has a consistent growth record of more than 7 years. We have thousands of email users comprising of small and big corporate companies.",
    },
    {
      question: "How do we migrate to Tizzy®Mail?",
      answer:
        "Migrating to Tizzy® Mail is very easy. Our technical support specialist can help you in migrating your email services or email data to Tizzy®Mail.",
    },
    {
      question: "How to renew the services next year?",
      answer:
        "You will get a daily email notification on your registered email address 7 days prior to the expiry date. You can reply to the email and make payment as per the invoice to process the renewal.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section position-relative pt-100 pb-100">
      <div className="container">
        <div className="row mb-80 justify-content-center">
          <div className="col-xl-8 col-lg-8 col-md-8 col-12">
            <div className="faq-title text-center">
              <h2 className="title mb-2">Frequently Asked Questions</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-xxl-8 col-lg-10 col-md-12">
            <div className="accordion faq-accordion">
              {FAQ_DATA.map((faq, i) => (
                <div className="accordion-item" key={i}>
                  <h2 className="accordion-header">
                    <button
                      type="button"
                      className={`accordion-button d-flex justify-content-between align-items-center ${
                        activeIndex === i ? "" : "collapsed"
                      }`}
                      style={{ borderRadius: "20px" }}
                      onClick={() => toggleFAQ(i)}
                    >
                      <span>{faq.question}</span>

                      <span className="faq-arrow">
                        <FiArrowRight
                          color={
                            activeIndex === i
                              ? "var(--color-ffffff)"
                              : "var(--color-1e58b4)"
                          }
                          className={activeIndex === i ? "rotate" : ""}
                        />
                      </span>
                    </button>
                  </h2>

                  <div
                    className={`accordion-collapse collapse ${
                      activeIndex === i ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      <p className="mb-0">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

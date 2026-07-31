import { storeWrapper } from "@/redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import Aos from "aos";
import { FaArrowUp } from "react-icons/fa";
import { SlEnvolope } from "react-icons/sl";
import EnquiryForm from "@/components/enquiry-form/EnquiryForm";

function InquiryButton({ onClick }) {
  return (
    <button type="button" id="inquiryBtn" className="inquiry-sticky-btn" onClick={onClick}>
      <span className="inquiry-icon">
        <SlEnvolope />
      </span>{" "}
      Inquiry Now
    </button>
  );
}

function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      className="back-to-top-btn"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to Top"
    >
      <FaArrowUp />
    </button>
  );
}

export default function App({ Component, pageProps, ...rest }) {
  const { store } = storeWrapper.useWrappedStore(rest);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <InquiryButton onClick={() => setShowEnquiryForm(true)} />
      <BackToTopButton />
      <EnquiryForm show={showEnquiryForm} onClose={() => setShowEnquiryForm(false)} />
      <style jsx global>{`
        .inquiry-sticky-btn {
          z-index: 9999;
          color: #fff;
          border: none;
          outline: none;
          padding: 12px 16px;
        }
        .inquiry-sticky-btn:hover {
          background: #32a953;
          color: #fff;
        }
        .inquiry-icon {
          display: flex;
          align-items: center;
          font-size: 18px;
        }
        @media (max-width: 500px) {
          .inquiry-sticky-btn {
            bottom: 18px;
            left: 18px;
            padding: 10px 16px;
            font-size: 14px;
          }
        }

        .back-to-top-btn {
          position: fixed;
          bottom: 20px;
          right: 10px;
          z-index: 9999;
          background: black;
          color: #fff;
          border: none;
          outline: none;
          padding: 12px 16px;
          border-radius: 50%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
          cursor: pointer;
          transition: background 0.2s;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
        }
        .back-to-top-btn:hover {
          background: rgb(34, 66, 102);
          color: #fff;
        }
        @media (max-width: 500px) {
          .back-to-top-btn {
            bottom: 18px;
            right: 18px;
            padding: 10px 13px;
            font-size: 20px;
            height: 45px;
            width: 45px;
          }
        }
      `}</style>
    </Provider>
  );
}
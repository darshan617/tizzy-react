import styles from "@/components/tizzy-mail/web-mail-feature/WebMailFeature.module.css";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import smartEmail from "@/assets/images/smart-email.png";
import calendar from "@/assets/images/calendar.png";
import shield from "@/assets/images/shield.png";

const features = [
  {
    icon: smartEmail,
    alt: "smart email",
    title: "Smart Email Experience",
    items: [
      "Fast & fully indexed search",
      "Drag & drop emails",
      "Separate compose & preview windows",
    ],
    aosDuration: 600,
  },
  {
    icon: calendar,
    alt: "calendar",
    title: "Contacts & Calendar",
    items: [
      "Personal contacts & groups",
      "Calendar, tasks & reminders",
      "Appointment scheduling",
    ],
    aosDuration: 800,
  },
  {
    icon: shield,
    alt: "shield",
    title: "Security & Control",
    items: [
      "Spam rules & blacklist",
      "Password recovery",
      "Mailbox & access control",
    ],
    aosDuration: 1000,
  },
];

const WebMailFeature = () => {
  return (
    <section className="data-backup-section hosting-plans-section position-relative pt-100 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 col-md-12 col-12">
            <div className="workspace-plan-title text-center">
              <h2
                className="div-sub-title aos-init aos-animate"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                Powerful webmail features for productivity
              </h2>
              <p
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="aos-init aos-animate"
              >
                Discover a full set of powerful features designed to enhance
                your email, contacts, and scheduling experience.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-50">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="col-xl-4 col-lg-4 col-md-4 col-12 data-backup-bottom aos-init aos-animate"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration={feature.aosDuration}
            >
              <div className="data-backup-box">
                <Image
                  src={feature.icon}
                  alt={feature.alt}
                  width={50}
                  height={50}
                />
                <h3 className="div-text">{feature.title}</h3>
                <ul className="data-backup-list">
                  {feature.items.map((item, i) => (
                    <li key={i}>
                      <FaCheckCircle
                        size={16}
                        className={`${styles.CheckIcon} me-2`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebMailFeature;

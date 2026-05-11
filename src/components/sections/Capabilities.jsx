import "./Capabilities.css";
import { motion } from "framer-motion";

const iconAlert = (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7 22L11 14.5L3 13.5L15 2H17L13 9.5L21 10.5L9 22H7ZM12.55 15.825L16.575 11.975L9.85 11.125L11.425 8.2L7.425 12.05L14.125 12.875L12.55 15.825Z"
            fill="#64748B"
        />
    </svg>
);
const iconSimulation = (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.5 18C6.4 18 5.45833 17.6083 4.675 16.825C3.89167 16.0417 3.5 15.1 3.5 14V9.925C3.5 9.075 3.76667 8.32917 4.3 7.6875C4.83333 7.04583 5.51667 6.65 6.35 6.5C7.3 6.31667 8.24167 6.1875 9.175 6.1125C10.1083 6.0375 11.05 6 12 6C12.95 6 13.8958 6.0375 14.8375 6.1125C15.7792 6.1875 16.7167 6.31667 17.65 6.5C18.4833 6.66667 19.1667 7.06667 19.7 7.7C20.2333 8.33333 20.5 9.075 20.5 9.925V14C20.5 15.1 20.1083 16.0417 19.325 16.825C18.5417 17.6083 17.6 18 16.5 18H15.5C15.2833 18 15.0667 17.9875 14.85 17.9625C14.6333 17.9375 14.425 17.8833 14.225 17.8L12.625 17.25C12.425 17.1667 12.2167 17.125 12 17.125C11.7833 17.125 11.575 17.1667 11.375 17.25L9.775 17.8C9.575 17.8833 9.36667 17.9375 9.15 17.9625C8.93333 17.9875 8.71667 18 8.5 18H7.5ZM7.5 16H8.5C8.61667 16 8.72917 15.9917 8.8375 15.975C8.94583 15.9583 9.05 15.9333 9.15 15.9C9.63333 15.75 10.1042 15.5917 10.5625 15.425C11.0208 15.2583 11.5 15.175 12 15.175C12.5 15.175 12.9833 15.2542 13.45 15.4125C13.9167 15.5708 14.3833 15.7333 14.85 15.9C14.95 15.9333 15.0542 15.9583 15.1625 15.975C15.2708 15.9917 15.3833 16 15.5 16H16.5C17.05 16 17.5208 15.8042 17.9125 15.4125C18.3042 15.0208 18.5 14.55 18.5 14V9.925C18.5 9.55833 18.3833 9.24167 18.15 8.975C17.9167 8.70833 17.625 8.53333 17.275 8.45C16.4083 8.26667 15.5375 8.14583 14.6625 8.0875C13.7875 8.02917 12.9 8 12 8C11.1 8 10.2167 8.03333 9.35 8.1C8.48333 8.16667 7.60833 8.28333 6.725 8.45C6.375 8.51667 6.08333 8.6875 5.85 8.9625C5.61667 9.2375 5.5 9.55833 5.5 9.925V14C5.5 14.55 5.69583 15.0208 6.0875 15.4125C6.47917 15.8042 6.95 16 7.5 16ZM1 14V10H2.5V14H1ZM21.5 14V10H23V14H21.5Z"
            fill="#64748B"
        />
    </svg>
);
const iconReport = (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13 11H19.95C19.7 9.16667 18.9375 7.6125 17.6625 6.3375C16.3875 5.0625 14.8333 4.3 13 4.05V11ZM11 19.95V4.05C8.98333 4.3 7.3125 5.17917 5.9875 6.6875C4.6625 8.19583 4 9.96667 4 12C4 14.0333 4.6625 15.8042 5.9875 17.3125C7.3125 18.8208 8.98333 19.7 11 19.95ZM13 19.95C14.8333 19.7167 16.3917 18.9583 17.675 17.675C18.9583 16.3917 19.7167 14.8333 19.95 13H13V19.95ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6792 2.2625 15.8875 2.7875C17.0958 3.3125 18.1542 4.02917 19.0625 4.9375C19.9708 5.84583 20.6875 6.90417 21.2125 8.1125C21.7375 9.32083 22 10.6167 22 12C22 13.3667 21.7375 14.6583 21.2125 15.875C20.6875 17.0917 19.975 18.1542 19.075 19.0625C18.175 19.9708 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"
            fill="#64748B"
        />
    </svg>
);
const iconPrivacy = (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10.5 15H13.5L12.925 11.775C13.2583 11.6083 13.5208 11.3667 13.7125 11.05C13.9042 10.7333 14 10.3833 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.3833 10.0958 10.7333 10.2875 11.05C10.4792 11.3667 10.7417 11.6083 11.075 11.775L10.5 15ZM12 22C9.68333 21.4167 7.77083 20.0875 6.2625 18.0125C4.75417 15.9375 4 13.6333 4 11.1V5L12 2L20 5V11.1C20 13.6333 19.2458 15.9375 17.7375 18.0125C16.2292 20.0875 14.3167 21.4167 12 22ZM12 19.9C13.7333 19.35 15.1667 18.25 16.3 16.6C17.4333 14.95 18 13.1167 18 11.1V6.375L12 4.125L6 6.375V11.1C6 13.1167 6.56667 14.95 7.7 16.6C8.83333 18.25 10.2667 19.35 12 19.9Z"
            fill="#64748B"
        />
    </svg>
);
const capabilities = [
    {
        id: "alerts",
        title: "Real-Time Alerts",
        description:
            "Supervisor receives an alert the moment an operator crosses the cognitive fatigue threshold",
        icon: iconAlert,
    },
    {
        id: "simulation",
        title: "Simulation Integration",
        description: "Direct API to leading mil-sim and training platforms.",
        icon: iconSimulation,
    },
    {
        id: "compliance",
        title: "Compliance-Ready Reports",
        description:
            "Auto-generated session reports formatted for NATO STANAG, ISO 13485 and GDPR",
        icon: iconReport,
    },
    {
        id: "privacy",
        title: "Data Privacy & Security",
        description:
            "On-premise deployment option. All data stays within your network.",
        icon: iconPrivacy,
    },
];

/* Partner logo */
const partners = [
    {
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777557282/Google_mlbxsi.png",
        alt: "Google",
    },
    {
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777557284/Nvidia_jqsneo.png",
        alt: "NVIDIA Inception Program",
    },
    {
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777557278/Aws_l8beh7.png",
        alt: "AWS Startups",
    },
    {
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777557289/Urban_cnagcq.png",
        alt: "Urban Mobility",
    },
    {
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777557280/Eurostars_nnfzuv.png",
        alt: "Eurostars",
    },
    {
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777557285/Startup_grzguv.png",
        alt: "Startup Sweden",
    },
    {
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777557287/Stockholm_dnvzk1.png",
        alt: "European Institute of Innovation & Entrepreneurship",
    },
    {
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777557257/Almi_zsunnf.png",
        alt: "AIMI",
    },
];

function Capabilities() {
    return (
        <section className="capabilities">
            <div className="capabilities__inner">
                {/* Label bar */}
                <motion.div
                    className="capabilities__label-bar"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    <span className="capabilities__label">
                        TURN DATA INTO DECISION
                    </span>
                    <span className="capabilities__label">/ SEE DEEPER</span>
                </motion.div>

                <div className="capabilities__container">
                    {/*sticky heading */}
                    <div className="capabilities__sticky">
                        <motion.h2
                            className="capabilities__title"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.3,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}>
                            Platform Capabilities
                        </motion.h2>
                        <motion.p
                            className="capabilities__subtitle"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.55,
                                delay: 0.4,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}>
                            Everything you need to monitor, understand and act
                            on cognitive performance
                        </motion.p>
                    </div>

                    {/* Right cards */}
                    <div className="capabilities__right">
                        <div className="capabilities__cards">
                            {capabilities.map((cap) => (
                                <div
                                    key={cap.id}
                                    className="capabilities__card">
                                    <h3 className="capabilities__card-title">
                                        {cap.title}
                                    </h3>
                                    <div className="capabilities__card-footer">
                                        <div className="capabilities__card-icon">
                                            {cap.icon}
                                        </div>
                                        <p className="capabilities__card-desc">
                                            {cap.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Backed by Partners */}
                        <div className="capabilities__partners-bar">
                            <span className="capabilities__partners-label">
                                BACKED BY PARTNERS
                            </span>
                        </div>

                        {/* logo */}
                        <div className="capabilities__logos">
                            {partners.map((p) => (
                                <div className="capabilities__logo-cell">
                                    <img
                                        src={p.img}
                                        alt={p.alt}
                                        className="capabilities__logo"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Capabilities;

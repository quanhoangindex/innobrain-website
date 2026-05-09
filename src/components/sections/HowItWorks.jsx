import "./HowItWorks.css";
import { motion } from "framer-motion";

const steps = [
    {
        number: 1,
        title: "Equip",
        description:
            "Fit a lightweight EEG headset before any session — simulation, training, or live operations.",
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777445020/Equip_xsotij.png",
    },
    {
        number: 2,
        title: "Stream",
        description:
            "The moment a session begins, raw EEG data flows continuously to the InnoBrain dashboard in real time.",
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777445019/Stream_zit174.png",
        alt: "Stream InnoBrain",
    },
    {
        number: 3,
        title: "Analyse",
        description:
            "InnoBrain's AI translates brainwave data into readable metrics — cognitive load, stress, vigilance and fatigue.",
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777445022/Analyze_baagzi.png",
    },
    {
        number: 4,
        title: "Act",
        description:
            "When a threshold is crossed, supervisors receive an immediate alert and a structured post-session report.",
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777445021/Act_sfhjyu.png",
    },
];

function HowItWorks() {
    return (
        <section className="hiw">
            <div className="hiw__inner">
                {/* Label bar */}
                <motion.div
                    className="hiw__label-bar"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    <span className="hiw__label">
                        FROM SIGNAL TO DECISIONS IN MINUTES
                    </span>
                    <span className="hiw__label">/ CLOUD-BASED</span>
                </motion.div>

                {/* Heading */}
                <div className="hiw__heading">
                    <motion.h2
                        className="hiw__title"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.55,
                            delay: 0.5,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}>
                        How InnoBrain works?
                    </motion.h2>
                    <motion.p
                        className="hiw__subtitle"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.65,
                            delay: 0.56,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}>
                        A lightweight EEG headset, a live dashboard, and a clear
                        action — that's the entire loop from data to decision.
                    </motion.p>
                </div>

                {/* Stripe | Steps | Stripe */}
                <div className="hiw__grid-wrapper">
                    <div className="hiw__stripe" aria-hidden="true" />

                    {/* Step rows */}
                    <div className="hiw__steps">
                        {steps.map((step) => (
                            <div key={step.number} className="hiw__row">
                                {/* Left — text panel */}
                                <div className="hiw__text-panel">
                                    {/* Vertical timeline line + numbered badge */}
                                    <motion.div
                                        className="hiw__timeline"
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.45,
                                            delay: 0.4,
                                            ease: "easeOut",
                                        }}
                                        viewport={{ once: true }}>
                                        <div className="hiw__timeline-line hiw__timeline-line--top" />
                                        <div className="hiw__badge">
                                            {step.number}
                                        </div>
                                        <div className="hiw__timeline-line hiw__timeline-line--bottom" />
                                    </motion.div>

                                    {/* Content */}
                                    <div className="hiw__content">
                                        <motion.span
                                            className="hiw__step-label"
                                            initial={{ opacity: 0, y: 24 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.45,
                                                delay: 0.4,
                                                ease: "easeOut",
                                            }}
                                            viewport={{ once: true }}>
                                            STEP
                                        </motion.span>
                                        <div className="hiw__copy">
                                            <motion.h3
                                                className="hiw__step-title"
                                                initial={{ opacity: 0, y: 24 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    delay: 0.4,
                                                    ease: "easeOut",
                                                }}
                                                viewport={{ once: true }}>
                                                {step.title}
                                            </motion.h3>
                                            <motion.p
                                                className="hiw__step-desc"
                                                initial={{ opacity: 0, y: 24 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                }}
                                                transition={{
                                                    duration: 0.55,
                                                    delay: 0.4,
                                                    ease: "easeOut",
                                                }}
                                                viewport={{ once: true }}>
                                                {step.description}
                                            </motion.p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right — illustration */}
                                <div className="hiw__image-panel">
                                    <motion.img
                                        src={step.img}
                                        alt={step.title}
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.65,
                                            delay: 0.6,
                                            ease: "easeOut",
                                        }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right stripe */}
                    <div className="hiw__stripe" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;

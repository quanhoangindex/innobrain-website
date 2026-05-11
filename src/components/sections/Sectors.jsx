import {
    CirclePile,
    Drone,
    PlaneTakeoff,
    Package,
    BrainCircuit,
    CircleUser,
} from "lucide-react";
import "./Sectors.css";
import { motion } from "framer-motion";

const sectors = [
    {
        id: "mobility",
        icon: <CirclePile size={20} />,
        title: "Mobility",
        description:
            "Real-time operator-state metrics for early warnings and adaptive assistance validation.",
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777381987/Mobility_xbt6up.png",
    },
    {
        id: "training",
        icon: <Drone size={20} />,
        title: "Training & Simulation",
        description:
            "Objective cognitive metrics to personalize training and verify effectiveness.",
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777381988/Simulation_otibnu.png",
    },
    {
        id: "aviation",
        icon: <PlaneTakeoff size={20} />,
        title: "Aviation",
        description:
            "Crew-state indicators for fatigue management, debriefing, and mission planning.",
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777381987/Aviation_ljy5yv.png",
    },
    {
        id: "manufacturing",
        icon: <Package size={20} />,
        title: "Manufacturing & Logistics",
        description:
            "Human-state analytics for staffing optimization and proactive safety.",
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777381987/Logicstic_c8hpqi.png",
    },
    {
        id: "cognitive",
        icon: <BrainCircuit size={20} />,
        title: "Cognitive Augmentation",
        description:
            "Real-time cognitive technologies that enhance decision-making and attention (e.g., Esports).",
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777381987/Cognitive_athth8.png",
    },
    {
        id: "human",
        icon: <CircleUser size={20} />,
        title: "HMI, Human Factors & User Research",
        description:
            "Objective human-state data to inform interface design and user behavior analysis.",
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777381988/UX_xer7hl.png",
    },
];

function Sectors() {
    return (
        <section className="sectors">
            <div className="sectors__inner">
                {/* Top label bar */}
                <motion.div className="sectors__label-bar">
                    <motion.span
                        className="sectors__label"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}>
                        POWERFUL PLATFORM
                    </motion.span>
                    <motion.span
                        className="sectors__label"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}>
                        / DATA · BUSINESS
                    </motion.span>
                </motion.div>

                {/* Heading */}
                <div className="sectors__heading">
                    <motion.h2
                        className="sectors__title"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.55,
                            delay: 0.45,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}>
                        Who is InnoBrain for?
                    </motion.h2>
                    <motion.p
                        className="sectors__subtitle"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.65,
                            delay: 0.65,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}>
                        We build for teams where human performance is
                        mission-critical.
                    </motion.p>
                </div>

                {/* Grid row: stripe | cards | stripe */}
                <div className="sectors__grid-wrapper">
                    {/* Left decorative stripe column */}
                    <div className="sectors__stripe" aria-hidden="true" />

                    {/* Sector cards */}
                    <div className="sectors__grid">
                        {sectors.map((sector) => (
                            <motion.div
                                key={sector.id}
                                className="sectors__card">
                                {/* Background image — fades in on hover */}
                                <div className="sectors__card-bg">
                                    <img src={sector.img} alt="" />
                                    <div className="sectors__card-overlay" />
                                </div>

                                {/* Icon */}
                                <motion.div className="sectors__card-icon">
                                    {sector.icon}
                                </motion.div>

                                {/* Text */}
                                <motion.div className="sectors__card-text">
                                    <h3 className="sectors__card-title">
                                        {sector.title}
                                    </h3>
                                    <p className="sectors__card-desc">
                                        {sector.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right decorative stripe column */}
                    <div className="sectors__stripe" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}

export default Sectors;

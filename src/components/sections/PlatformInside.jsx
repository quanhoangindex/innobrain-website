import { Radio, TrendingUpDown, BellRing } from "lucide-react";
import DotGrid from "../effects/DotGrid";
import "./PlatformInside.css";
import { motion } from "framer-motion";

const IMG_DASHBOARD =
    "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777902781/Product_Inside_g7lmvd.png";

const features = [
    {
        id: "live",
        icon: Radio,
        color: "var(--status-success)",
        tag: "Live",
        title: "Live readiness score per operator",
        desc: "Updated every 2 seconds from EEG stream.",
    },
    {
        id: "analytics",
        icon: TrendingUpDown,
        color: "var(--purple-600)",
        tag: "Analytics",
        title: "Workload trend graph",
        desc: "Spot fatigue curves over a mission or shift.",
    },
    {
        id: "alerts",
        icon: BellRing,
        color: "var(--status-warning)",
        tag: "Alerts",
        title: "Alert threshold control",
        desc: "Real-time cognitive technologies that enhance decision-making and attention (e.g., Esports).",
    },
];

function PlatformInside() {
    return (
        <section className="inside">
            <div className="inside__inner">
                <div className="inside__heading-wrap">
                    <motion.div
                        className="inside__heading"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.22,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}>
                        <h2 className="inside__title">
                            A command view of your team's cognitive state
                        </h2>
                        <p className="inside__subtitle">Inside the platform</p>
                    </motion.div>
                </div>

                <div className="inside__grid">
                    <div
                        className="inside__stripe inside__stripe--left"
                        aria-hidden="true"
                    />

                    <div className="inside__body">
                        <div className="inside__features">
                            {features.map((f) => {
                                const Icon = f.icon;
                                return (
                                    <div key={f.id} className="inside__item">
                                        <motion.div
                                            className="inside__tag"
                                            initial={{ opacity: 0, y: 24 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.55,
                                                delay: 0.4,
                                                ease: "easeOut",
                                            }}
                                            viewport={{ once: true }}>
                                            <Icon
                                                size={16}
                                                color={f.color}
                                                strokeWidth={1.75}
                                            />
                                            <span>{f.tag}</span>
                                        </motion.div>
                                        <motion.div
                                            className="inside__item-text"
                                            initial={{ opacity: 0, y: 24 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 0.5,
                                                ease: "easeOut",
                                            }}
                                            viewport={{ once: true }}>
                                            <p className="inside__item-title">
                                                {f.title}
                                            </p>
                                            <p className="inside__item-desc">
                                                {f.desc}
                                            </p>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="inside__visual">
                            <div
                                className="inside__visual-bg"
                                aria-hidden="true">
                                <DotGrid
                                    dotSize={3}
                                    gap={15}
                                    baseColor="#dedede"
                                    activeColor="#2563EB"
                                    proximity={120}
                                    shockRadius={250}
                                    shockStrength={5}
                                    resistance={750}
                                    returnDuration={1.5}
                                />
                            </div>
                            <motion.img
                                src={IMG_DASHBOARD}
                                alt="InnoBrain platform dashboard"
                                className="inside__visual-img"
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.22,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                            />
                        </div>
                    </div>

                    <div
                        className="inside__stripe inside__stripe--right"
                        aria-hidden="true"
                    />
                </div>
            </div>
        </section>
    );
}

export default PlatformInside;

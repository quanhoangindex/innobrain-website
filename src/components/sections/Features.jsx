import { Sparkles, Focus, Cloud, DatabaseZap } from "lucide-react";
import "./Features.css";

/* Background chart image */
const IMG_BG =
    "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777899920/Distinctive_Features_fwb9bq.png";

const features = [
    {
        id: "ai",
        icon: Sparkles,
        iconBg: "var(--brand-accent-subtle)",
        iconColor: "var(--brand-accent)",
        title: "AI-enabled",
        desc: "Our platform uses advanced AI to interpret brain signals and translate them into actionable insights about cognitive states",
    },
    {
        id: "realtime",
        icon: Focus,
        iconBg: "var(--brand-primary-subtle)",
        iconColor: "var(--brand-primary)",
        title: "Real-time",
        desc: "Get instant feedback on cognitive states as they happen, enabling real-time decision-making to enhance safety, performance, and responsiveness.",
    },
    {
        id: "cloud",
        icon: Cloud,
        iconBg: "var(--brand-primary-subtle)",
        iconColor: "var(--brand-primary)",
        title: "Cloud-based",
        desc: "Access your data and insights from anywhere. Our cloud platform ensures secure, scalable, and seamless integration across teams and locations.",
    },
    {
        id: "hardware",
        icon: DatabaseZap,
        iconBg: "var(--brand-primary-subtle)",
        iconColor: "var(--brand-primary)",
        title: "Hardware Agnostic",
        desc: "Our technology works with a wide range of EEG headsets, so you're free to choose the device that best fits your need",
    },
];

function FeatureCard({ feature, corners }) {
    const { icon: Icon, iconBg, iconColor, title, desc } = feature;
    return (
        <div className="features__card">
            {corners.map((pos) => (
                <span
                    key={pos}
                    className={`features__corner features__corner--${pos}`}
                    aria-hidden="true"
                />
            ))}
            <div className="features__card-icon" style={{ background: iconBg }}>
                <Icon size={20} color={iconColor} strokeWidth={2} />
            </div>
            <div className="features__card-body">
                <p className="features__card-title">{title}</p>
                <p className="features__card-desc">{desc}</p>
            </div>
        </div>
    );
}

function Features() {
    return (
        <section className="features">
            <div className="features__inner">
                {/* Label bar */}
                <div className="features__label-bar">
                    <span className="features__label">
                        WHAT MAKES OUR PLATFORM STAND OUT
                    </span>
                    <span className="features__label">/ IDENTITY</span>
                </div>

                <div className="features__container">
                    <img
                        src={IMG_BG}
                        alt=""
                        className="features__bg-img"
                        aria-hidden="true"
                    />

                    <div className="features__heading">
                        <h2 className="features__title">
                            Distinctive Features
                        </h2>
                        <p className="features__subtitle">
                            Built for environments
                            <br />
                            where failure isn't an option
                        </p>
                    </div>

                    <div className="features__grid-wrap">
                        <div
                            className="features__stripe features__stripe--left"
                            aria-hidden="true"
                        />
                        <div
                            className="features__stripe features__stripe--right"
                            aria-hidden="true"
                        />

                        <div className="features__cards">
                            <FeatureCard
                                feature={features[0]}
                                corners={["tl"]}
                            />
                            <FeatureCard
                                feature={features[1]}
                                corners={["tl", "tr"]}
                            />
                            <FeatureCard
                                feature={features[2]}
                                corners={["tl", "bl"]}
                            />
                            <FeatureCard
                                feature={features[3]}
                                corners={["tl", "tr", "bl", "br"]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;

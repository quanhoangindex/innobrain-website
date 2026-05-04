import "./HomeStats.css";
import CountUp from "../effects/CountUp";

const partners = [
    {
        id: "nvidia",
        alt: "NVIDIA",
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777498987/Nvidia_rcawdv.png",
    },
    {
        id: "google",
        alt: "Google",
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777498986/Google_z6nflv.png",
    },
    {
        id: "aws",
        alt: "AWS",
        img: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777498985/Aws_lswtll.png",
    },
];

const stats = [
    {
        id: "funding",
        prefix: "SEK ",
        to: 5.1,
        decimals: 1,
        suffix: "M",
        description: "Government R&D funding via Vinnova",
    },
    {
        id: "projects",
        prefix: "",
        to: 8,
        decimals: 0,
        suffix: "",
        description:
            "Research projects validated across aviation, road & medical",
    },
    {
        id: "years",
        prefix: "",
        to: 10,
        decimals: 0,
        suffix: "+",
        description: "Years of applied neurotechnology research",
    },
    {
        id: "awards",
        prefix: "",
        to: 2,
        decimals: 0,
        suffix: "",
        description: "International awards — SKAPA Prize & IVA Top 100",
    },
];

const IMG_GRADIENT =
    "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777499085/Gradient_owfun9.png";

function HomeStats() {
    return (
        <section className="stats">
            <div className="stats__inner">
                <div className="stats__copy">
                    <div className="stats__heading">
                        <h2 className="stats__title">
                            Backed by a decade of funded research
                        </h2>
                        <p className="stats__subtitle">
                            Validated by Sweden's national innovation agency and{" "}
                            <br />
                            trusted by aerospace, defence, and transport
                            operators.
                        </p>
                    </div>

                    {/* Tech */}
                    <div className="stats__partners-wrapper">
                        <div className="stats__partners">
                            {/* Corner */}
                            <span
                                className="stats__corner stats__corner--tl"
                                aria-hidden="true"
                            />
                            <span
                                className="stats__corner stats__corner--tr"
                                aria-hidden="true"
                            />
                            <span
                                className="stats__corner stats__corner--bl"
                                aria-hidden="true"
                            />
                            <span
                                className="stats__corner stats__corner--br"
                                aria-hidden="true"
                            />

                            <span className="stats__partners-label">
                                Technology Partners
                            </span>

                            <div className="stats__logos">
                                {partners.map((p) => (
                                    <img
                                        key={p.id}
                                        src={p.img}
                                        alt={p.alt}
                                        className="stats__logo"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stat cards */}
                <div className="stats__cards">
                    {stats.map((stat) => (
                        <div key={stat.id} className="stats__card">
                            <div className="stats__card-value">
                                {stat.prefix && <span>{stat.prefix}</span>}
                                <CountUp
                                    from={0}
                                    to={stat.to}
                                    decimals={stat.decimals}
                                    duration={2.5}
                                    delay={0}
                                />
                                {stat.suffix && <span>{stat.suffix}</span>}
                            </div>
                            <p className="stats__card-desc">
                                {stat.description}
                            </p>

                            {/* Blue gradient */}
                            <img
                                src={IMG_GRADIENT}
                                alt=""
                                className="stats__card-glow"
                                aria-hidden="true"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HomeStats;

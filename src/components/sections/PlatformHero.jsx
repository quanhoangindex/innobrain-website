import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { ArrowRight, ArrowDownRight, Airplay, Play } from "lucide-react";
import "./PlatformHero.css";
import DotGrid from "../effects/DotGrid";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
    // animation reference from framer-motion
};

const IMG_TRUSTED =
    "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777846473/TrustedAI_cwi9ri.png";

const IMG_IVA =
    "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777846472/IvaTop100_w8bnrc.png";
const IMG_SKAPA =
    "https://res.cloudinary.com/dp90xtgcp/image/upload/v1777846473/SkapaPrize_d8safy.png";

const VIDEO_SRC =
    "https://innobraintech.com/wp-content/uploads/2025/08/Platform-Intro-New-2025.mp4";

function PlatformHero() {
    return (
        <>
            <section className="platform-hero">
                <div className="platform-hero__inner">
                    {/* Dotted grid*/}
                    <div className="platform-hero__bg">
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

                    <div className="platform-hero__content">
                        <motion.div
                            className="platform-hero__tag"
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            transition={{
                                duration: 0.5,
                                delay: 0.1,
                                ease: "easeOut",
                            }}>
                            <Airplay
                                size={12}
                                strokeWidth={3}
                                color="var(--brand-primary)"
                            />
                            <span>InnoBrain Platform</span>
                        </motion.div>

                        {/* Heading + subtext */}
                        <motion.div
                            className="platform-hero__text"
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            transition={{
                                duration: 0.55,
                                delay: 0.22,
                                ease: "easeOut",
                            }}>
                            <h1 className="platform-hero__title">
                                Turn brain data
                                <br />
                                into operational decisions
                                <br />
                                in real time.
                            </h1>
                            <p className="platform-hero__desc">
                                InnoBrain streams and analyses cognitive state
                                data from brain-sensing headsets your team
                                already uses — giving commanders, logistics
                                leads, and safety officers a live window into
                                operator readiness.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            transition={{
                                duration: 0.65,
                                delay: 0.4,
                                ease: "easeOut",
                            }}>
                            <Link to="/contact">
                                <Button iconTrailing={<ArrowRight size={16} />}>
                                    Book a Free Demo
                                </Button>
                            </Link>
                        </motion.div>

                        {/* Awards & Recognition */}
                        <motion.div
                            className="platform-hero__awards-wrap"
                            variants={fadeUp}
                            initial="hidden"
                            animate="show"
                            transition={{
                                duration: 0.66,
                                delay: 0.45,
                                ease: "easeOut",
                            }}>
                            <div className="platform-hero__awards">
                                {/* Corner decorators */}
                                <span
                                    className="platform-hero__corner platform-hero__corner--tl"
                                    aria-hidden="true"
                                />
                                <span
                                    className="platform-hero__corner platform-hero__corner--tr"
                                    aria-hidden="true"
                                />
                                <span
                                    className="platform-hero__corner platform-hero__corner--bl"
                                    aria-hidden="true"
                                />
                                <span
                                    className="platform-hero__corner platform-hero__corner--br"
                                    aria-hidden="true"
                                />

                                <p className="platform-hero__awards-label">
                                    AWARDS &amp; RECOGNITION
                                </p>
                                <div className="platform-hero__awards-logos">
                                    <img
                                        src={IMG_SKAPA}
                                        alt="Skapa prize"
                                        className="platform-hero__award-img"
                                    />

                                    <img
                                        src={IMG_TRUSTED}
                                        alt="Trusted AI Start Up"
                                        className="platform-hero__award-img"
                                    />

                                    <img
                                        src={IMG_IVA}
                                        alt="Iva Top 100"
                                        className="platform-hero__award-img"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="platform-hero__scroll-hint"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}>
                            <span>SEE HOW IT WORKS</span>
                            <ArrowDownRight size={20} />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="platform-video">
                <div className="platform-video__inner">
                    <div className="platform-video__bg" aria-hidden="true" />

                    <motion.div
                        className="platform-video__float"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.55,
                            delay: 0.4,
                            ease: "easeOut", 
                        }}
                        viewport={{ once: true }}>
                        <div className="platform-video__device">
                            <a href={VIDEO_SRC}>
                                <img
                                    src="https://res.cloudinary.com/dp90xtgcp/image/upload/v1777894681/Ipad-Mockup_ywfevy.png"
                                    alt="Watch platform overview"
                                    className="platform-video__device-frame"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export default PlatformHero;

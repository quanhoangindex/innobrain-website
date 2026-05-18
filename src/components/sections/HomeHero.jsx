import "./HomeHero.css";
import { Activity } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";
import LiquidEther from "../effects/LiquidEther";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
    // animation reference from framer-motion
};

function HomeHero() {
    return (
        <section className="hero">
            <div className="hero__inner">
                <div className="hero__bg">
                    <LiquidEther
                        colors={["#E7C1FF", "#E7C1FF", "#3B82F6"]}
                        mouseForce={20}
                        cursorSize={100}
                        isViscous
                        viscous={30}
                        iterationsViscous={32}
                        iterationsPoisson={32}
                        resolution={0.3}
                        isBounce={false}
                        autoDemo
                        autoSpeed={0.5}
                        autoIntensity={2.2}
                        takeoverDuration={0.25}
                        autoResumeDelay={3000}
                        autoRampDuration={0.6}
                        color0="#93C5FD"
                        color1="#93C5FD"
                        color2="#5227FF"
                    />
                </div>
                <div className="hero__content">
                    {/* tag pill */}
                    <motion.div
                        className="hero__tag"
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                            ease: "easeOut",
                        }}>
                        <Activity
                            width={12}
                            strokeWidth={3}
                            color="var(--brand-primary)"
                        />
                        <span className="text-sm-regular">
                            Cognitive Performance Platform
                        </span>
                    </motion.div>
                    {/* Headline + Subtext */}
                    <motion.div
                        className="hero__copy"
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{
                            duration: 0.55,
                            delay: 0.22,
                            ease: "easeOut",
                        }}>
                        <h1 className="hero__title">
                            Know when your team <br />
                            hits limit before they do
                        </h1>
                        <div className="hero__subtitle text-base-regular">
                            Real-time EEG monitoring that turns cognitive load
                            into
                            <br />
                            actionable data for defence, aviation and logistics.
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero__actions"
                        variants={fadeUp}
                        initial="hidden"
                        animate="show"
                        transition={{
                            duration: 0.55,
                            delay: 0.36,
                            ease: "easeOut",
                        }}>
                        <Link to="/contact">
                            <Button
                                size="lg"
                                iconTrailing={<ArrowRight width={16} />}>
                                Book a Free Demo
                            </Button>
                        </Link>
                        <Link to="/platform">
                            <Button size="lg" variant="outline">
                                Watch overview
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Product Screenshot */}
                <motion.div
                    className="hero__product"
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    transition={{
                        duration: 0.65,
                        delay: 0.5,
                        ease: "easeOut",
                    }}>
                    <img
                        src="https://res.cloudinary.com/dp90xtgcp/image/upload/v1777311654/ProductUI_bnzhu3.png"
                        alt="hero__dashboard"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default HomeHero;

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import "./PlatformCTA.css";
import { motion } from "framer-motion";
import BlurText from "../effects/BlurText";

const IMG_EEG =
    "https://www.figma.com/api/mcp/asset/1fe66f55-7611-4095-8eaa-2608634ba390";

const handleAnimationComplete = () => {
    console.log("Animation completed!");
};
function PlatformCTA() {
    return (
        <section className="pcta">
            <div className="pcta__inner">
                <div className="pcta__wrapper">
                    <div className="pcta__row">
                        <div className="pcta__left">
                            <div className="pcta__content">
                                <BlurText
                                    text="Your team's readiness shouldn't be a guess."
                                     delay={80} stepDuration={0.2}
                                    animateBy="words"
                                    direction="top"
                                    onAnimationComplete={
                                        handleAnimationComplete
                                    }
                                    className="features__title"
                                />
                                {/* <h2 className="pcta__title">
                                    Your team's readiness shouldn't be a guess.
                                </h2> */}
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.65,
                                        delay: 0.55,
                                        ease: "easeOut",
                                    }}
                                    viewport={{ once: true }}>
                                    <Link to="/contact">
                                        <Button
                                            iconTrailing={
                                                <ArrowRight
                                                    size={16}
                                                    strokeWidth={2}
                                                />
                                            }>
                                            Book a Free Demo
                                        </Button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>

                        <div className="pcta__visual">
                            <img
                                src={IMG_EEG}
                                alt="InnoBrain platform in use"
                                className="pcta__img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PlatformCTA;

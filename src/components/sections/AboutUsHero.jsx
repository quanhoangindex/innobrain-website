import { motion } from "framer-motion";
import "./AboutUsHero.css";

const heroBg =
    "https://res.cloudinary.com/dp90xtgcp/image/upload/v1778947698/AboutUsHeroBg_zv58ns.png";

export default function AboutUsHero() {
    return (
        <section className="abouthero">
            <div className="abouthero__inner">
                <div className="abouthero__bg" aria-hidden="true">
                    <motion.img
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        src={heroBg}
                        alt=""
                        className="abouthero__bg-img"
                    />
                </div>

                <div className="abouthero__content">
                    <div className="abouthero__text">
                        <motion.h1
                            className="abouthero__title"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}>
                            Everything about Us
                        </motion.h1>

                        <motion.p
                            className="abouthero__desc"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}>
                            InnoBrain is a NeuroTech company industrializing
                            Brain Computer-Interface to increase human safety
                            and quality of life. Built on our foundational AI
                            model, we are enabling Human Cognitive Monitoring at
                            scale.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}

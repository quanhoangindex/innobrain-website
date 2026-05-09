import "./ValueProp.css";
import { MessageCircleQuestionMark } from "lucide-react";
import Button from "../ui/Button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const checkItems = [
    "Reads cognitive state in under 200ms",
    "A.I Analyze in real time",
    "Alerts supervisors before performance degrades.",
];
function ValueProp() {
    return (
        <section className="value-prop">
            <div className="value-prop__inner">
                {/* left */}
                <div className="value-prop__copy">
                    <motion.h2
                        className="value-prop__title heading-1"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}>
                        A platform that reads cognitive state from{" "}
                        <span className="eeg-tooltip-wrapper">
                            <span className="value-prop__highlight">
                                EEG hardware
                            </span>
                            <sup>
                                {" "}
                                <MessageCircleQuestionMark
                                    width={16}
                                    className="help-icon"
                                />
                            </sup>{" "}
                            <span className="eeg-tooltip text-sm-regular">
                                EEG (electroencephalography) — a non-invasive
                                headset that reads electrical activity in the
                                brain.
                            </span>
                        </span>
                        and alerts supervisors before performance fails
                    </motion.h2>

                    <div className="value-prop__cta-group">
                        {/* scroll down to How it works */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.55,
                                delay: 0.36,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}>
                            <Button size="xl">Learn how it works</Button>
                        </motion.div>
                        <motion.ul
                            className="value-prop__checklist"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.65,
                                delay: 0.5,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}>
                            {checkItems.map((item) => (
                                <li
                                    key={item}
                                    className="value-prop__check-item">
                                    <Check width={16} className="help-icon " />
                                    <span className="text-base-regular">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </motion.ul>
                    </div>
                </div>

                {/* Image */}
                <motion.div
                    className="value-prop__visual"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.65,
                        delay: 0.36,
                        ease: "easeOut",
                    }}
                    viewport={{ once: true }}>
                    <img
                        src="https://res.cloudinary.com/dp90xtgcp/image/upload/v1777371157/ValueProp_yohbds.png"
                        alt=""
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default ValueProp;

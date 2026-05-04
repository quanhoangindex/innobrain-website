import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import "./PlatformCTA.css";

const IMG_EEG =
    "https://www.figma.com/api/mcp/asset/1fe66f55-7611-4095-8eaa-2608634ba390";

function PlatformCTA() {
    return (
        <section className="pcta">
            <div className="pcta__inner">
                <div className="pcta__wrapper">
                    <div className="pcta__row">
                        <div className="pcta__left">
                            <div className="pcta__content">
                                <h2 className="pcta__title">
                                    Your team's readiness shouldn't be a guess.
                                </h2>
                                <Button
                                    iconTrailing={
                                        <ArrowRight size={16} strokeWidth={2} />
                                    }>
                                    Book a Free Demo
                                </Button>
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

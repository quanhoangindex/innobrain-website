import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Button from "../ui/Button";
import { ArrowRight, ArrowDownRight, Airplay, Play } from "lucide-react";
import "./PlatformHero.css";

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
                    <div className="platform-hero__bg" aria-hidden="true" />

                    <div className="platform-hero__content">
                        <div className="platform-hero__tag">
                            <Airplay
                                size={12}
                                strokeWidth={3}
                                color="var(--brand-primary)"
                            />
                            <span>InnoBrain Platform</span>
                        </div>

                        {/* Heading + subtext */}
                        <div className="platform-hero__text">
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
                        </div>

                        <Link to="/contact">
                            <Button iconTrailing={<ArrowRight size={16} />}>
                                Book a Free Demo
                            </Button>
                        </Link>

                        {/* Awards & Recognition */}
                        <div className="platform-hero__awards-wrap">
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
                        </div>

                        <div className="platform-hero__scroll-hint">
                            <span>SEE HOW IT WORKS</span>
                            <ArrowDownRight size={20} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="platform-video">
                <div className="platform-video__inner">
                    <div className="platform-video__bg" aria-hidden="true" />

                    <div className="platform-video__float">
                        <div className="platform-video__device">
                            <a href={VIDEO_SRC}>
                                <img
                                    src="https://res.cloudinary.com/dp90xtgcp/image/upload/v1777848092/Ipad-Mockup_jkbzj4.jpg"
                                    alt="Watch platform overview"
                                    className="platform-video__device-frame"
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PlatformHero;

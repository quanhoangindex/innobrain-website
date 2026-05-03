import { Link } from "react-router-dom";
import { ArrowRight, ArrowDownRight, Airplay } from "lucide-react";
import "./PlatformHero.css";

const IMG_SKAPA =
    "https://www.figma.com/api/mcp/asset/793b62e1-7dee-4e0e-ad1b-37f4ef1607ec";
const IMG_TRUSTED =
    "https://www.figma.com/api/mcp/asset/1b43517d-409b-4548-a99d-ef29ff0f60d6";
const IMG_IVA =
    "https://www.figma.com/api/mcp/asset/79ea84d7-f113-4dd5-805b-7636cd605cdf";

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
                            <Airplay size={12} />
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

                        <Link to="/contact" className="platform-hero__btn">
                            Book a Free Demo
                            <ArrowRight size={16} />
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
                                        alt="SKAPA Prize 2019"
                                        className="platform-hero__award-img"
                                    />
                                    <img
                                        src={IMG_TRUSTED}
                                        alt="Trusted AI Startup"
                                        className="platform-hero__award-img"
                                    />
                                    <img
                                        src={IMG_IVA}
                                        alt="IVA TOP 100"
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
                        <div className="platform-video__ipad">
                            <div
                                className="platform-video__ipad-camera"
                                aria-hidden="true"
                            />
                            <div className="platform-video__ipad-screen">
                                <video
                                    src={VIDEO_SRC}
                                    className="platform-video__video"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PlatformHero;

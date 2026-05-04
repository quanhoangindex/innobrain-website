import {
    Combine,
    GamepadDirectional,
    ShieldUser,
    TowerControl,
    Component,
} from "lucide-react";

import "./PlatformStats.css";

function IconBadge({ icon: Icon }) {
    return (
        <div className="pstats__icon-badge">
            <Icon size={24} color="#ffffff" strokeWidth={2} />
        </div>
    );
}

function PlatformStats() {
    return (
        <section className="pstats">
            <div className="pstats__inner">
                <div className="pstats__cards">
                    <div className="pstats__card">
                        <p className="pstats__value">2s</p>
                        <div className="pstats__footer">
                            <p className="pstats__desc">
                                Live update interval with real-time EEG data
                                streaming
                            </p>
                            <IconBadge icon={Combine} />
                        </div>
                    </div>

                    <div className="pstats__card">
                        <p className="pstats__value">3</p>
                        <div className="pstats__footer">
                            <div className="pstats__desc">
                                <p>
                                    Industries validated — Defense, Aviation,
                                    Esports
                                </p>
                            </div>

                            <div className="pstats__icon-cluster">
                                <IconBadge icon={GamepadDirectional} />
                                <IconBadge icon={ShieldUser} />
                                <IconBadge icon={TowerControl} />
                            </div>
                        </div>
                    </div>

                    <div className="pstats__card">
                        <p className="pstats__value">10+</p>
                        <div className="pstats__footer">
                            <p className="pstats__desc">
                                Cognitive states detected — From focus to
                                fatigue
                            </p>
                            <IconBadge icon={Component} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PlatformStats;

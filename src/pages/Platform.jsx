import PlatformHero from "../components/sections/PlatformHero";
import PlatformStats from "../components/sections/PlatformStats";
import Features from "../components/sections/Features";
import PlatformInside from "../components/sections/PlatformInside";
import PlatformAwards from "../components/sections/PlatformAwards";
import PlatformCTA from "../components/sections/PlatformCTA";
function Platform() {
    return (
        <main>
            <PlatformHero />
            <PlatformStats />
            <Features />
            <PlatformInside />
            <PlatformAwards />
            <PlatformCTA />
        </main>
    );
}

export default Platform;

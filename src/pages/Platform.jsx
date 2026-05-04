import PlatformHero from "../components/sections/PlatformHero";
import PlatformStats from "../components/sections/PlatformStats";
import Features from "../components/sections/Features";
import PlatformInside from "../components/sections/PlatformInside";
import PlatformAwards from "../components/sections/PlatformAwards";
function Platform() {
    return (
        <main>
            <PlatformHero />
            <PlatformStats />
            <Features />
            <PlatformInside />
            <PlatformAwards />
        </main>
    );
}

export default Platform;

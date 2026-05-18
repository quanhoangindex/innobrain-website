import AboutUsHero from "../components/sections/AboutUsHero";
import AboutUsTeam from "../components/sections/AboutUsTeam";
import PlatformAwards from "../components/sections/PlatformAwards";
import AboutUsAdvisors from "../components/sections/AboutUsAdvisors"

function About() {
    return (
        <main>
            <AboutUsHero />
            <AboutUsTeam />
            <PlatformAwards />
            <AboutUsAdvisors/>
        </main>
    );
}

export default About;

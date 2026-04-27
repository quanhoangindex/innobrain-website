import NavLink from "./ui/NavLink";
import { ArrowUpRight } from "lucide-react";
import Button from "./ui/Button";

function Navbar() {
    return (
        <nav>
            <NavLink href="/">
                Home <ArrowUpRight size={16} />
            </NavLink>
            <Button
                variant="solid"
                size="md"
                iconTrailing={<ArrowUpRight size={16} ></ArrowUpRight>}>
                Book a Free Demo
            </Button>
        </nav>
    );
}

export default Navbar;

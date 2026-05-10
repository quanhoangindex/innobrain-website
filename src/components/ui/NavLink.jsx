import "./NavLink.css";
import { Link } from "react-router-dom";

function NavLink({ children, to, ...props }) {
    return (
        <Link to={to} {...props} className="nav-link">
            {children}
            {/* add props to fix scrolltop */}
        </Link>
    );
}

export default NavLink;

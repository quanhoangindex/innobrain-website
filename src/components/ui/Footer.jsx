import { useState, useEffect } from "react";
import "./Footer.css";
import logo from "../assets/logoInnoBrain.svg";

function Footer() {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 402) {
        setScreenSize("mobile");
      } else if (width <= 834) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`footer-${screenSize}`}>
      <div className={`footer_container-${screenSize}`}>
        {/* Top section - desktop & tablet share the same layout */}
        {screenSize !== "mobile" && (
          <div className="footer_info">
            <div className="footer_info_block">
              <img src={logo} alt="Innobrain" className="footer_info_logo" />
              <div className="footer_socials">
                <div className="footer_socials_wrapper">
                  {/* LinkedIn SVG */}
                </div>
                <div className="footer_socials_wrapper">
                  {/* YouTube SVG */}
                </div>
                <div className="footer_socials_wrapper">
                  {/* Facebook SVG */}
                </div>
              </div>
              <div className="footer_location">
                <div className="footer_map_icon">{/* map SVG */}</div>
                <div className="footer_adress">
                  Enhagsvägen 18 - 187 40, Täby, Stockholm
                </div>
              </div>
            </div>
            <div className="footer_info_wrapper">
              <div className="footer_company_block">
                <div className="footer_company">Company</div>
                <div className="footer_company_section">
                  <div className="footer_company_text">Platform</div>
                  <div className="footer_company_text">Industry</div>
                  <div className="footer_company_text">About Us</div>
                  <div className="footer_company_text">Contact</div>
                </div>
              </div>
              <div className="footer_legal_block">
                <div className="footer_legal">Legal</div>
                <div className="footer_legal_section">
                  <div className="footer_legal_text">Privacy Policy</div>
                  <div className="footer_legal_text">Trust Center</div>
                  <div className="footer_legal_text">Terms of Service</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile layout */}
        {screenSize === "mobile" && (
          <>
            <img src={logo} alt="Innobrain" className="footer_info_logo" />
            <div className="footer_location">
              <div className="footer_map_icon">{/* map SVG */}</div>
              <div className="footer_adress">
                Enhagsvägen 18 - 187 40, Täby, Stockholm
              </div>
              <div className="footer_socials">
                <div className="footer_socials_wrapper">{/* LinkedIn */}</div>
                <div className="footer_socials_wrapper">{/* YouTube */}</div>
                <div className="footer_socials_wrapper">{/* Facebook */}</div>
              </div>
            </div>
            <div className="footer_info_wrapper">
              <div className="footer_company_block">
                <div className="footer_company">Company</div>
                <div className="footer_company_section">
                  <div className="footer_company_text">Platform</div>
                  <div className="footer_company_text">Industry</div>
                  <div className="footer_company_text">About Us</div>
                  <div className="footer_company_text">Contact</div>
                </div>
              </div>
              <div className="footer_legal_block">
                <div className="footer_legal">Legal</div>
                <div className="footer_legal_section">
                  <div className="footer_legal_text">Privacy Policy</div>
                  <div className="footer_legal_text">Trust Center</div>
                  <div className="footer_legal_text">Terms of Service</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Bottom bar */}
        <div className={`footer_info_2-${screenSize}`}>
          {screenSize === "mobile" ? (
            <>
              <div className="footer_info_2_copyright">
                <div className="footer_info_2_text-mobile">
                  Copyright © 2025 InnoBrain AB. All rights reserved.
                </div>
              </div>
              <div className="footer_info_2_text-mobile">
                InnoBrain. Human Cognitive Monitoring at scale
              </div>
            </>
          ) : (
            <>
              <div className="footer_info_2_text">
                Copyright © 2025 InnoBrain AB. All rights reserved.
              </div>
              <div className="footer_info_2_text">
                InnoBrain. Human Cognitive Monitoring at scale
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;

import "./Footer.css";
import logo from ".../assets/logoInnoBrain.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_info">
          <div className="footer_info_block">
            <img src={logo} alt="Innobrain" className="footer_info_logo" />
            <div className="footer_socials">
              <div className="footer_socials_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 4.32353V19.6765C21 20.0275 20.8606 20.3641 20.6123 20.6123C20.3641 20.8606 20.0275 21 19.6765 21H4.32353C3.97251 21 3.63586 20.8606 3.38765 20.6123C3.13944 20.3641 3 20.0275 3 19.6765V4.32353C3 3.97251 3.13944 3.63586 3.38765 3.38765C3.63586 3.13944 3.97251 3 4.32353 3H19.6765C20.0275 3 20.3641 3.13944 20.6123 3.38765C20.8606 3.63586 21 3.97251 21 4.32353ZM8.29412 9.88235H5.64706V18.3529H8.29412V9.88235ZM8.53235 6.97059C8.53375 6.77036 8.49569 6.57182 8.42035 6.3863C8.34502 6.20078 8.23387 6.03191 8.09328 5.88935C7.95268 5.74678 7.78537 5.6333 7.60091 5.5554C7.41646 5.47749 7.21846 5.43668 7.01824 5.43529H6.97059C6.5634 5.43529 6.17289 5.59705 5.88497 5.88497C5.59705 6.17289 5.43529 6.5634 5.43529 6.97059C5.43529 7.37777 5.59705 7.76828 5.88497 8.05621C6.17289 8.34413 6.5634 8.50588 6.97059 8.50588C7.17083 8.51081 7.37008 8.47623 7.55696 8.40413C7.74383 8.33202 7.91467 8.2238 8.0597 8.08565C8.20474 7.94749 8.32113 7.78212 8.40223 7.59897C8.48333 7.41582 8.52755 7.21848 8.53235 7.01824V6.97059ZM18.3529 13.2071C18.3529 10.6606 16.7329 9.67059 15.1235 9.67059C14.5966 9.6442 14.0719 9.75644 13.6019 9.9961C13.1318 10.2358 12.7328 10.5945 12.4447 11.0365H12.3706V9.88235H9.88235V18.3529H12.5294V13.8476C12.4911 13.3862 12.6365 12.9283 12.9339 12.5735C13.2313 12.2186 13.6567 11.9954 14.1176 11.9524H14.2182C15.06 11.9524 15.6847 12.4818 15.6847 13.8159V18.3529H18.3318L18.3529 13.2071Z"
                    fill="#64748B"
                  />
                </svg>
              </div>
              <div className="footer_socials_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.792 5.41471C20.6521 5.64577 21.3325 6.32614 21.5635 7.18621C21.9872 8.75232 22 12.0001 22 12.0001C22 12.0001 22 15.2607 21.5764 16.8139C21.3453 17.674 20.665 18.3544 19.8049 18.5854C18.2516 19.0091 12 19.0091 12 19.0091C12 19.0091 5.74839 19.0091 4.19512 18.5854C3.33504 18.3544 2.65469 17.674 2.42362 16.8139C2 15.2478 2 12.0001 2 12.0001C2 12.0001 2 8.75232 2.41078 7.19905C2.64185 6.33897 3.32221 5.65861 4.18229 5.42755C5.73556 5.00392 11.9872 4.99109 11.9872 4.99109C11.9872 4.99109 18.2388 4.99109 19.792 5.41471ZM15.1836 12.0001L9.99743 15.0039V8.99623L15.1836 12.0001Z"
                    fill="#64748B"
                  />
                </svg>
              </div>
              <div className="footer_socials_wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M22 12.0607C22 6.504 17.5233 2 12 2C6.47667 2 2 6.504 2 12.0607C2 17.0833 5.656 21.2453 10.4373 22V14.9693H7.89867V12.06H10.4373V9.844C10.4373 7.32267 11.93 5.92933 14.2147 5.92933C15.308 5.92933 16.4533 6.126 16.4533 6.126V8.602H15.1913C13.9493 8.602 13.5627 9.378 13.5627 10.174V12.0607H16.336L15.8927 14.9687H13.5627V22C18.344 21.2453 22 17.0833 22 12.0607Z"
                    fill="#64748B"
                  />
                </svg>
              </div>
            </div>
            <div className="footer_location">
              <div className="footer_map_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                    stroke="#64748B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="#64748B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="footer_adress">
                Enhagsvägen 18 - 187 40, Täby, Stockholm
              </div>
            </div>
          </div>
          <div className="footer_info_wrapper">
            <div className="footer_company_block">
              <div className="footer_company">Company</div>
              <div className="footer_company_section">
                <div className="footer_legal_text">Platform</div>
                <div className="footer_legal_text">Industry</div>
                <div className="footer_legal_text">About Us</div>
                <div className="footer_legal_text">Contact</div>
              </div>
            </div>
            <div className="footer_legal_block">
              <div className="footer_legal">Legal</div>
              <div className="footer_legal_section">
                <div className="footer_legal_text">Privay Policy</div>
                <div className="footer_legal_text">Trust Center</div>
                <div className="footer_legal_text">Terms of Service</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_info_2">
          <div className="footer_info_2_text">
            Copyright © 2025 InnoBrain AB. All rights reserved.
          </div>
          <div className="footer_info_2_text">
            InnoBrain. Human Cognitive Monitoring at scale
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import { useState } from "react";
import "./Cards.css";

function Card({ image, title, name, text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={isHovered ? "card_hover" : "card_default"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={
          isHovered ? "card_background_hover" : "card_background_default"
        }
      >
        <img src={image} alt={name} />
      </div>
      <div
        className={
          isHovered ? "card_container_hover" : "card_container_default"
        }
      >
        <div className={isHovered ? "card_stack_hover" : "card_stack_default"}>
          <div
            className={isHovered ? "card_title_hover" : "card_title_default"}
          >
            {title}
          </div>
          <div className={isHovered ? "card_name_hover" : "card_name_default"}>
            {name}
          </div>
          {isHovered && <div className="card_text_hover">{text}</div>}
        </div>
        <div
          className={
            isHovered
              ? "card_linkedin_wrapper_hover"
              : "card_linkedin_wrapper_default"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M21 4.32353V19.6765..." fill="#64748B" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Card;

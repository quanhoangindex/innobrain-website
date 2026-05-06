import { useState } from "react";
import "./Option.css";
import { Circle, CircleCheck } from "lucide-react";

function Option({ children }) {
  const [state, setState] = useState("");

  const Icon = state === "selected" ? CircleCheck : Circle;

  return (
    <div
      className={`opt${state ? ` opt--${state}` : ""}`}
      onMouseEnter={() => state !== "selected" && setState("focus")}
      onMouseLeave={() => state !== "selected" && setState("")}
      onClick={() => setState("selected")}
    >
      <Icon
        className="opt__circle"
        style={state === "selected" ? { color: "var(--brand-primary)" } : {}}
      />
      <span className="opt__text">{children}</span>
    </div>
  );
}

export default Option;

import "./AboutUsAdvisors.css";
import Card from "./Card";

const DiagonalTile = () => (
  <div className="advisors_lines">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
    >
      <g opacity="0.5" clipPath="url(#clip0_991_9497)">
        <rect width="80" height="80" fill="#FAFBFF" />
        <rect
          x="104.357"
          y="-91.7708"
          width="1"
          height="200"
          transform="rotate(45 104.357 -91.7708)"
          fill="#E2E8F0"
        />
        <rect
          x="104.357"
          y="-71.6423"
          width="1"
          height="200"
          transform="rotate(45 104.357 -71.6423)"
          fill="#E2E8F0"
        />
        <rect
          x="104.357"
          y="-51.5138"
          width="1"
          height="200"
          transform="rotate(45 104.357 -51.5138)"
          fill="#E2E8F0"
        />
        <rect
          x="104.357"
          y="-31.3854"
          width="1"
          height="200"
          transform="rotate(45 104.357 -31.3854)"
          fill="#E2E8F0"
        />
        <rect
          x="104.357"
          y="-11.2569"
          width="1"
          height="200"
          transform="rotate(45 104.357 -11.2569)"
          fill="#E2E8F0"
        />
        <rect
          x="104.357"
          y="8.87158"
          width="1"
          height="200"
          transform="rotate(45 104.357 8.87158)"
          fill="#E2E8F0"
        />
        <rect
          x="104.357"
          y="29"
          width="1"
          height="200"
          transform="rotate(45 104.357 29)"
          fill="#E2E8F0"
        />
        <rect
          x="104.357"
          y="49.1285"
          width="1"
          height="200"
          transform="rotate(45 104.357 49.1285)"
          fill="#E2E8F0"
        />
        <rect
          x="104.357"
          y="69.257"
          width="1"
          height="200"
          transform="rotate(45 104.357 69.257)"
          fill="#E2E8F0"
        />
      </g>
      <defs>
        <clipPath id="clip0_991_9497">
          <rect width="80" height="80" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </div>
);

function AboutUsAdvisors() {
  return (
    <div className="advisor_container">
      <div className="advisor_section">
        <div className="advisor_header">
          <div className="advisor_header_inner">
            <div className="advisor_title">Our Advisors</div>
            <div className="advisor_subtitle">
              Seasoned operators{" "}
              <span style={{ color: "#2563eb" }}>guiding InnoBrain</span> from
              lab to market
            </div>
          </div>
        </div>
        <DiagonalTile />
        <DiagonalTile />
        <DiagonalTile />
        <DiagonalTile />
        <DiagonalTile />
        <DiagonalTile />
        <DiagonalTile />
        <DiagonalTile />
        <DiagonalTile />
        <div className="advisor_2_boxes">
          <Card
            image="https://res.cloudinary.com/dp90xtgcp/image/upload/v1779031294/Sam_m8arir.png"
            title="BUSINESS ADVISOR"
            name="David Fox"
            text="A seasoned investor and entrepreneur with 40+ years of experience guiding founders and scaling global technology ventures."
          />
          <Card
            image="https://res.cloudinary.com/dp90xtgcp/image/upload/v1779031294/Sam-1_bduv7h.png"
            title="TECHNICAL ADVISOR / PH.D"
            name="Sam Hajhashemi"
            text="A Ph.D engineer at Google specializing in embedded systems, sensor technologies, and cloud-based solutions."
          />
        </div>
        <div className="advisor_break"></div>
        <div className="advisor_2_boxes">
          <Card
            image="https://res.cloudinary.com/dp90xtgcp/image/upload/v1779031293/Mike_utibig.png"
            title="TECHNICAL ADVISOR / ASSOC. PROF. (KTH)"
            name="Mikael Nybacka"
            text="A KTH Associate Professor and vehicle dynamics expert with extensive experience in automotive research, autonomous systems, and transport innovation"
          />
          <Card
            image="https://res.cloudinary.com/dp90xtgcp/image/upload/v1779031294/Pawel_gy8umw.png"
            title="TECHNICAL ADVISOR / ASSOC. PROF. (KTH)"
            name="Pawel Herman"
            text="A Neuro-AI expert and Associate Professor at KTH, specializing in computational neuroscience and intelligent systems"
          />
        </div>
        <DiagonalTile />
        <DiagonalTile />
        <DiagonalTile />
        <DiagonalTile />
        <DiagonalTile />
        <DiagonalTile />
        <DiagonalTile />
        <DiagonalTile />
        <DiagonalTile />
      </div>
    </div>
  );
}

export default AboutUsAdvisors;

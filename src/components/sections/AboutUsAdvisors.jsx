import "./AboutUsAdvisors.css";
import Card from "./Card";

function AboutUsAdvisors() {
  return (
    <div className="advisor_container">
      <div className="advisor_section">
        <div className="advisor_header">
          <div className="advisor_header_inner">
            <div className="advisor_title">Our Advisors</div>
            <div className="advisor_subtitle">
              Seasoned operators guiding InnoBrain from lab to market
            </div>
          </div>
        </div>
        <div className="advisors_lines"></div>
        <div className="advisors_lines"></div>
        <div className="advisors_lines"></div>
        <div className="advisors_lines"></div>
        <div className="advisors_lines"></div>
        <div className="advisors_lines"></div>
        <div className="advisors_lines"></div>
        <div className="advisors_lines"></div>
        <div className="advisors_lines"></div>
        <div className="advisor_2_boxes">
          <Card
            image={person1}
            title="BUSSINESS ADVISOR"
            name="David Fox"
            text="A seasoned investor and entrepreneur with 40+ years of experience guiding founders and scaling global technology ventures."
          />
          <Card
            image={person2}
            title="TECHNICAL ADVISOR / PH.D"
            name="Sam Hajhashemi"
            text="A Ph.D engineer at Google specializing in embedded systems, sensor technologies, and cloud-based solutions."
          />
        </div>
        <div className="advisor_break"></div>
        <div className="advisor_2_boxes">
          <Card
            image={person3}
            title="TECHNICAL ADVISOR / ASSOC. PROF. (KTH)"
            name="Mikael Nybacka"
            text=" A KTH Associate Professor and vehicle  dynamics expert with extensive experience in automotive research, autonomous systems , and transport innovation"
          />
          <Card
            image={person4}
            title="TECHNICAL ADVISOR / ASSOC. PROF. (KTH)"
            name="Pawel Herman"
            text="A Neuro-AI expert and Associate  Professor at KTH, specializing in computational neuroscience and intelligent systems"
          />
        </div>
        <div className="advisors_lines"></div>
        <div className="advisors_lines"></div>
        <div className="advisors_lines"></div>
        <div className="advisors_lines"></div>
        <div className="advisors_lines"></div>
        <div className="advisors_lines"></div>
        <div className="advisors_lines"></div>
        <div className="advisors_lines"></div>
        <div className="advisors_lines"></div>
      </div>
    </div>
  );
}

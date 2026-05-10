import "./ContactForm.css";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { Sparkles, DatabaseZap, Focus, Cloud } from "lucide-react";
import { useState } from "react";

const IMG_SKAPA =
    "https://res.cloudinary.com/dp90xtgcp/image/upload/v1778423477/Skapa_Prize_y5hc1t.png";
const IMG_TRUSTED =
    "https://res.cloudinary.com/dp90xtgcp/image/upload/v1778423478/Trusted_mthwb7.png";
const IMG_IVA =
    "https://res.cloudinary.com/dp90xtgcp/image/upload/v1778423477/Iva_top_100_hfrg9z.png";

const features = [
    {
        icon: (
            <Sparkles size={16} color="var(--brand-accent)" strokeWidth={2.5} />
        ),
        label: "AI-enabled",
    },
    {
        icon: (
            <DatabaseZap
                size={16}
                color="var(--brand-accent)"
                strokeWidth={2.5}
            />
        ),
        label: "Hardware Agnostic",
    },
    {
        icon: <Focus size={16} color="var(--brand-accent)" strokeWidth={2.5} />,
        label: "Real-time",
    },
    {
        icon: <Cloud size={16} color="var(--brand-accent)" strokeWidth={2.5} />,
        label: "Cloud-based",
    },
];

const roles = ["Investor", "Partner", "Enterprise"];
const industries = ["Aviation", "Defence", "Logistics", "Healthcare", "Other"];

function ContactForm() {
    const [selectedRole, setSelectedRole] = useState(null);
    const [selectedIndustry, setSelectedIndustry] = useState("");

    return (
        <section className="cform">
            <div className="cform__inner">
                <div className="cform__bg" />

                <div className="cform__body">
                    {/* Left */}
                    <div className="cform__left">
                        <div className="cform__info">
                            <div className="cform__text">
                                <h2 className="cform__title">
                                    Contact us here
                                </h2>
                                <p className="cform__desc text-base-regular">
                                    Whether you're exploring partnership
                                    opportunities, considering an investment, or
                                    looking to apply our technology in your
                                    organization, we'd be glad to hear from you.
                                </p>
                            </div>

                            <ul className="cform__features">
                                <li className="cform__feature-label text-base-medium">
                                    Features
                                </li>
                                {features.map((f) => (
                                    <li
                                        key={f.label}
                                        className="cform__feature-item">
                                        <span className="cform__feature-icon">
                                            {f.icon}
                                        </span>
                                        <span className="text-base-regular">
                                            {f.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="cform__awards">
                                <img
                                    src={IMG_SKAPA}
                                    alt="SKAPA Prize"
                                    className="cform__award-img"
                                />
                                <img
                                    src={IMG_TRUSTED}
                                    alt="SKAPA Prize"
                                    className="cform__award-img"
                                />
                                <img
                                    src={IMG_IVA}
                                    alt="IVA Top 100"
                                    className="cform__award-img"
                                />
                            </div>
                        </div>
                    </div>

                    {/*Right */}
                    <div className="cform__card">
                        <form
                            className="cform__form"
                            onSubmit={(e) => e.preventDefault()}>
                            <div className="cform__row">
                                <Input
                                    size=""
                                    label="Name *"
                                    placeholder="Name"
                                />
                                <Input
                                    size=""
                                    label="Email *"
                                    placeholder="Email"
                                />
                                <Input>hello</Input>
                            </div>

                            <Input
                                size=""
                                label="Company *"
                                placeholder="Company"
                            />
                            <Input
                                size=""
                                label="Job Title *"
                                placeholder="Job Title"
                            />

                            {/* Industries dropdown */}
                            <div className="cform__field">
                                <label className="cform__field-label">
                                    Industries
                                </label>
                                <select
                                    className="cform__select"
                                    value={selectedIndustry}
                                    onChange={(e) =>
                                        setSelectedIndustry(e.target.value)
                                    }>
                                    <option value="" disabled>
                                        Select Industries
                                    </option>
                                    {industries.map((i) => (
                                        <option key={i} value={i}>
                                            {i}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Role selector */}
                            <div className="cform__field">
                                <label className="cform__field-label">
                                    What would you call yourself?
                                </label>
                                <div className="cform__roles">
                                    {roles.map((role) => (
                                        <button
                                            key={role}
                                            type="button"
                                            className={`cform__role-btn${selectedRole === role ? " cform__role-btn--active" : ""}`}
                                            onClick={() =>
                                                setSelectedRole(role)
                                            }>
                                            <span className="cform__role-circle" />
                                            {role}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Message textarea */}
                            <Input
                                size=""
                                area="--area"
                                label="Message to us"
                                placeholder="Comment or message"
                            />

                            {/* Submit */}
                            <div className="cform__submit">
                                <Button size="lg">Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;

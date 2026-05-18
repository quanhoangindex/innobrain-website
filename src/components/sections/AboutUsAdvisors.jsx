import { Fragment } from "react";
import { motion } from "framer-motion";
import "./AboutUsAdvisors.css";
import linkedin from "../../assets/SocialIcon/linkedin.svg";

const logo = (
    <svg
        width="252"
        height="250"
        viewBox="0 0 252 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M106.193 0.219106C98.342 1.44245 90.7281 3.37788 83.4246 6.00715C79.4442 7.41308 75.5734 9.01985 71.7938 10.8275C69.621 11.85 67.503 12.9272 65.4033 14.0958C60.163 16.9442 55.1419 20.176 50.3946 23.7364C45.9212 27.0778 41.7034 30.7113 37.723 34.6187H37.7048C37.3944 34.9291 37.1022 35.2212 36.7918 35.5316C36.4997 35.8238 36.2075 36.1159 35.8971 36.4263C31.9898 40.425 28.3563 44.661 25.0149 49.1162C21.4545 53.8817 18.2044 58.9029 15.3378 64.1432C14.2058 66.2429 13.1102 68.361 12.0877 70.5155C10.2984 74.2951 8.69161 78.166 7.26743 82.1464C4.65643 89.4499 2.72101 97.0638 1.49767 104.915C1.42463 105.408 1.3516 105.919 1.27856 106.412H37.7048C38.7638 101.117 40.3158 95.9865 42.2877 91.0749V91.0384C44.5518 85.3234 47.4184 79.937 50.778 74.8794C51.7457 73.4004 52.7682 71.9397 53.8637 70.5155C56.4017 67.1194 59.1953 63.9058 62.1897 60.9114C65.1842 57.9169 68.3977 55.1233 71.7938 52.5854C73.218 51.5081 74.6604 50.4856 76.1394 49.4996C81.1971 46.14 86.6199 43.2734 92.3349 41.0093H92.3532C97.2648 39.0373 102.395 37.4853 107.691 36.4263V0C107.198 0.0730352 106.686 0.14607 106.193 0.219106Z"
            fill="#F0F4FF"
        />
        <path
            d="M251.278 176.399V143.588C250.785 143.661 250.274 143.734 249.781 143.807C242.094 144.993 234.644 146.892 227.487 149.43L227.177 149.741L227.012 149.595C223.032 151.001 219.161 152.607 215.381 154.415C213.209 155.437 211.091 156.515 208.991 157.683C203.751 160.532 198.73 163.764 193.982 167.324C189.509 170.665 185.291 174.299 181.311 178.206C180.708 178.791 180.087 179.411 179.485 180.032C175.577 184.013 171.944 188.249 168.603 192.704C165.042 197.469 161.81 202.472 158.925 207.712C157.793 209.83 156.716 211.93 155.675 214.103C153.886 217.883 152.279 221.753 150.855 225.734L151.019 225.898L150.672 226.245C148.153 233.384 146.272 240.834 145.085 248.503C145.012 248.996 144.939 249.507 144.866 250H181.292C181.603 248.411 181.968 246.841 182.37 245.307C183.319 241.656 184.488 238.077 185.875 234.626C188.158 228.929 191.006 223.525 194.347 218.467C195.333 216.988 196.356 215.527 197.433 214.103C202.527 207.311 208.589 201.249 215.381 196.155C216.806 195.077 218.266 194.055 219.745 193.087C224.803 189.709 230.226 186.861 235.941 184.579C239.392 183.191 242.952 182.022 246.586 181.091C248.138 180.689 249.708 180.324 251.278 179.996V178.206V176.399Z"
            fill="#F0F4FF"
        />
        <path
            d="M106.412 250H69.9858C69.6754 248.411 69.3102 246.841 68.9085 245.307C67.959 241.655 66.7905 238.077 65.4028 234.626C63.1205 228.929 60.2721 223.524 56.9308 218.467C55.9448 216.988 54.9223 215.527 53.845 214.103C48.7508 207.311 42.6889 201.249 35.8967 196.155C34.4725 195.077 33.0118 194.055 31.5328 193.087C26.4752 189.709 21.0523 186.861 15.3373 184.578C11.8864 183.191 8.32599 182.022 4.6925 181.091C3.1405 180.689 1.57025 180.324 0 179.995V143.587C0.492986 143.66 1.00423 143.733 1.49722 143.807C9.18415 144.993 16.6337 146.892 23.7911 149.43L24.2659 149.595C28.2463 151 32.1171 152.607 35.8967 154.415C38.0695 155.437 40.1875 156.515 42.2872 157.683C47.5275 160.532 52.5487 163.763 57.2959 167.324C61.7693 170.665 65.9871 174.299 69.9675 178.206C70.57 178.79 71.1908 179.411 71.7934 180.032C75.7007 184.012 79.3342 188.248 82.6756 192.704C86.236 197.469 89.4678 202.472 92.3345 207.712H92.3527C93.4848 209.812 94.562 211.93 95.6028 214.103C97.3921 217.882 98.9989 221.753 100.423 225.734L100.259 225.898L100.606 226.245C103.125 233.384 105.006 240.834 106.193 248.503C106.266 248.995 106.339 249.507 106.412 250Z"
            fill="#F0F4FF"
        />
        <path
            d="M249.781 104.915C248.557 97.0638 246.622 89.4499 244.011 82.1464C242.587 78.166 240.98 74.2951 239.191 70.5155C238.168 68.361 237.073 66.2429 235.941 64.1432C233.074 58.8846 229.824 53.8817 226.263 49.1162C222.922 44.661 219.289 40.425 215.381 36.4446L213.574 34.6187H213.555C209.575 30.7113 205.357 27.0778 200.884 23.7364C196.137 20.176 191.115 16.9442 185.875 14.0958C183.775 12.9272 181.657 11.85 179.485 10.8275C175.705 9.01985 171.834 7.41308 167.854 6.00715C160.55 3.37788 152.936 1.44245 145.085 0.219106C144.592 0.14607 144.081 0.0730352 143.588 0V36.4263C148.883 37.4853 154.014 39.0373 158.925 41.0093H158.943C164.658 43.2734 170.081 46.14 175.139 49.4996C176.618 50.4856 178.06 51.5081 179.485 52.5854C182.881 55.1233 186.094 57.9169 189.089 60.9114C192.083 63.9058 194.877 67.1194 197.415 70.5155C198.51 71.9397 199.533 73.4004 200.5 74.8794C203.86 79.937 206.727 85.3234 208.991 91.0384V91.0749C210.963 95.9865 212.515 101.117 213.574 106.412H250C249.927 105.919 249.854 105.408 249.781 104.915Z"
            fill="#F0F4FF"
        />
        <path
            d="M124.999 71.4287C123.404 71.4287 121.809 72.2303 121.011 74.1006L119.15 79.1772C112.238 97.6132 97.8812 112.309 79.2709 119.256L74.2195 121.126C70.4975 122.462 70.4975 127.538 74.2195 128.874L79.2709 130.745C97.6154 137.691 112.238 152.12 119.15 170.823L121.011 175.9C121.809 177.77 123.404 178.571 124.999 178.571C126.594 178.571 128.189 177.77 128.987 175.9L130.848 170.823C137.76 152.387 152.117 137.691 170.727 130.745L175.779 128.874C179.501 127.538 179.501 122.462 175.779 121.126L170.727 119.256C152.383 112.309 137.76 97.8804 130.848 79.1772L128.987 74.1006C128.189 72.2303 126.594 71.4287 124.999 71.4287Z"
            fill="#F0F4FF"
        />
    </svg>
);
const advisors = [
    {
        id: 1,
        role: "BUSINESS ADVISOR",
        name: "David Fox",
        bio: "Serial entrepreneur and investor with 20+ yrs. of exp. scaling deep-tech ventures across Europe and North America.",
        photo: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1779031294/Sam_m8arir.png",
        linkedin: "https://www.linkedin.com/in/davidfox/",
        active: false,
    },
    {
        id: 2,
        role: "TECHNICAL ADVISOR / PH.D",
        name: "Sam Hajhashemi",
        bio: "Ph.D. in Neuroscience, expert in BCI signal processing and real-time neural decoding systems.",
        photo: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1779031294/Sam-1_bduv7h.png",
        linkedin: "https://www.linkedin.com/in/sam-hajhashemi-03227547/",
        active: false,
    },
    {
        id: 3,
        role: "TECHNICAL ADVISOR / ASSOC. PROF. (KTH)",
        name: "Mikael Nybacka",
        bio: "Associate Professor at KTH Royal Institute of Technology specialising in vehicle dynamics and autonomous systems.",
        photo: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1779031293/Mike_utibig.png",
        linkedin: "https://www.linkedin.com/in/mikaelnybacka/",
        active: false,
    },
    {
        id: 4,
        role: "TECHNICAL ADVISOR / ASSOC. PROF. (KTH)",
        name: "Pawel Herman",
        bio: "Associate Professor at KTH, leading researcher in computational neuroscience and cognitive modelling.",
        photo: "https://res.cloudinary.com/dp90xtgcp/image/upload/v1779031294/Pawel_gy8umw.png",
        linkedin: "https://www.linkedin.com/in/pawel-herman-68520822/",
        active: false,
    },
];

function LinkedInIcon({ active }) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21 4.32353V19.6765C21 20.0275 20.8606 20.3641 20.6123 20.6123C20.3641 20.8606 20.0275 21 19.6765 21H4.32353C3.97251 21 3.63586 20.8606 3.38765 20.6123C3.13944 20.3641 3 20.0275 3 19.6765V4.32353C3 3.97251 3.13944 3.63586 3.38765 3.38765C3.63586 3.13944 3.97251 3 4.32353 3H19.6765C20.0275 3 20.3641 3.13944 20.6123 3.38765C20.8606 3.63586 21 3.97251 21 4.32353ZM8.29412 9.88235H5.64706V18.3529H8.29412V9.88235ZM8.53235 6.97059C8.53375 6.77036 8.49569 6.57182 8.42035 6.3863C8.34502 6.20078 8.23387 6.03191 8.09328 5.88935C7.95268 5.74678 7.78537 5.6333 7.60091 5.5554C7.41646 5.47749 7.21846 5.43668 7.01824 5.43529H6.97059C6.5634 5.43529 6.17289 5.59705 5.88497 5.88497C5.59705 6.17289 5.43529 6.5634 5.43529 6.97059C5.43529 7.37777 5.59705 7.76828 5.88497 8.05621C6.17289 8.34413 6.5634 8.50588 6.97059 8.50588C7.17083 8.51081 7.37008 8.47623 7.55696 8.40413C7.74383 8.33202 7.91467 8.2238 8.0597 8.08565C8.20474 7.94749 8.32113 7.78212 8.40223 7.59897C8.48333 7.41582 8.52755 7.21848 8.53235 7.01824V6.97059ZM18.3529 13.2071C18.3529 10.6606 16.7329 9.67059 15.1235 9.67059C14.5966 9.6442 14.0719 9.75644 13.6019 9.9961C13.1318 10.2358 12.7328 10.5945 12.4447 11.0365H12.3706V9.88235H9.88235V18.3529H12.5294V13.8476C12.4911 13.3862 12.6365 12.9283 12.9339 12.5735C13.2313 12.2186 13.6567 11.9954 14.1176 11.9524H14.2182C15.06 11.9524 15.6847 12.4818 15.6847 13.8159V18.3529H18.3318L18.3529 13.2071Z"
                fill="#64748B"
            />
        </svg>
    );
}

function AdvisorCard({ advisor, index }) {
    const isActive = advisor.active;

    return (
        <motion.div
            className={`auadv__card${isActive ? " auadv__card--active" : ""}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}>
            <div className="auadv__card-visual">
                <img
                    src={advisor.photo}
                    alt={advisor.name}
                    className="auadv__photo"
                />
            </div>

            {/* Bottom: info bar */}
            <div className="auadv__card-info">
                <div className="auadv__card-main">
                    <span className="auadv__tag">{advisor.role}</span>
                    <h3 className="auadv__name">{advisor.name}</h3>
                    <p className="auadv__bio">{advisor.bio}</p>
                </div>
                <div className="auadv__linkedin_wrapper">
                    <a
                        href={advisor.linkedin}
                        className="auadv__linkedin"
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${advisor.name} on LinkedIn`}>
                        <LinkedInIcon active={isActive} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default function AboutUsAdvisors() {
    const row1 = advisors.slice(0, 2);
    const row2 = advisors.slice(2, 4);

    return (
        <section className="auadv">
            <div className="auadv__inner">
                <div className="auadv__header-wrap">
                    <div className="auadv__header">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="auadv__heading-group">
                            <h2 className="auadv__title">Our Advisors</h2>
                            <p className="auadv__subtitle">
                                <span className="auadv__subtitle--muted">
                                    Seasoned operators{" "}
                                </span>
                                <span className="auadv__subtitle--brand">
                                    guiding InnoBrain <br></br>
                                </span>
                                <span className="auadv__subtitle--muted">
                                    {" "}
                                    from lab to market.
                                </span>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.4 }}
                            className="auadv__logo-wrap"
                            aria-hidden="true">
                            {logo}
                        </motion.div>
                    </div>
                </div>

                <div className="auadv__grid">
                    <div className="auadv__stripe" aria-hidden="true" />

                    <div className="auadv__cards">
                        <div className="auadv__row">
                            {row1.map((advisor, i) => (
                                <AdvisorCard
                                    key={advisor.id}
                                    advisor={advisor}
                                    index={i}
                                />
                            ))}
                        </div>

                        <div className="auadv__break" />

                        <div className="auadv__row">
                            {row2.map((advisor, i) => (
                                <AdvisorCard
                                    key={advisor.id}
                                    advisor={advisor}
                                    index={i + 2}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="auadv__stripe" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}

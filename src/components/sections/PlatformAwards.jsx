import './PlatformAwards.css'

const awards = [
    {
        id: 'skapa',
        logo: 'https://res.cloudinary.com/dp90xtgcp/image/upload/v1777910096/Skapa_rq4avo.png',
        alt: 'SKAPA',
        desc: 'The winner of the SKAPA Innovation prize 2019',
    },
    {
        id: 'iva',
        logo: 'https://res.cloudinary.com/dp90xtgcp/image/upload/v1777910096/Iva_ndicgm.png',
        alt: 'IVA',
        desc: '2022 top-100 list within the Deep tech category',
    },
    {
        id: 'trusted-ai',
        logo: 'https://res.cloudinary.com/dp90xtgcp/image/upload/v1777910096/Trusted_g4ewxx.png',
        alt: 'Trusted AI',
        desc: 'A recognized member of the European AI landscape',
    },
    {
        id: 'business-challenge',
        logo: 'https://res.cloudinary.com/dp90xtgcp/image/upload/v1777910096/Business_nnk0kz.png',
        alt: 'Business Challenge Sweden',
        desc: 'The second runner-up of the Business Challenge Sweden 2019',
    },
    {
        id: 'unternehmertum',
        logo: 'https://res.cloudinary.com/dp90xtgcp/image/upload/v1777910104/unter_hoacnh.png',
        alt: 'UnternehmerTUM',
        desc: "Pitch winner of the International Entrepreneurs' Night 2018",
    },
    {
        id: 'stockholm',
        logo: 'https://res.cloudinary.com/dp90xtgcp/image/upload/v1777910096/Stockholm_yxnh8k.png',
        alt: 'Stockholm — The Capital of Scandinavia',
        desc: 'The finalist of the Stockholm Innovation Scholarship 2020',
    },
]

function PlatformAwards() {
    return (
        <section className="pawards">
            <div className="pawards__inner">

                <div className="pawards__row">
                    {awards.map((a) => (
                        <div key={a.id} className="pawards__cell">
                            <img src={a.logo} alt={a.alt} className="pawards__logo" />
                        </div>
                    ))}
                </div>

                <div className="pawards__row">
                    {awards.map((a) => (
                        <div key={a.id} className="pawards__cell pawards__cell--desc">
                            <p className="pawards__desc">{a.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default PlatformAwards

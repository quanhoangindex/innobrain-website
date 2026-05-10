import "./ContactSchedule.css"
import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"
import { ArrowUpRight } from "lucide-react"

function ContactSchedule() {


    return (
        <section className="csched">
            <div className="csched__inner">

                <div className="csched__title">
                    <p className="csched__label">
                        FIND IT INTERESTING?<br />
                        BOOK A CALL WITH US
                    </p>
                    <ArrowUpRight size={20} color="var(--text-secondary)" />
                </div>

            </div>
        </section>
    )
}

export default ContactSchedule

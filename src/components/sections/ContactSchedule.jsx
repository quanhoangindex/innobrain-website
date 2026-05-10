import "./ContactSchedule.css";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { ArrowDownRight } from "lucide-react";

function ContactSchedule() {
    {
        /*cal.com embed useEffect */
    }
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "20min" });
            cal("ui", {
                theme: "light",
                cssVarsPerTheme: { light: { "cal-brand": "#2563EB" } },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    return (
        <section className="csched">
            <div className="csched__inner">
                <div className="csched__title">
                    <p className="csched__label">
                        FIND IT INTERESTING?
                        <br />
                        BOOK A CALL WITH US
                    </p>
                    <ArrowDownRight size={20} color="var(--text-secondary)" />
                </div>
                <div className="csched__cal">
                    {/*cal.com embed */}
                    <Cal
                        namespace="20min"
                        calLink="quan-hoang-ic6ech/20min"
                        style={{
                            width: "100%",
                            height: "100%",
                            overflow: "scroll",
                        }}
                        config={{
                            layout: "month_view",
                            useSlotsViewOnSmallScreen: "true",
                            theme: "light",
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default ContactSchedule;

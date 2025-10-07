import { Helmet } from "react-helmet-async";

export default function Achievement() {
    return (
        <> 
            <Helmet>
                <title>Ibalardian | Achievement</title>
            </Helmet>

            <h2 className="article-title mb-4">Achievement</h2>

            <div className="achievement-item mb-3">
                <h6 className="achievement-title">
                    <i className="fa-solid fa-medal text-warning me-2"></i> 1st Place at Competence Test RPL 2022 Web Technologies
                </h6>
                <p className="achievement-text mb-0">
                    <b>Task:</b> Challenged to create a dynamic and responsive Hotel Room Booking Website Application.
                </p>
                <p className="achievement-text mb-0">
                    <b>Tech Stack:</b> HTML5 · Cascading Style Sheets (CSS) · jQuery · Boostrap 4 · PHP MVC · MySQL
                </p>
            </div>

            <div className="achievement-item">
                <h6 className="achievement-title">
                    <i className="fa-solid fa-medal text-pw-muted me-2"></i> 2nd Place at LKS North Sumatera Province 2021 Web Technologies
                </h6>
                <p className="achievement-text mb-0">
                    <b>Task:</b> Challenged to create a News Portal CMS with a dynamic and responsive Covid-19 theme.
                </p>
                <p className="achievement-text mb-0">
                    <b>Tech Stack:</b> HTML5 · Cascading Style Sheets (CSS) · jQuery · Boostrap 4 · PHP MVC · MySQL
                </p>
            </div>
        </>
    );
}
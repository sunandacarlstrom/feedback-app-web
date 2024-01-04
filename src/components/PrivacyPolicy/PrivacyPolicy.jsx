import React from "react";

const PrivacyPolicy = () => {
    return (
        <>
            <button
                className="btn absolute right-6 bottom-6 bg-transparent text-digital-white border-none hover:text-digital-black"
                onClick={() => document.getElementById("my_modal_1").showModal()}
            >
                Privacy Policy
            </button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h2 className="font-bold">Integritetspolicy för Feedback App</h2>
                    <h3 className="pt-1 pb-4 italic">Senast uppdaterad: 2024-01-08</h3>

                    <p className="pb-4 text-sm">
                        Välkommen till vår Feedback App. Vi värdesätter och respekterar din
                        integritet, och denna integritetspolicy beskriver hur vi samlar in, använder
                        och skyddar information från användare av vår tjänst.
                    </p>

                    <h3 className="font-bold text-sm">Insamlad information:</h3>
                    <p className="pb-4 text-sm">
                        När du använder Feedback App samlar vi in och lagrar svar på frågor som du
                        lämnar in. Denna information används enbart för att generera och hantera
                        resultat i samband med ditt deltagande i quizet.
                    </p>

                    <h3 className="font-bold text-sm">Användning av information:</h3>
                    <p className="pb-4 text-sm">
                        Vi använder den insamlade informationen endast för att tillhandahålla och
                        förbättra Feedback App. Dina svar kan anonymt användas för statistiska
                        ändamål och för att förbättra kvaliteten på frågor och svar i framtida quiz.
                    </p>

                    <h3 className="font-bold text-sm">Databashantering:</h3>
                    <p className="pb-4 text-sm">
                        Dina svar lagras säkert i vår databas och är endast tillgängliga för
                        auktoriserade användare som är involverade i administrationen av Feedback
                        App. Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda
                        informationen mot obehörig åtkomst, förlust, missbruk eller förändring.
                    </p>

                    <h3 className="font-bold text-sm">Delning av information:</h3>
                    <p className="pb-4 text-sm">
                        Vi delar inte personligt identifierbar information med tredje parter utan
                        ditt samtycke, förutom när det krävs enligt lag.
                    </p>

                    <h3 className="font-bold text-sm">Cookies:</h3>
                    <p className="pb-4 text-sm">
                        Vi använder cookies för att förbättra användarupplevelsen och analysera hur
                        vår webbplats används. Genom att använda Feedback App samtycker du till
                        användningen av cookies.
                    </p>

                    <h3 className="font-bold text-sm">Ändringar i integritetspolicyn:</h3>
                    <p className="pb-4 text-sm">
                        Vi förbehåller oss rätten att uppdatera eller ändra denna integritetspolicy
                        när som helst. Eventuella ändringar kommer att publiceras på denna sida med
                        ett uppdaterat datum.
                    </p>

                    <h3 className="font-bold text-sm">Kontakta oss:</h3>
                    <p className="pb-4 text-sm">
                        Om du har frågor eller kommentarer om vår integritetspolicy, vänligen
                        kontakta oss på{" "}
                        <a href="tel:+4687006600" className="link">
                            08-700 66 00
                        </a>
                    </p>

                    <p className="pb-4 text-sm">
                        Genom att använda Feedback App samtycker du till denna integritetspolicy.
                    </p>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};
export default PrivacyPolicy;

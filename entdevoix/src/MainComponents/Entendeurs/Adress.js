import React from 'react';

export default class Adress extends React.Component {
    componentDidMount() {
        document.querySelector('.adress').scrollIntoView({behavior: 'smooth'});
    }

    render() {
        return (
            <div className="adress">
                <h4>Adresses</h4>
                <h5>Bruxelles</h5>
                <section id="bruxelles">
                    <p id="firstBxl">L’Autre Lieu, 61 rue Marie Thérèse, 1210 Bruxelles.<br/>
                        Rencontres tous les quinze jours, le samedi de 16h à 18h.<br/>
                        Facilitatrice: Elodie<br/>
                        Tél : 0478 42 76 08</p>
                    <p id="secondBxl">BXL NorWest, 93 Av Sermon, 1090 Bruxelles<br/>
                        Rencontres chaque 2ème et 4ème mardi du mois de 17h à 18h30<br/>
                        Facilitateurs : Jean-Paul Noël et Jean-Marc Priels<br/>
                        Tél : 0478 42 76 08</p>
                </section>
                <h5>Liège</h5>
                <p>Salle 2/5 (2e étage), Bâtiment A2, Place Cockerill 3-5, Université de Liège, 4000 Liège.<br/>
                    Rencontres une à deux fois par mois de septembre à décembre, les jeudis de 19h à 20h30<br/>
                    Facilitateurs : Jean-Paul et Jonathan<br/>
                    Tél : 04 366 37 44<br/>
                    Pour plus d'informations sur le groupe à Liège <a target='_blank' href="http://www.rev-belgium.org/downloads/cplu.pdf"> cliquer ici</a></p>
                <h5>Namur</h5>
                <p>La Charabiole, rue de Gembloux 179, 5002 Saint-Servais.<br/>
                    Rencontres les 2èmes et 4èmes mercredis du mois, de 16h à 18h.<br/>
                    Facilitateurs : Florence et Jean-Paul<br/>
                    Tél : 0475 39 63 71</p>
                <h5>Groep westvlaanderen</h5>
                <p>Huidige adres : Cultuur centrum Scharpoord, Maxim Willemspad 1, 8300 Knokke-Heist<br/>
                    Een donderdag per maand in Knokke-Heist<br/>
                    Inlichtingen : Lucie Guyaux<br/>
                    Tel : 0495 90 83 50</p>
            </div>
        )
    }
}
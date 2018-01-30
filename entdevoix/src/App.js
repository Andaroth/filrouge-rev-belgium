import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div className="acceuil">
                <section className="containerAcceuil">
                    <h4 id="presAcc">Acceuil</h4>
                    <h2 id="titleAcc">Entendre des voix</h2>
                    <q>Le fait d’entendre des voix n’est pas, en soi, un symptôme de maladie mentale mais plutôt un phénomène porteur de sens pour les personnes concernées et, pour ces raisons, il convient de prendre les voix en considération.</q>
                    <ul id="accUl">
                        <li className="accLi">Entendre des voix est un phénomène normal bien que inhabituel, et une variante de l’expérience humaine</li>
                        <li className="accLi">Le problème ne provient pas de l’entente de voix, mais de la difficulté à vivre cette expérience </li>
                        <li className="accLi">Entendre des voix est porteur de sens, c’est lié à l’expérience de vie de la personne </li>
                        <li className="accLi">Les entendeurs de voix peuvent apprendre à accepter et faire face à leurs voix</li>
                        <li className="accLi">Une attitude positive de la société envers les personnes entendant des voix les aiderait à accepter leurs voix. La discrimination et l’exclusion doivent cesser</li>
                    </ul>
                </section>
            </div>
        )
    }
}
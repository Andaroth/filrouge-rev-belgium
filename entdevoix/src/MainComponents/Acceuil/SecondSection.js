import React from 'react';

export default class SecondSection extends React.Component {
    render() {
        return (
            <div>
                <section id="secondSec" className="secondSec containerAcceuil scrollspy">
                    <h5>Une nouvelle approche</h5>
                    <p>Souvent, les dites hallucinations auditives ont conduit au diagnostic de “schizophrénie”.
                        Pourtant, il y a des vues contradictoires parmi les psychiatres, psychologues et les “entendeurs
                        de voix” au sujet de l’origine de l’entente de voix chez une personne.</p>
                    <p>Le réseau est ouvert à toutes les opinions, et nous acceptons toute explication donnée par
                        l’entendeur de voix. Les groupes d’entendeurs avec leur facilitateur aident à comprendre ce
                        pourquoi, et dans bien des cas, les voix s’estompent, disparaissent, ou deviennent tout à fait
                        gérables.</p>
                    <p>De manière usuelle, l’entendeur de voix dit schizophrène reçoit une assez lourde médication, mais
                        les voix ne disparaissent pas pour autant.</p>
                    <p>Aujourd’hui, de plus en plus de psychiatres et psychologues, surtout en milieu anglo-saxon où
                        cette nouvelle approche est bien ancrée, explorent les significations de l’apparition de voix.
                        Les entendeurs de voix sont encouragés à parler de leurs voix (elles sont souvent plurielles).
                        La clé réside souvent dans le “contenu” de ces voix et parfois de leur provenance.</p>
                    <h5>Qu’est-ce qu’entendre des voix ?</h5>
                    <p><strong>Pour celui qui entend :</strong></p>
                    <ul className="accUl">
                        <li className="accLi">C’est la même chose qu’entendre quelqu’un parler à voix haute à côté de vous, mais il n’y a personne. C’est très perturbant.</li>
                        <li className="accLi">Il y a beaucoup de façons différentes d'entendre des voix. Les voix peuvent être entendues à l'intérieur de la tête, à l'extérieur la tête, ou même dans le corps. Cela peut être une voix ou plusieurs voix. La voix peut vous parler ou parler de vous.</li>
                        <li className="accLi">Il y a aussi d'autres façons d'entendre des voix. Quelques personnes, par exemple, ont des pensées non verbales, des images et des visions, des goûts, des odeurs ou un contact touché.</li>
                    </ul>
                    <p><strong>Nous leur disons :</strong></p>
                    <ul className="accUl">
                        <li className="accLi">« accepte que tes voix sont réelles et t’appartiennent »</li>
                        <li className="accLi">« accepte que ce que te disent tes voix peut avoir une signification basée sur ton expérience de vie »</li>
                    </ul>
                </section>
            </div>
        )
    }
}
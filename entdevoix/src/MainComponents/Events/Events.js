import React from 'react';
import Oreille from '../../Assets/Images/ear-913789_640.jpg';

export default class Events extends React.Component {
    render() {
        return (
            <div className="Container Form containerAcceuil">
                <h4>Events</h4>
                <section id="Event1">
                    <h5>Le 8ème congrès international des entendeurs de voix</h5>
                    <p>Le Congrès mondial sur l’entente de voix est organisé chaque année depuis 2009 conjointement par
                        Intervoice et un Réseau national sur l’entente de voix.
                        Les précédents pays ayant accueilli ce congrès sont les Pays-Bas, le Royaume Uni, l’Italie,
                        l’Australie, la Grèce et l’Espagne. En 2017, il se tiendra aux Etats-Unis.<br/>
                        Du 19 au 22 octobre 2016, le REV France a accueilli ce Congrès qui a rassemblé plus de 300
                        personnes de tous horizons et convictions autour d’une perspective commune : Changer l’Histoire
                        en retissant nos histoires !</p>
                    <img id="imgEvent1" src="http://www.jim.fr/e-docs/00/02/6B/23/carac_photo_1.jpg"/>
                </section>
                <section id="Event2">
                    <h5>Le 9ème congrès international des entendeurs de voix</h5>
                    <p>Entendre des voix Etats-Unis est fier de présenter le 9e Congrès mondial Hearing Voices : Une
                        révolution de Unseen voix. Le Congrès aura lieu du 16 au 18 Août 2017 à l' Université de Boston
                        à Boston, Massachusetts, États-Unis.<br/>
                        Plus d'infos sur leur site</p>
                    <img id="imgEvent2" src={Oreille}/>
                </section>
                <section id="Event3">
                    <h5>J’entends des voix !</h5>
                    <p>Le Réseau « Entendre-des-Voix » REV-Belgium vous invite à venir partager vos interrogations et
                        témoignages autour d’une expérience encore taboue et méconnue, l’entente de voix.</p>
                </section>
                <section id="Event4">
                    <h5>Pourquoi une conférence-partage?</h5>
                    <p>Au-delà des groupes d’entraide, le REV-Belgium considère qu’il est important de faire évoluer le
                        regard porté sur ces phénomènes encore largement facteurs de stigmatisation et d’exclusion.
                        Peut-être vous, ou un proche, faites cette expérience sans savoir à qui en parler ?</p>
                    <ul className="accUl">
                        <li className="accLi">avez-vous des questions sans personne avec qui les partager ?</li>
                        <li className="accLi">avez-vous un témoignage à apporter ?</li>
                        <li className="accLi">êtes-vous tout simplement curieux d’en savoir plus sur ces phénomènes et
                            l’approche développée au sein du REV ?
                        </li>
                    </ul>
                    <p>Quelle que soit votre démarche, vous êtes bienvenu.</p>
                </section>
                <h5>Comment s’inscrire ?</h5>
                <p>Venez tout simplement…</p>
                <img id="EventImg" alt="union" src="https://rev-belgium.000webhostapp.com/images/apropos.png"/>
            </div>
        )
    }
}
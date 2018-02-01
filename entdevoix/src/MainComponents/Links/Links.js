import React from 'react';
import {Row, Col} from 'react-materialize';

export default class Liens extends React.Component {
    render() {
        return (
            <div className='backgroundLinks'>
                <div className="Container Form containerAcceuil Entendeurs">
                    <h4>Émission radio</h4>
                    <p>Lundi 16 Février 2015 à 17h sur Radio Panik (105.4 FM), l'émission Psylence Radio accueillait le
                        REV-Belgium.

                        Aujourd’hui, l’équipe de PsylenceRadio se transforme en vendeurs de REV. Une petite voix me dit
                        que vous pensez que l’orthographe se perd. Détrompez-vous ! Le REV, ce sont les initiales du
                        Réseau des Entendeurs de Voix. Groupe d’entraide mais pas que, c’est aussi un réseau porteur de
                        voix (tiens ! Encore elles ?) afin de faire évoluer les regards sur ces phénomènes souvent
                        stigmatisés ou facteurs d’exclusion.

                        "Quelle voix de rev" (Radio Panik ~ Psylence 2015)</p>
                    <div>
                        <audio ref="audio_tag" src="http://www.rev-belgium.org/downloads/psylence.mp3" controls
                               controls/>
                    </div>
                    <h4>Articles</h4>
                    <Row>
                        <b>"Prêter l'oreille à ses voix" par Matthieu Cornélis, En Marche, 20 Octobre 2016</b>
                        <Col s={8}>
                            <p>Entendre des voix est traditionnellement
                                présenté comme le symptôme d'une maladie mentale
                                - singulièrement la schizophrénie - qu'il faut
                                à tout prix supprimer. Selon certains thérapeutes,
                                cette action radicale est rarement efficace
                                car elle enferme la personne dans une situation
                                sans issue et l'isole dans sa souffrance.</p>
                            <p>Pour lire l'article cliquer <a
                                href="http://www.enmarche.be/preter-l-oreille-a-ses-voix.htm?from=sante">ici</a></p>
                        </Col>
                        <Col s={4}>
                            <img src="http://www.rev-belgium.org/images/en_marche.jpg"/>

                        </Col>
                    </Row>
                    <Row>
                        <b>World Hearing Voices Congress, Madrid, 2015</b>
                        <Col s={4}>
                            <img src="http://www.rev-belgium.org/images/madrid2015.jpg"/>
                        </Col>
                        <Col s={8}>
                            <p>
                                Un de nos membres, Jean-Marc Priels,
                                a participé au 7ème congrès mondial
                                des réseaux d'entendeurs de voix
                                au World Hearing Voices Congress
                                qui s'est tenu à Madrid les 6-7 novembre 2015.
                                Il nous propose ici son compte-rendu;
                                nous l'en remercions.</p>
                            <p>Pour lire l'article cliquer <a
                                href="http://www.rev-belgium.org/downloads/Intervoices_2015.pdf">ici</a></p>
                        </Col>
                    </Row>
                    <Row>
                        <b>Un nouvel article de Philippe LAMBERT, publié dans la revue Moustique (21 octobre 2015)</b>
                        <Col s={8}>
                            <p>Entendre des voix est traditionnellement
                                présenté comme le symptôme d'une maladie mentale
                                - singulièrement la schizophrénie - qu'il faut
                                à tout prix supprimer. Selon certains thérapeutes,
                                cette action radicale est rarement efficace
                                car elle enferme la personne dans une situation
                                sans issue et l'isole dans sa souffrance.</p>
                            <p>Pour lire l'article cliquer <a
                                href="http://www.rev-belgium.org/downloads/moustique2015.pdf">ici</a></p>

                        </Col>
                        <Col s={4}>
                            <img src="http://www.rev-belgium.org/images/moustique2015.jpg"/>
                        </Col>
                    </Row>
                    <Row>
                        <b>Un article de Philippe LAMBERT, publié dans la revue Athena (n°311, mai 2015)</b>
                        <Col s={4}>
                            <img src="http://www.rev-belgium.org/images/athena311.jpg"/>
                        </Col>
                        <Col s={8}>
                            <p>Entendre des voix est traditionnellement
                                présenté comme le symptôme d'une maladie mentale
                                - singulièrement la schizophrénie - qu'il faut
                                à tout prix supprimer. Selon certains thérapeutes,
                                cette action radicale est rarement efficace
                                car elle enferme la personne dans une situation
                                sans issue et l'isole dans sa souffrance.</p>
                            <p>Pour lire l'article cliquer <a
                                href="http://www.rev-belgium.org/downloads/athena311.pdf">ici</a></p>
                        </Col>

                    </Row>
                    <b>Un autre article de Philippe LAMBERT, publié sur le site Réflexions (juin 2015)</b>
                    <p>Entendre des voix est traditionnellement
                        présenté comme le symptôme d'une maladie mentale
                        - singulièrement la schizophrénie - qu'il faut
                        à tout prix supprimer. Selon certains thérapeutes,
                        cette action radicale est rarement efficace
                        car elle enferme la personne dans une situation
                        sans issue et l'isole dans sa souffrance.</p>
                    <img src="http://www.rev-belgium.org/images/voix00.jpg"/>
                    <p>Pour lire l'article cliquer <a
                        href="http://www.rev-belgium.org/downloads/voix00.pdf">ici</a> ou
                        voir le site cliquer <a
                            href="http://reflexions.ulg.ac.be/cms/c_390091/fr/des-voix-dans-la-tete">ici</a></p>
                    <h4>Liens</h4>
                    <ul>
                        <li><a href="http://www.revfrance.org/spip.php?rubrique4">REV France</a></li>
                        <li><a href="http://www.grepsy.ch/">Réseau suisse</a></li>
                        <li><a href="http://www.revquebecois.org/">Réseau québequois</a></li>
                        <li><a href="http://www.hearingvoicesusa.org/">Hearing Voice USA</a></li>
                        <li><a href="https://www.facebook.com/Hearing.Voices.USA">Page Facebook de Hearing Voice
                            USA</a>
                        </li>
                        <li><a href="http://www.autrelieu.be/fr/index.asp">Autrelieu</a></li>
                        <li><a href="http://www.psytoyens.be/">Psytoyens</a></li>
                        <li><a href="http://www.psycause.info/">Psycause</a></li>
                        <li><a href="http://www.intervoiceonline.org/">InterVoice</a></li>
                        <li><a href="http://www.hearing-voices.org/">Hearing-voices</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}



import React from 'react';
import Voice from './Voice';
import {Row, Col, Button, Icon} from 'react-materialize';
import Book from '../../Assets/Images/1280px-Question_book-new.svg.png';
import Marius from '../../Assets/Images/mariusromme.jpg';
import Sandra from '../../Assets/Images/sandraescher.jpg';

export default class History extends React.Component {
    constructor() {
        super();
        this.state = {
            showHis: false,
        }
    }

    ShowMore(e) {
        e.preventDefault();
        this.setState({showHis: !this.state.showHis});
    }


    render() {
        return (
            <div className="histoire">
                <div className="Container Form containerAcceuil">
                    <h4>Histoire</h4>
                    <Row>
                        <Col l={6} s={12}>
                            <p>Depuis longtemps, il est reconnu qu’un pourcentage élevé de la population générale a un
                                jour ou
                                l’autre fait l’expérience d’une entente de voix, parfois brève et occasionnelle, surtout
                                en
                                période de deuil, divorce ou de séparation. C’est aussi le cas pour les personnes étant
                                dans des
                                circonstances extrêmes, par exemple, 80 pour cent de personnes ayant subi une torture
                                ont
                                halluciné pendant leur épreuve (Amnesty International) ; le phénomène est également
                                constaté
                                chez les navigateurs de longue distance (Bennett, 1972). Dans de tels cas, il n'existe
                                aucune
                                preuve de la présence de la maladie mentale et c’est souvent bien le contraire. Une
                                recherche
                                épidémiologique plus récente à Baltimore, sur une population de 15.000 personnes, a
                                révélé que
                                10 - 15 pour cent des personnes interrogées ont déclaré avoir entendu des voix sur une
                                longue
                                période de temps, et seulement un tiers des personnes interrogées ont déclaré avoir subi
                                des
                                effets négatifs (Y. Tien).</p></Col>
                        <Col l={6} s={12}>
                            <img className="book livre" src={Book} alt="livre"/>
                            <p float="right">Des recherches ultérieures plus poussées en 1991 ont révélé que de nombreux
                                cas d’entente
                                de
                                voix ne répondaient pas aux critères d'un diagnostic psychiatrique (Eaton). De manière
                                significative, les recherches plus récentes du Prof. Romme, sur des entendeurs de voix,
                                patients
                                ou non-patients ont montré que les deux groupes de même nombre, entendent des voix
                                négatives et
                                positives. La différence réside principalement dans la façon dont les deux groupes
                                réagissent à
                                l’entente de voix ; les non- patients n’ayant pas peur des voix ; ces derniers ont été
                                beaucoup
                                moins bouleversé que les patients.</p>
                            <Button onClick={this.ShowMore.bind(this)} id="lireMore">Lire la suite<Icon
                                small>keyboard_arrow_right</Icon></Button>
                        </Col>
                    </Row>
                    {this.state.showHis && <Voice />}
                    <h4>Les fondateurs</h4>
                    <Row>
                        <Col s={12} l={6}>
                            <h5>Marius Romme</h5>
                            <img className="tete book" alt="Marius" src={Marius}/>
                            <p>Psychiatre néerlandais, est surtout connu pour son travail sur l’entente de voix
                                (hallucinations
                                auditives), il est le fondateur et le principal théoricien du mouvement sur l’entente de
                                voix.
                                De 1974 à 1999, il a été professeur de psychiatrie, spécialisé en psychiatrie sociale, à
                                la
                                faculté de médecine de l’Université de Maastricht et consultant au Centre de santé
                                mentale
                                communautaire de Maastricht. Pour Marius Romme, les délires, entendre des voix et avoir
                                des
                                hallucinations, ne sont pas liés à une maladie, mais peuvent être des réactions à des
                                événements
                                traumatiques et troublants dans la vie.</p>
                        </Col>
                        <Col s={12} l={6}>
                            <h5>Sandra Escher</h5>
                            <img className="tete book" alt="Sandra" src={Sandra}/>
                            <p>Elle est formée à l'École de journalisme de Utrecht, ensuite, elle travaille au
                                département de
                                psychiatrie sociale à l’Université de Maastricht. Elle travaille en collaboration avec
                                Marius
                                Romme sur le projet des ententes de voix. Elle a organisé huit congrès annuels sur le
                                sujet et
                                aidé nombre d’entendeurs de voix à écrire leurs expériences. Elle a passé son doctorat
                                avec son
                                son étude sur 80 enfants entendeurs de voix et a écrit « Children hearing voices ».
                                Ensemble,
                                ils ont publié de nombreux livres dont « Making sense of voices : a guide for mental
                                health
                                professionals working with voices hearers » et « Accepting voices » ou encore « Living
                                with
                                voices : 50 stories of recovery ».</p>
                        </Col>
                    </Row>
                    <h5>Personnages célèbres qui entendaient des voix :</h5>
                    <p>Socrate, Moïse, Mohammed, Jeanne d’Arc, Ste Thérèse d’Avila, Amélie Nothomb, Zinedine Zidane,
                        Swedenborg, Carl Jung, Anthony Hopkins, Gandhi et bien d’autres encore.<br/>
                        Vous pouvez consulter <a href="http://www.rev-belgium.org/downloads/express.pdf" ref="external" alt="pdf">un article paru dans l'Express</a></p>
                </div>
            </div>
        )
    }
}
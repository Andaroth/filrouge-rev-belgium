import React from 'react';
import Voice from './Voice';
import Fondateurs from "./Fondateurs";
import {Row, Col} from 'react-materialize';

export default class History extends React.Component {
    render() {
        return (
            <div className="histoire">
                <div className="Container Form containerAcceuil">
                    <h4>Histoire</h4>
                    <Row>
                        <Col s={6}>
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
                        <Col s={6}>
                            <p>Des recherches ultérieures plus poussées en 1991 ont révélé que de nombreux cas d’entente
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
                        </Col>
                    </Row>
                    <h5>Que vous disent les voix et que peuvent-elles faire ?</h5>

                    <h5>Les fondateurs</h5>

                    <h5>Personnages célèbres qui entendaient des voix :</h5>
                    <p>Socrate, Moïse, Mohammed, Jeanne d’Arc, Ste Thérèse d’Avila, Amélie Nothomb, Zinedine Zidane,
                        Swedenborg, Carl Jung, Anthony Hopkins, Gandhi et bien d’autres encore.<br/>
                        Vous pouvez consulter <a>un article paru dans l'Express</a></p>
                </div>
            </div>
        )
    }
}
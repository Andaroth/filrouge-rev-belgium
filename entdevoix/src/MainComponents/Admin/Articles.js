import React from 'react';
import {Row,Col,Button} from 'react-materialize';
import app from '../../Base';

export default class Articles extends React.Component {

    render() {
        console.log("<Events />");
        return (
            <div id="links" className="col s12">
                <h5>Modifier l'entête</h5>
                <div className="container">
                    <form action="#">
                        <textarea className="materialize-textarea longtextadmin" name="" id="" cols="30" rows="10">
                        Lundi 16 Février 2015 à 17h sur Radio Panik (105.4 FM), l'émission Psylence Radio accueillait le REV-Belgium. Aujourd’hui, l’équipe de PsylenceRadio se transforme en vendeurs de REV. Une petite voix me dit que vous pensez que l’orthographe se perd. Détrompez-vous ! Le REV, ce sont les initiales du Réseau des Entendeurs de Voix. Groupe d’entraide mais pas que, c’est aussi un réseau porteur de voix (tiens ! Encore elles ?) afin de faire évoluer les regards sur ces phénomènes souvent stigmatisés ou facteurs d’exclusion. "Quelle voix de rev" (Radio Panik ~ Psylence 2015)
                        </textarea>
                        <Row className="center-align">
                                <Col s={6}>
                                    <Button waves="light"><i className="material-icons">cancel</i></Button>
                                </Col>
                                <Col s={6}>
                                    <Button waves="light"><i className="material-icons">send</i></Button>
                                </Col>
                            </Row>
                    </form>
                </div>
                <h5>Gérer les articles</h5>
                <div className="container">
                    <ul className="collapsible" data-collapsible="accordion">
                        <li>
                            <div className="collapsible-header">"Prêter l'oreille à ses voix" par Matthieu Cornélis, En Marche, 20 Octobre 2016</div>
                            <div className="collapsible-body">
                            <form action="#">
                                <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                Entendre des voix est traditionnellement présenté comme le symptôme d'une maladie mentale - singulièrement la schizophrénie - qu'il faut à tout prix supprimer. Selon certains thérapeutes, cette action radicale est rarement efficace car elle enferme la personne dans une situation sans issue et l'isole dans sa souffrance. Pour lire l'article cliquer ici
                                </textarea>
                                <Row className="center-align">
                                    <Col s={4}>
                                        <Button waves="light"><i className="material-icons">delete</i></Button>
                                    </Col>
                                    <Col s={4}>
                                        <Button waves="light"><i className="material-icons">cancel</i></Button>
                                    </Col>
                                    <Col s={4}>
                                        <Button waves="light"><i className="material-icons">send</i></Button>
                                    </Col>
                                </Row>
                            </form>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header">World Hearing Voices Congress, Madrid, 2015</div>
                            <div className="collapsible-body">
                            <form action="#">
                                <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                Un de nos membres, Jean-Marc Priels, a participé au 7ème congrès mondial des réseaux d'entendeurs de voix au World Hearing Voices Congress qui s'est tenu à Madrid les 6-7 novembre 2015. Il nous propose ici son compte-rendu; nous l'en remercions.
                                Pour lire l'article cliquer ici
                                </textarea>
                                <Row className="center-align">
                                    <Col s={4}>
                                        <Button waves="light"><i className="material-icons">delete</i></Button>
                                    </Col>
                                    <Col s={4}>
                                        <Button waves="light"><i className="material-icons">cancel</i></Button>
                                    </Col>
                                    <Col s={4}>
                                        <Button waves="light"><i className="material-icons">send</i></Button>
                                    </Col>
                                </Row>
                            </form>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header">Un nouvel article de Philippe LAMBERT, publié dans la revue Moustique (21 octobre 2015)</div>
                            <div className="collapsible-body">
                            <form action="#">
                                <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                Entendre des voix est traditionnellement présenté comme le symptôme d'une maladie mentale - singulièrement la schizophrénie - qu'il faut à tout prix supprimer. Selon certains thérapeutes, cette action radicale est rarement efficace car elle enferme la personne dans une situation sans issue et l'isole dans sa souffrance.
                                Pour lire l'article cliquer ici
                                </textarea>
                                <Row className="center-align">
                                    <Col s={4}>
                                        <Button waves="light"><i className="material-icons">delete</i></Button>
                                    </Col>
                                    <Col s={4}>
                                        <Button waves="light"><i className="material-icons">cancel</i></Button>
                                    </Col>
                                    <Col s={4}>
                                        <Button waves="light"><i className="material-icons">send</i></Button>
                                    </Col>
                                </Row>
                            </form>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header">Un nouvel article de Philippe LAMBERT, publié dans la revue Moustique (21 octobre 2015)</div>
                            <div className="collapsible-body">
                            <form action="#">
                                <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                Entendre des voix est traditionnellement présenté comme le symptôme d'une maladie mentale - singulièrement la schizophrénie - qu'il faut à tout prix supprimer. Selon certains thérapeutes, cette action radicale est rarement efficace car elle enferme la personne dans une situation sans issue et l'isole dans sa souffrance.
                                Pour lire l'article cliquer ici
                                </textarea>
                                <Row className="center-align">
                                    <Col s={4}>
                                        <Button waves="light"><i className="material-icons">delete</i></Button>
                                    </Col>
                                    <Col s={4}>
                                        <Button waves="light"><i className="material-icons">cancel</i></Button>
                                    </Col>
                                    <Col s={4}>
                                        <Button waves="light"><i className="material-icons">send</i></Button>
                                    </Col>
                                </Row>
                            </form>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header">Un nouvel article de Philippe LAMBERT, publié dans la revue Moustique (21 octobre 2015)</div>
                            <div className="collapsible-body">
                            <form action="#">
                                <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                Entendre des voix est traditionnellement présenté comme le symptôme d'une maladie mentale - singulièrement la schizophrénie - qu'il faut à tout prix supprimer. Selon certains thérapeutes, cette action radicale est rarement efficace car elle enferme la personne dans une situation sans issue et l'isole dans sa souffrance.
                                Pour lire l'article cliquer ici
                                </textarea>
                                <Row className="center-align">
                                    <Col s={4}>
                                        <Button waves="light"><i className="material-icons">delete</i></Button>
                                    </Col>
                                    <Col s={4}>
                                        <Button waves="light"><i className="material-icons">cancel</i></Button>
                                    </Col>
                                    <Col s={4}>
                                        <Button waves="light"><i className="material-icons">send</i></Button>
                                    </Col>
                                </Row>
                            </form>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

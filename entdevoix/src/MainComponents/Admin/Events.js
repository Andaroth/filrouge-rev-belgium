import React from 'react';
import {Row,Col,Button} from 'react-materialize';
import app from '../../Base';

export default class Events extends React.Component {

    render() {
        console.log("<Events />");
        return (
            <div id="events" className="col s12">
                            <h5>Gérer les évènements</h5>
                            <div className="container">
                                <ul className="collapsible" data-collapsible="accordion">
                                    <li>
                                        <div className="collapsible-header">Le 8ème congrès international des entendeurs de voix</div>
                                        <div className="collapsible-body">
                                        <form action="#">
                                            <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                            Le Congrès mondial sur l’entente de voix est organisé chaque année depuis 2009 conjointement par Intervoice et un Réseau national sur l’entente de voix. Les précédents pays ayant accueilli ce congrès sont les Pays-Bas, le Royaume Uni, l’Italie, l’Australie, la Grèce et l’Espagne. En 2017, il se tiendra aux Etats-Unis.
                                            &#60;&#98;&#114;&#47;&#62;Du 19 au 22 octobre 2016, le REV France a accueilli ce Congrès qui a rassemblé plus de 300 personnes de tous horizons et convictions autour d’une perspective commune : Changer l’Histoire en retissant nos histoires !
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
                                        <div className="collapsible-header">Le 9ème congrès international des entendeurs de voix</div>
                                        <div className="collapsible-body">
                                        <form action="#">
                                            <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                            Entendre des voix Etats-Unis est fier de présenter le 9e Congrès mondial Hearing Voices : Une révolution de Unseen voix. Le Congrès aura lieu du 16 au 18 Août 2017 à l' Université de Boston à Boston, Massachusetts, États-Unis.
                                            &#60;&#98;&#114;&#47;&#62;Plus d'infos sur leur site
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
                            <h5>Modifier la page</h5>
                            <div className="container">
                                <form action="#">
                                    <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
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
                        </div>
        );
    }
}

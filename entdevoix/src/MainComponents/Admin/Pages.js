import React from 'react';
import {Row,Col,Button} from 'react-materialize';
import app from '../../Base';

export default class Pages extends React.Component {

    render() {
        console.log("<Mailist />");
        return (
            <div id="pages" className="col s12">
                <h5>Modifier les pages</h5>
                <Row node="article" className="white">
                    <form action="#">
                        <h6>Accueil</h6>
                        <div className="input-field">
                            <textarea className="materialize-textarea longtextadmin" name="content" id="" cols="30" rows="10">
                            </textarea>
                        </div>
                        <Row className="center-align">
                            <Col s={6}>
                                <Button waves="light"><i className="material-icons">cancel</i></Button>
                            </Col>
                            <Col s={6}>
                                <Button waves="light"><i className="material-icons">send</i></Button>
                            </Col>
                        </Row>
                    </form>
                </Row>
                <Row node="article" className="white">
                    <form action="#">
                        <h6>À propos</h6>
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
                </Row>
                <Row node="article" className="white">
                    <form action="#">
                        <h6>Entendeurs</h6>
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
                </Row>
                <Row node="article" className="white">
                    <form action="#">
                        <h6>Histoire</h6>
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
                </Row>
            </div>
        );
    }
}

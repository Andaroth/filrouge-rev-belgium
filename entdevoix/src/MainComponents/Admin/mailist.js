import React from 'react';
import {Row,Col,Button} from 'react-materialize';

export default class Mailist  extends React.Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return(
            <div id="mails" className="col s12">
            <h5>Liste des mails reçus</h5>
            <div className="container">
                <ul className="collapsible" data-collapsible="accordion">
                {
                    this.props.map(
                        <li>
                            <div className="collapsible-header">{this.props.nom}</div>
                            <div className="collapsible-body">
                            <form action="#">
                                <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                {this.props.message}</textarea>
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
                    )
                }
                    
                </ul>
            </div>
        </div>
        )
    }
}

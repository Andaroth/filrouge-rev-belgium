import React from 'react';
import {Row, Input, Icon, Button} from 'react-materialize';
import Rebase from 're-base';
import app from '../../Base';

var base = Rebase.createClass(app.database());

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contact: {
                nom: '',
                email: '',
                message: ''
            }
        };
        /*
                this.SendMessage = this.SendMessage.bind(this);
        */
    }

    componentDidMount() {
        base.syncState(`/`, {
            context: this,
            state: 'contact',
            asArray: true
        });
    }

    /*SendMessage(event) {
        event.preventDefault();
        this.setState({
            contact: {
                nom: this.name.state.value,
                email: this.mail.state.value,
                message: this.msg.state.value
            }
        });
        this.name.value = '';
        console.log(this.state);
    }*/

    addBear() {
        let immediatelyAvailableReference = base.push('contact', {
            data: {
                nom: this.name.state.value,
                email: this.mail.state.value,
                message: this.msg.state.value
            },
        });
        immediatelyAvailableReference.key;
    }

    render() {
        return (
            <div className="Container Form">
                <h4 className="contact">Contact</h4>
                <div className="containerForm">
                    <Row className="contactForm">
                        <form>
                            <Input s={12} label="Nom" validate
                                   ref={(e) => this.name = e}><Icon>account_circle</Icon></Input>
                            <Input s={12} label="Email" validate type='email'
                                   ref={(e) => this.mail = e}><Icon>mail</Icon></Input>
                            <Input s={12} label="Votre Message"
                                   ref={(e) => this.msg = e}><Icon>message</Icon></Input>
                            <Button onClick={this.addBear.bind(this)} id="BtnForm" children
                                    waves='light'>Envoyer<Icon>send</Icon></Button>
                        </form>
                    </Row>
                </div>
            </div>
        )
    }
}
import React from 'react';
import {Row, Input, Icon, Button} from 'react-materialize';

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            email: '',
            message: '',
        };
        this.SendMessage = this.SendMessage.bind(this);
    }

    SendMessage(event) {
        event.preventDefault();
        if (this.state.message.trim() === "" || this.state.email.trim() === "") {
            console.log('error');
        } else {
            console.log(this.state);
            this.setState({
                nom: '',
                email: '',
                message: ''
            })
        }
    }

    newMessage(event) {
        this.setState({message: event.target.value});
    }

    newMail(event) {
        this.setState({email: event.target.value});
    }

    newName(event) {
        this.setState({nom: event.target.value});
    }

    render() {
        return (
            <div className="Container Form">
                <h4 className="contact">Contact</h4>
                <div className="containerForm">
                    <Row className="contactForm">
                        <form onSubmit={this.SendMessage}>
                            <Input s={12} label="Nom" validate
                                   value={this.state.nom}
                                   onChange={this.newName.bind(this)}><Icon>account_circle</Icon></Input>
                            <Input s={12} label="Email" validate type='email'
                                   value={this.state.email}
                                   onChange={this.newMail.bind(this)}><Icon>mail</Icon></Input>
                            <Input s={12} label="Votre Message"
                                   value={this.state.message}
                                   onChange={this.newMessage.bind(this)}><Icon>message</Icon></Input>
                            <Button id="BtnForm" children waves='light'>Envoyer<Icon>send</Icon></Button>
                        </form>
                    </Row>
                </div>
            </div>
        )
    }
}
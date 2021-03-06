import React from 'react';
import {Row, Input, Icon, Button} from 'react-materialize';
import Rebase from 're-base';
import app from '../../Base';
import Error from './Error';
import Send from './Send';

var base = Rebase.createClass(app.database());

export default class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contact: {
                nom: '',
                email: '',
                message: ''
            },
            error: false,
            send: false,
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

    addMessage(event) {
        event.preventDefault();
        console.log(event.target);
        const name = this.refs.name.state.value ? this.refs.name.state.value : "";
        const email = this.refs.mail.state.value;
        let message = this.refs.msg.state.value ? this.refs.msg.state.value : "";

        if ((email === "undefined") ||
            (name === "undefined" || name.trim() === "") ||
            (message === "undefined" || message.trim() === "")) {
            console.log("erreur");
            this.setState({error: true});
            setTimeout(function(){this.setState({error: false});}.bind(this),2000);
        } else {

            let immediatelyAvailableReference = base.push('contact', {
                data: {
                    type: "mail",
                    nom: name,
                    email: email,
                    message: message
                },
            });
            if(immediatelyAvailableReference.key){
                this.refs.msg.state.value = "";
                document.getElementById('inputchiant').value = "";
                this.setState({send:true});
                setTimeout(function(){this.setState({send: false});}.bind(this),2000);
            }
        }
    }


    render() {
        return (
            <div className="Container Form">
                {this.state.error && <Error/>}
                {this.state.send && <Send/>}
                <h4 className="contact">Contact</h4>
                <div className="containerForm">
                    <Row className="contactForm">
                        <form onSubmit={this.addMessage.bind(this)}>
                            <Input s={12} label="Nom" validate
                                   ref="name"><Icon>account_circle</Icon></Input>
                            <Input s={12} label="Email" validate type='email'
                                   ref="mail"><Icon>mail</Icon></Input>
                            <Input id="inputchiant" s={12} label="Votre Message"
                                   ref="msg"><Icon>message</Icon></Input>
                            <Button type={"submit"} id="BtnForm" children
                                    waves='light'>Envoyer<Icon>send</Icon></Button>
                        </form>
                    </Row>
                </div>
            </div>
        )
    }
}
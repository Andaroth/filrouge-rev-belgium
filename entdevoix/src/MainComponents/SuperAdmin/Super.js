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
                title: '',
                content: ''
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
            state: 'articles',
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
        const title = this.refs.title.state.value ? this.refs.title.state.value : "";
        let content = this.refs.content.state.value ? this.refs.content.state.value : "";

        if ((title === "undefined" || title.trim() === "") ||
            (content === "undefined" || content.trim() === "")) {
            console.log("erreur");
            this.setState({error: true});
            setTimeout(function(){this.setState({error: false});}.bind(this),2000);
        } else {

            let immediatelyAvailableReference = base.push('contact', {
                data: {
                    title: title,
                    content: content
                },
            });
            if(immediatelyAvailableReference.key){
                this.refs.content.state.value = "";
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
                            <Input s={12} label="Title" validate type='text'
                                   ref="title"><Icon>title</Icon></Input>
                            <Input id="inputchiant" s={12} label="Content"
                                   ref="content"><Icon>message</Icon></Input>
                            <Button type={"submit"} id="BtnForm" children
                                    waves='light'>Envoyer<Icon>send</Icon></Button>
                        </form>
                    </Row>
                </div>
            </div>
        )
    }
}
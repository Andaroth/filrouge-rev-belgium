import React from 'react';
import {Row, Input, Icon} from 'react-materialize';

export default class ContactForm extends React.Component {

    render() {
        const state = this.props.state;
        console.log(state);
        return (
            <div className="containerForm">
                <Row className="contactForm">
                    <Input s={6} label="Nom" validate><Icon>account_circle</Icon></Input>
                    <Input s={12} label="Email" validate type='email'><Icon>mail</Icon></Input>
                    <Input s={12} label="Votre Message"><Icon>message</Icon></Input>
                </Row>
            </div>
        )
    }
}
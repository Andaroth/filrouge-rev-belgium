import React from 'react';
import {Row,Input,Icon} from 'react-materialize';

export default class ContactForm extends React.Component {
    render() {
        return (
            <Row className="contactForm">
                <Input s={6} label="Name" validate><Icon>account_circle</Icon></Input>
                <Input s={12} label="Email" validate type='email'><Icon>mail</Icon></Input>
                <Input s={12} label="Votre Message" validate type='email'><Icon>message</Icon></Input>
            </Row>
        )
    }
}
import React from 'react';
import ContactForm from './ContactForm';

export default class Contact extends React.Component {
    render() {
        return (
            <div className="Container">
                <h4>Contact</h4>
                <ContactForm/>
            </div>
        )
    }
}
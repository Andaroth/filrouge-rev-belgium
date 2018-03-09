import React from 'react';
import {Icon} from 'react-materialize';

export default class Send extends React.Component {
    componentDidMount() {
        document.getElementById('sendForm').classList.add("errorTransition");
    }

    render() {
        return (
            <div id="sendForm">
                <Icon>done</Icon><p>Votre message a été envoyé!</p>
            </div>
        )
    }
}
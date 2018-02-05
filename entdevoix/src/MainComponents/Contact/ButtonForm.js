import React from 'react';
import {Button,Icon} from 'react-materialize';

export default class ButtonForm extends React.Component {
    render() {
        return (
            <Button onClick={this.props.SendMessage} id="BtnForm" children waves='light'>Envoyer<Icon right>send</Icon></Button>
        )
    }
}
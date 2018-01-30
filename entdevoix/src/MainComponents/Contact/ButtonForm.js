import React from 'react';
import {Button,Icon} from 'react-materialize';

export default class ButtonForm extends React.Component {
    render() {
        return (
            <Button children waves='light'>Envoyer<Icon right>send</Icon></Button>
        )
    }
}
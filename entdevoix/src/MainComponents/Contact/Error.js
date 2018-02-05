import React from 'react';
import {Icon} from 'react-materialize';

export default class Error extends React.Component {
    render() {
        return (
            <div id="errorForm">
                <Icon>warning</Icon><p>Please fill all input</p>
            </div>
        )
    }
}
import React from 'react';
import {Icon} from 'react-materialize';

export default class Error extends React.Component {
    componentDidMount() {
     document.getElementById('errorForm').classList.add("errorTransition");
    }

    render() {
        return (
            <div id="errorForm">
                <Icon>warning</Icon><p>please fill this form correctly</p>
            </div>
        )
    }
}
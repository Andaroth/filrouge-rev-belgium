import React from 'react';

export default class ContactForm extends React.Component {
    render() {
        return (
            <div className="row ">
                <form className="col s12 ">
                    <div className="input-field col s12 m4 l4 ">
                        <input id="email" type="email" className="validate"/>
                        <label htmlFor="Name" data-error="wrong" data-success="right">Nom/Prénom</label>
                    </div>
                </form>
            </div>
        )
    }
}
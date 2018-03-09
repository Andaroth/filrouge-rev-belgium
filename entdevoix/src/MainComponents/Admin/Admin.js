import React from 'react';
import {Row,Col,Button} from 'react-materialize';
import app from '../../Base';

import Pages from './Pages';
import Events from './Events';
import Articles from './Articles';
import Mailist from './Mailist';

// app = la connection à la DB ;) 

export default class Admin extends React.Component {
    constructor() {
        super()
        this.state = {mails:{}};
    }

    componentWillMount() {
        this.getMailList();
    }
    
    getMailList() {
        console.log("get mail list");
        let these = this;
        // connect to db /contact
        var addr = app.database().ref("/contact");
        // get the content
        addr.on("value", function(snap) {
            console.log("ok, value is :")
            console.log({mails:snap.val()})
            these.setState({mails:snap.val()});
            console.log("now state.mails is :")
            console.log(these.state.mails)
        });
    }

    render() {
        return (
            <div className='backgroundLinks'>
                <div className="Container Form containerAcceuil Entendeurs">
                    <h4>Panneau d'administration</h4>
                    <Row>
                        <div className="col s12">
                        <ul className="tabs">
                            <li className="tab col s3"><a className="active" href="#pages">Pages</a></li>
                            <li className="tab col s3"><a href="#events">Évènements</a></li>
                            <li className="tab col s3"><a href="#links">Articles</a></li>
                            <li className="tab col s3"><a href="#mails">Mails</a></li>
                        </ul>
                        </div>
                        {/* <Pages />
                        <Events />
                        <Articles /> */}
                        {console.log("I'm about to send this to component : ")}
                        {console.log(this.state.mails)}
                        <Mailist mails={this.state.mails} />
                    </Row>
                </div>
            </div>
        )
    }
}



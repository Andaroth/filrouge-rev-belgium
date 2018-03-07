import React from 'react';
import {Row,Col,Button} from 'react-materialize';
import Pages from './Pages';
import Events from './Events';
import Links from './Links';
import Articles from './Articles';
import Mailist from './Mailist';

// app = la connection à la DB ;) 

export default class Admin extends React.Component {

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
                        <Pages />
                        <Events />
                        <Articles />
                        <Mailist />
                    </Row>
                </div>
            </div>
        )
    }
}



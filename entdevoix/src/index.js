import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import About from './MainComponents/About/About';
import Contact from './MainComponents/Contact/Contact';
import Entendeurs from './MainComponents/Entendeurs/Entendeurs';
import Events from './MainComponents/Events/Events';
import History from './MainComponents/History/History';
import Links from './MainComponents/Links/Links';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './Assets/CSS/Nav.css';

const Root = () => {
    return (
        <Router>
            <div className="nav">
                <ul>
                    <li><Link to="/">Acceuil</Link></li>
                    <li><Link to="/About">A propos</Link></li>
                    <li><Link to="/Entendeurs">Entendeurs</Link></li>
                    <li><Link to="/Events">Evenements</Link></li>
                    <li><Link to="/History">Histoire</Link></li>
                    <li><Link to="/Links">Articles</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>

                </ul>
                <hr />
                <Switch>
                    <Route exact path='/' component={ App } />
                    <Route exact path='/About' component={ About } />
                    <Route exact path='/Contact' component={ Contact } />
                    <Route exact path='/Entendeurs' component={ Entendeurs } />
                    <Route exact path='/Events' component={ Events } />
                    <Route exact path='/History' component={ History } />
                    <Route exact path='/Links' component={ Links } />

                </Switch>
            </div>
        </Router>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();


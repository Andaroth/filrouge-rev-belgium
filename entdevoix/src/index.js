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
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import './Assets/CSS/style.css';
import {Navbar} from 'react-materialize';


const Root = () => {
    return (
        <Router>
            <div>
                <Navbar right brand="Les entendeurs de voix">
                    <NavLink to="/">Acceuil</NavLink>
                    <NavLink to="/About">A propos</NavLink>
                    <NavLink to="/Entendeurs">Entendeurs</NavLink>
                    <NavLink to="/Events">Evenements</NavLink>
                    <NavLink to="/History">Histoire</NavLink>
                    <NavLink to="/Links">Articles</NavLink>
                    <NavLink to="/Contact">Contact</NavLink>
                </Navbar>

                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route exact path='/About' component={About}/>
                    <Route exact path='/Contact' component={Contact}/>
                    <Route exact path='/Entendeurs' component={Entendeurs}/>
                    <Route exact path='/Events' component={Events}/>
                    <Route exact path='/History' component={History}/>
                    <Route exact path='/Links' component={Links}/>
                </Switch>
            </div>
        </Router>
    )
}

ReactDOM.render(<Root/>, document.getElementById('root'));
registerServiceWorker();


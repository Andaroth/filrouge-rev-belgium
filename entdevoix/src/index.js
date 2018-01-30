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
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './Assets/CSS/style.css';
import {Navbar, NavItem} from 'react-materialize';


const Root = () => {
    return (
        <Router>
            <div>
                <Navbar right brand="Les entendeurs de voix">
                    <NavItem href="/">Acceuil</NavItem>
                    <NavItem href="/About">A propos</NavItem>
                    <NavItem href="/Entendeurs">Entendeurs</NavItem>
                    <NavItem href="/Events">Evenements</NavItem>
                    <NavItem href="/History">Histoire</NavItem>
                    <NavItem href="/Links">Articles</NavItem>
                    <NavItem href="/Contact">Contact</NavItem>
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


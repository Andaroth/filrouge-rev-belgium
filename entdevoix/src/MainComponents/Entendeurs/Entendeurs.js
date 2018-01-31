import React from 'react';
import {Button} from 'react-materialize';
import Adress from './Adress';

export default class Entendeurs extends React.Component {
    constructor() {
        super();
        this.state = {
            showDiv: false
        }
    }

    showAdress(e) {
        e.preventDefault();
        this.setState({showDiv: !this.state.showDiv});
    }

    render() {
        return (
            <div className='entend'>
                <div className="Container Form containerAcceuil Entendeurs">
                    <h4>Entendeurs</h4>
                    <h5>Définition</h5>
                    <p>Il s’agit de groupes d’entraide qui permettent à ceux qui entendent des voix de sortir de leur
                        isolement pour partager en toute liberté et sans préjugé leurs expériences. Ils sont facilités
                        par
                        des personnes qui entendent des voix elles-même ou qui soutiennent activement la démarche du
                        REV.</p>
                    <h5>Pourquoi ?</h5>
                    <p>Si les voix ne sont pas considérées comme un symptôme de maladie mentale à supprimer, elles
                        peuvent
                        être parfois une expérience éprouvante. La participation à un groupe permet:</p>
                    <ul className="accUl">
                        <li className="accLi">de sortir de la stigmatisation du statut de schizophrène auquel donne
                            souvent
                            lieu l’entente de
                            voix pour retrouver une identité d’individu à part entière;
                        </li>
                        <li className="accLi">d’apprendre à mieux vivre avec ses voix grâce au partage des expériences;
                        </li>
                        <li className="accLi">de réfléchir ensemble sur le sens de ces voix qui, si elles ne sont pas en
                            soi
                            un problème,
                            peuvent être les messagères d’un problème.
                        </li>
                    </ul>
                    <h5>Comment rejoindre un groupe ?</h5>
                    <p>Il suffit de contacter par téléphone ou par mail le facilitateur du groupe que vous souhaitez
                        rejoindre, ou de vous présenter spontanément à une rencontre.</p>
                    <section id="adressBtn">
                        <h5>Nos Adresses</h5>
                            <Button onClick={this.showAdress.bind(this)} floating
                                    className='#00E3A7' waves='light'
                                    icon='help_outline'/>

                    </section>
                    {this.state.showDiv && <Adress/>}
                </div>
            </div>
        )
    }
}
import React from 'react';
import {Row, Col,Button} from 'react-materialize';
import Rebase from 're-base';
import app from '../../Base';
import Mailist from './mailist';

var base = Rebase.createClass(app.database());
// app = la connection à la DB ;) 

export default class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            pages:{},
            events:{},
            articles:{},
            mails: {}
        };        
    }
    componentDidMount() {
        // Pages list :
        // var addr = app.database().ref("/pages");
        // let these = this;
        // addr.on("value", function(snap) {
        //     console.log( "val="+JSON.stringify(snap.val()) );
        //     these.setState({pages:snap.val()});
        // });

        // Events list :
        // var addr = app.database().ref("/events");
        // let these = this;
        // addr.on("value", function(snap) {
        //     console.log( "val="+JSON.stringify(snap.val()) );
        //     these.setState({events:snap.val()});
        // });

        // Articles list :
        // var addr = app.database().ref("/articles");
        // let these = this;
        // addr.on("value", function(snap) {
        //     console.log( "val="+JSON.stringify(snap.val()) );
        //     these.setState({articles:snap.val()});
        // });

        // Mail list :
        var addr = app.database().ref("/contact");
        let these = this;
        addr.on("value", function(snap) {
            console.log( "val="+JSON.stringify(snap.val()) );
            these.setState({mails:snap.val()});
        });
    }

    render() {
        if(this.state.mails){
            console.log("boulette:"+JSON.stringify(this.state.mails));
        }
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
                        <div id="pages" className="col s12">
                            <h5>Modifier les pages</h5>
                            <Row node="article" className="white">
                                <form action="#">
                                    <h6>Accueil</h6>
                                    <div className="input-field">
                                        <textarea className="materialize-textarea longtextadmin" name="content" id="" cols="30" rows="10">
                                        </textarea>
                                    </div>
                                    <Row className="center-align">
                                        <Col s={6}>
                                            <Button waves="light"><i className="material-icons">cancel</i></Button>
                                        </Col>
                                        <Col s={6}>
                                            <Button waves="light"><i className="material-icons">send</i></Button>
                                        </Col>
                                    </Row>
                                </form>
                            </Row>
                            <Row node="article" className="white">
                                <form action="#">
                                    <h6>À propos</h6>
                                    <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                    </textarea>
                                    <Row className="center-align">
                                        <Col s={6}>
                                            <Button waves="light"><i className="material-icons">cancel</i></Button>
                                        </Col>
                                        <Col s={6}>
                                            <Button waves="light"><i className="material-icons">send</i></Button>
                                        </Col>
                                    </Row>
                                </form>
                            </Row>
                            <Row node="article" className="white">
                                <form action="#">
                                    <h6>Entendeurs</h6>
                                    <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                    </textarea>
                                    <Row className="center-align">
                                        <Col s={6}>
                                            <Button waves="light"><i className="material-icons">cancel</i></Button>
                                        </Col>
                                        <Col s={6}>
                                            <Button waves="light"><i className="material-icons">send</i></Button>
                                        </Col>
                                    </Row>
                                </form>
                            </Row>
                            <Row node="article" className="white">
                                <form action="#">
                                    <h6>Histoire</h6>
                                    <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                    </textarea>
                                    <Row className="center-align">
                                        <Col s={6}>
                                            <Button waves="light"><i className="material-icons">cancel</i></Button>
                                        </Col>
                                        <Col s={6}>
                                            <Button waves="light"><i className="material-icons">send</i></Button>
                                        </Col>
                                    </Row>
                                </form>
                            </Row>
                        </div>
                        <div id="events" className="col s12">
                            <h5>Gérer les évènements</h5>
                            <div className="container">
                                <ul className="collapsible" data-collapsible="accordion">
                                    <li>
                                        <div className="collapsible-header">Le 8ème congrès international des entendeurs de voix</div>
                                        <div className="collapsible-body">
                                        <form action="#">
                                            <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                            Le Congrès mondial sur l’entente de voix est organisé chaque année depuis 2009 conjointement par Intervoice et un Réseau national sur l’entente de voix. Les précédents pays ayant accueilli ce congrès sont les Pays-Bas, le Royaume Uni, l’Italie, l’Australie, la Grèce et l’Espagne. En 2017, il se tiendra aux Etats-Unis.
                                            &#60;&#98;&#114;&#47;&#62;Du 19 au 22 octobre 2016, le REV France a accueilli ce Congrès qui a rassemblé plus de 300 personnes de tous horizons et convictions autour d’une perspective commune : Changer l’Histoire en retissant nos histoires !
                                            </textarea>
                                            <Row className="center-align">
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">delete</i></Button>
                                                </Col>
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">cancel</i></Button>
                                                </Col>
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">send</i></Button>
                                                </Col>
                                            </Row>
                                        </form>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header">Le 9ème congrès international des entendeurs de voix</div>
                                        <div className="collapsible-body">
                                        <form action="#">
                                            <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                            Entendre des voix Etats-Unis est fier de présenter le 9e Congrès mondial Hearing Voices : Une révolution de Unseen voix. Le Congrès aura lieu du 16 au 18 Août 2017 à l' Université de Boston à Boston, Massachusetts, États-Unis.
                                            &#60;&#98;&#114;&#47;&#62;Plus d'infos sur leur site
                                            </textarea>
                                            <Row className="center-align">
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">delete</i></Button>
                                                </Col>
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">cancel</i></Button>
                                                </Col>
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">send</i></Button>
                                                </Col>
                                            </Row>
                                        </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <h5>Modifier la page</h5>
                            <div className="container">
                                <form action="#">
                                    <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                    </textarea>
                                    <Row className="center-align">
                                        <Col s={6}>
                                            <Button waves="light"><i className="material-icons">cancel</i></Button>
                                        </Col>
                                        <Col s={6}>
                                            <Button waves="light"><i className="material-icons">send</i></Button>
                                        </Col>
                                    </Row>
                                </form>
                            </div>
                        </div>
                        <div id="links" className="col s12">
                            <h5>Modifier l'entête</h5>
                            <div className="container">
                                <form action="#">
                                    <textarea className="materialize-textarea longtextadmin" name="" id="" cols="30" rows="10">
                                    Lundi 16 Février 2015 à 17h sur Radio Panik (105.4 FM), l'émission Psylence Radio accueillait le REV-Belgium. Aujourd’hui, l’équipe de PsylenceRadio se transforme en vendeurs de REV. Une petite voix me dit que vous pensez que l’orthographe se perd. Détrompez-vous ! Le REV, ce sont les initiales du Réseau des Entendeurs de Voix. Groupe d’entraide mais pas que, c’est aussi un réseau porteur de voix (tiens ! Encore elles ?) afin de faire évoluer les regards sur ces phénomènes souvent stigmatisés ou facteurs d’exclusion. "Quelle voix de rev" (Radio Panik ~ Psylence 2015)
                                    </textarea>
                                    <Row className="center-align">
                                            <Col s={6}>
                                                <Button waves="light"><i className="material-icons">cancel</i></Button>
                                            </Col>
                                            <Col s={6}>
                                                <Button waves="light"><i className="material-icons">send</i></Button>
                                            </Col>
                                        </Row>
                                </form>
                            </div>
                            <h5>Gérer les articles</h5>
                            <div className="container">
                                <ul className="collapsible" data-collapsible="accordion">
                                    <li>
                                        <div className="collapsible-header">"Prêter l'oreille à ses voix" par Matthieu Cornélis, En Marche, 20 Octobre 2016</div>
                                        <div className="collapsible-body">
                                        <form action="#">
                                            <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                            Entendre des voix est traditionnellement présenté comme le symptôme d'une maladie mentale - singulièrement la schizophrénie - qu'il faut à tout prix supprimer. Selon certains thérapeutes, cette action radicale est rarement efficace car elle enferme la personne dans une situation sans issue et l'isole dans sa souffrance. Pour lire l'article cliquer ici
                                            </textarea>
                                            <Row className="center-align">
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">delete</i></Button>
                                                </Col>
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">cancel</i></Button>
                                                </Col>
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">send</i></Button>
                                                </Col>
                                            </Row>
                                        </form>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header">World Hearing Voices Congress, Madrid, 2015</div>
                                        <div className="collapsible-body">
                                        <form action="#">
                                            <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                            Un de nos membres, Jean-Marc Priels, a participé au 7ème congrès mondial des réseaux d'entendeurs de voix au World Hearing Voices Congress qui s'est tenu à Madrid les 6-7 novembre 2015. Il nous propose ici son compte-rendu; nous l'en remercions.
                                            Pour lire l'article cliquer ici
                                            </textarea>
                                            <Row className="center-align">
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">delete</i></Button>
                                                </Col>
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">cancel</i></Button>
                                                </Col>
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">send</i></Button>
                                                </Col>
                                            </Row>
                                        </form>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header">Un nouvel article de Philippe LAMBERT, publié dans la revue Moustique (21 octobre 2015)</div>
                                        <div className="collapsible-body">
                                        <form action="#">
                                            <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                            Entendre des voix est traditionnellement présenté comme le symptôme d'une maladie mentale - singulièrement la schizophrénie - qu'il faut à tout prix supprimer. Selon certains thérapeutes, cette action radicale est rarement efficace car elle enferme la personne dans une situation sans issue et l'isole dans sa souffrance.
                                            Pour lire l'article cliquer ici
                                            </textarea>
                                            <Row className="center-align">
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">delete</i></Button>
                                                </Col>
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">cancel</i></Button>
                                                </Col>
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">send</i></Button>
                                                </Col>
                                            </Row>
                                        </form>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header">Un nouvel article de Philippe LAMBERT, publié dans la revue Moustique (21 octobre 2015)</div>
                                        <div className="collapsible-body">
                                        <form action="#">
                                            <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                            Entendre des voix est traditionnellement présenté comme le symptôme d'une maladie mentale - singulièrement la schizophrénie - qu'il faut à tout prix supprimer. Selon certains thérapeutes, cette action radicale est rarement efficace car elle enferme la personne dans une situation sans issue et l'isole dans sa souffrance.
                                            Pour lire l'article cliquer ici
                                            </textarea>
                                            <Row className="center-align">
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">delete</i></Button>
                                                </Col>
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">cancel</i></Button>
                                                </Col>
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">send</i></Button>
                                                </Col>
                                            </Row>
                                        </form>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="collapsible-header">Un nouvel article de Philippe LAMBERT, publié dans la revue Moustique (21 octobre 2015)</div>
                                        <div className="collapsible-body">
                                        <form action="#">
                                            <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
                                            Entendre des voix est traditionnellement présenté comme le symptôme d'une maladie mentale - singulièrement la schizophrénie - qu'il faut à tout prix supprimer. Selon certains thérapeutes, cette action radicale est rarement efficace car elle enferme la personne dans une situation sans issue et l'isole dans sa souffrance.
                                            Pour lire l'article cliquer ici
                                            </textarea>
                                            <Row className="center-align">
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">delete</i></Button>
                                                </Col>
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">cancel</i></Button>
                                                </Col>
                                                <Col s={4}>
                                                    <Button waves="light"><i className="material-icons">send</i></Button>
                                                </Col>
                                            </Row>
                                        </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Mailist list={this.state.mails} />
                    </Row>
                </div>
            </div>
        )
    }
}



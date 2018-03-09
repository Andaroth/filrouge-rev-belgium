import React from 'react';
import {Row,Col,Button} from 'react-materialize';
import app from '../../Base';

export default class Articles extends React.Component {
    constructor() {
        super()
        this.state = {articles:{}};
    }

    // componentWillMount(){
    //     console.log("will mount");
    //     this.getArticlesList();
    // }

    // componentDidUpdate() {
    //     console.log("did update");
    //     this.renderArticlesList(this.state);
    // }

    getArticlesList() {
        console.log("get articles list");
        let these = this;
        // connect to db /contact
        var addr = app.database().ref("/articles");
        // get the content
        addr.on("value", function(snap) {
            console.log("ok, value is :")
            console.log({articles:snap.val()})
            these.setState({articles:snap.val()});
        });
    }

    renderArticlesList(objList) {
        console.log("try to map this :")
        console.log(objList.articles);

        Object.keys(objList.articles).map( (value,i) => {
            var ivalue = value;
            console.log("["+ivalue+"]title:"+objList.articles[ivalue].title);
            console.log("["+ivalue+"]content:"+objList.articles[ivalue].content);
            console.log("------------------------------------------------")
            // return(
            //     <li>
            //         <div className="collapsible-header">{objList.articles[ivalue].title}</div>
            //         <div className="collapsible-body">
            //         <form action="#">
            //             <textarea className="materialize-textarea longtextadmin" name="content" cols="30" rows="30">
            //             {objList.articles[ivalue].content}
            //             </textarea>
            //             <Row className="center-align">
            //                 <Col s={4}>
            //                     <Button waves="light"><i className="material-icons">delete</i></Button>
            //                 </Col>
            //                 <Col s={4}>
            //                     <Button waves="light"><i className="material-icons">cancel</i></Button>
            //                 </Col>
            //                 <Col s={4}>
            //                     <Button waves="light"><i className="material-icons">send</i></Button>
            //                 </Col>
            //             </Row>
            //         </form>
            //         </div>
            //     </li>
            // ) // return end
            return("<li>article...</li>")
        }); // map end
    }

    render() {
        console.log("<Events />");
        return (
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
                        {this.getArticlesList()}
                    </ul>
                </div>
            </div>
        );
    }
}

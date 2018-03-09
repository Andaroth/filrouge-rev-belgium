import React from 'react';
import {Row,Col,Button} from 'react-materialize';
import app from '../../Base';

export default class Mailist extends React.Component {
    constructor(props) {
        super(props)
    }

    renderMailList(objList) {
        console.log("try to map this :")
        console.log(objList);
        var table = new Array;
        table = objList;

        // db.collection('mails')
        // .get()
        // .then(() => {
        //     console.log("db collection :")
        //     console.log(this)
        // });
        var makeView = "";
        var map =  Object.keys(objList).map( (value,i) => {
            var ivalue = value;
            console.log("["+ivalue+"]nom:"+objList[ivalue].nom);
            console.log("["+ivalue+"]message:"+objList[ivalue].message);
            console.log("["+ivalue+"]email:"+objList[ivalue].email);
            console.log("------------------------------------------------")
            makeView += ('<li key='+ivalue+'><div className="collapsible-header">'+objList[ivalue].nom+'</div><div className="collapsible-body"><Row>'+objList[ivalue].message+'</Row><Row>Sent by '+objList[ivalue].email+'</Row><form action="#"><Row className="center-align"><Col s={6}><Button waves="light"><i className="material-icons">delete</i></Button></Col><Col s={6}><Button waves="light"><i className="material-icons">cancel</i></Button></Col></Row></form></div></li>') // return end

        },{}); // map end
        return makeView;
    }

    render() {
        console.log("<Mailist />");
        return (
            <div id="mails" className="col s12">
                <h5>Liste des mails reçus</h5>
                <div className="container">
                    <ul id="mailList" className="collapsible" data-collapsible="accordion">
                        {this.appendChild = this.renderMailList(this.props.mails)}
                    </ul>
                </div>
            </div>
        );
    }
}

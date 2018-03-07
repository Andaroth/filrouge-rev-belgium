import React from 'react';
import {Row,Col,Button} from 'react-materialize';
import app from '../../Base';

export default class Mailist extends React.Component {
    constructor() {
        super()
        this.state = {mails:{}};
    }

    componentWillMount(){
        console.log("will mount");
        this.getMailList();
    }

    componentDidUpdate() {
        console.log("did mount");
        this.renderMailList(this.state);
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
        });
    }

    renderMailList(objList) {
        console.log("try to map this :")
        console.log(objList.mails);
        // for (let i = 0;i<10;i++) {
        //     return(
        //         <li>
        //             <div className="collapsible-header">{objList.mails[i].nom}</div>
        //             <div className="collapsible-body">
        //                 <Row>{objList.mails[i].message}</Row>
        //                 <form action="#">
        //                     <Row className="center-align">
        //                         <Col s={6}>
        //                             <Button waves="light"><i className="material-icons">delete</i></Button>
        //                         </Col>
        //                         <Col s={6}>
        //                             <Button waves="light"><i className="material-icons">cancel</i></Button>
        //                         </Col>
        //                     </Row>
        //                 </form>
        //             </div>
        //         </li>
        //     ) // return end
        // } // for end

        Object.keys(objList.mails).map( (value,i) => {
            var ivalue = value;
            console.log("["+ivalue+"]nom:"+objList.mails[ivalue].nom);
            console.log("["+ivalue+"]message:"+objList.mails[ivalue].message);
            console.log("["+ivalue+"]email:"+objList.mails[ivalue].email);
            console.log("------------------------------------------------")
            return(
                <li key={i}>
                    <div className="collapsible-header">{objList.mails[ivalue].nom}</div>
                    <div className="collapsible-body">
                        <Row>{objList.mails[ivalue].message}</Row>
                        <form action="#">
                            <Row className="center-align">
                                <Col s={6}>
                                    <Button waves="light"><i className="material-icons">delete</i></Button>
                                </Col>
                                <Col s={6}>
                                    <Button waves="light"><i className="material-icons">cancel</i></Button>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </li>
            ) // return end
        }); // map end
    }

    render() {
        console.log("<Mailist />");
        return (
            <div id="mails" className="col s12">
                <h5>Liste des mails reçus</h5>
                <div className="container">
                    <ul className="collapsible" data-collapsible="accordion">
                        {this.renderMailList(this.state)}
                    </ul>
                </div>
            </div>
        );
    }
}

import React from 'react';
import {Row,Col,Button} from 'react-materialize';
import app from '../../Base';

export default class Mailist  extends React.Component {
    constructor() {
        super()
        this.list = {};
        this.state = this.list;
    }
    delete(selection){

    }
    cancel(){
        
    }

    componentDidMount() {
        let these = this;
        // connect to db /contact
        var addr = app.database().ref("/contact");
        // get the content
        addr.on("value", function(snap) {
            console.log("list is :")
            console.log({mails:snap.val()})
            these.setState({mails:snap.val()});
            these.makeMailList(these.state); // render
        });
    }

    makeMailList(objList) {
        console.log("try to map this :")
        console.log(objList.mails);
        Object.keys(objList.mails).map( (value,i) => {
            return(
                <li key={i}>
                    <div className="collapsible-header">{value.nom}</div>
                    <div className="collapsible-body">
                        <Row>{value.message}</Row>
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
            ) // return
        }); // map
        this.forceUpdate();
    }

    render() {
        console.log("<Mailist />");
        return (<div>{this.makeMailList(this.state)}</div>);
    }
}

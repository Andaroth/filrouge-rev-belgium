import React from 'react';
import FirstSection from "./MainComponents/Acceuil/FirstSection";
import SecondSection from "./MainComponents/Acceuil/SecondSection";

export default class App extends React.Component {
    render() {
        return (
                <div className="allAcc">
                    <FirstSection/>
                    <SecondSection/>
                </div>
        )
    }
}
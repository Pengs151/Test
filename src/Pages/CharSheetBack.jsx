import React, {Component} from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import TextArea from '../components/TextArea';
import CharSheetNav from '../components/CharSheetNav';


export default class CharacterSheet extends Component{
    render() {
        return(
            <div>
              <NavBar CharacterSheet="nav-item active" />
              <Jumbotron title="Character Sheet" subtitle=""/>
             
                <div className="container">
                <CharSheetNav/>
                <TextArea TextLabel="Features and Traits"/>
                    <TextArea TextLabel="Other Proficiencies and Languages"/>
                    <TextArea TextLabel="Flaws"/>
                    <TextArea TextLabel="Bonds"/>
                    <TextArea TextLabel="Ideas"/>
                    <TextArea TextLabel="Personality Traits"/>
                    <TextArea TextLabel="Race"/>
                    <TextArea TextLabel="Character Name"/>
                    <TextArea TextLabel="Alignment"/>
                    <TextArea TextLabel="DCI Number"/>
                    <TextArea TextLabel="Age"/>
                    <TextArea TextLabel="Height"/>
                    <TextArea TextLabel="Weight"/>
                    <TextArea TextLabel="Eyes"/>
                    <TextArea TextLabel="Skin"/>
                    <TextArea TextLabel="Hair"/>
                    <TextArea TextLabel="Alies and Organizations"/>
                    <TextArea TextLabel="Additional Features and Traits"/>
                    <TextArea TextLabel="Character Backstory"/>
                    <TextArea TextLabel="Treasure"/>
                    
                    
                </div>
                <Footer/>
            </div>
        );
    }
}
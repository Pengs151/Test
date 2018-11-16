import React, {Component} from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import TextArea from '../components/TextArea';
import StatBox from '../components/StatBox';
import Race from '../components/RaceComp';
import ClassComp from '../components/ClassComp';
import ClassButton from '../components/ClassButton';
import RaceButton from '../components/RaceButton';
import CharSheetNav from '../components/CharSheetNav';
import Proficiencies from '../components/Proficiencies';


export default class CharacterSheet extends Component{
    render() {
        return(
            <div>
              <NavBar CharacterSheet="nav-item active" />
              <Jumbotron title="Character Sheet" subtitle=""/>
             
                <div className="container">
                <CharSheetNav/>
                <div className="row">
                <RaceButton/>
                <ClassButton/>
                </div>
                <StatBox Stat="Health Points" hidden="hidden"/>
                <StatBox Stat="STRENGTH" hidden="hidden"/>
                            
                         
                            <StatBox Stat="DEXTERITY" hidden="hidden"/>


                              <StatBox Stat="CONSTITUTION" hidden="hidden"/>
                            
                            <StatBox Stat="INTELLIGENCE" hidden="hidden"/>

                            <StatBox Stat="CHARISMA" hidden="hidden"/>
                            
                            <StatBox Stat="WISDOM" hidden="hidden" /> 
                
                    <Proficiencies />
                    
                </div>
                <Footer/>
            </div>
        );
    }
}
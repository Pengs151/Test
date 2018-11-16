import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import D6 from '../components/D6';
import StatBox from '../components/StatBox';
import StepBuilderNav from '../components/StepBuilderNav';

export default class StepBuilderProf extends Component{
    render(){
        return(
            <div>
              <NavBar StepBuilder="nav-item active" />
              <Jumbotron title="Character Builder Helper" subtitle="Step by Step guide"/>
               <StepBuilderNav/>

               <StatBox Stat="Acrobatics"/>
                            <StatBox Stat="Animal Handling"/>
                            <StatBox Stat="Arcana"/>
                            <StatBox Stat="Athletics"/>
                            <StatBox Stat="History"/>
                            <StatBox Stat="Insight "/>  
                            <StatBox Stat="Intimidation"/>
                            <StatBox Stat="Investigation"/>
                            <StatBox Stat="Performance"/>
                            <StatBox Stat="Persuasion"/>
                            <StatBox Stat="Medicine"/>
                            <StatBox Stat="Perception" description="A measure of a character's openness to their surroundings. 
                            Perception controls the chance to detect vital clues, traps or hiding enemies, and might influence 
                            combat sequence or the accuracy of ranged attacks. Perception-type attributes are more common in 
                            more modern games. Note that this skill is usually understood only to apply to what a character 
                            can perceive with their established senses (i.e. sight, sound, smell, etc), and does not usually 
                            include extrasensory perception or other forms of mental telepathy or telekinesis in the given 
                            game unless the character's specific attributes expressly include such abilities 
                            (such as the Force in Star Wars). Sometimes combined with wisdom."/>
                            <StatBox Stat="Nature"/>
                            <StatBox Stat="Religion"/>
                            <StatBox Stat="Arcana"/>
                            <StatBox Stat="Sleight of Hand"/>
                            <StatBox Stat="Stealth"/>
                            <StatBox Stat="Survival"/>  
              </div>
        );
    }
}
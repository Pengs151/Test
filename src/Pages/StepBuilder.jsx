import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import D6 from '../components/D6';
import StatBox from '../components/StatBox'
import strength from '../Images/strength2.jpeg'
import Dexterity from '../Images/Dexterity.jpeg'
import Constitution from '../Images/constitution.png'
import Intelligence from '../Images/intelligence.jpeg'
import Charisma from '../Images/charisma.png'
import Wisdom from '../Images/wisdom.jpeg'


export default class StepBuilder extends Component{
    render() {
        return(
            <div>
              <NavBar StepBuilder="nav-item active" />
              <Jumbotron title="Character Builder Helper" subtitle="Step by Step guide"/>
              
                <div className="container">
                    <D6/>
                    <D6/>
                    <D6/>
                    <D6/>
                    <D6/>
                    <D6/>

                    <p>
                    Now Take each ability score and apply it to an ability below
                    </p>
                            <StatBox Stat="STRENGTH" description="A measure of how physically strong a character is. 
                            Strength often controls the maximum weight the character can carry, melee attack and/or damage, and 
                            sometimes hit points. Armor and weapons might also have a Strength requirement." image={strength}/>
                            
                        
                            <StatBox Stat="DEXTERITY" description="A measure of how agile a character is. 
                            Dexterity controls attack and movement speed and accuracy, as well as evading 
                            an opponent's attac" image={Dexterity}/>


                              <StatBox Stat="CONSTITUTION" description="A measure of how sturdy a character is. Constitution 
                            often influences hit points, resistances for special types of damage (poisons, illness, heat etc.)
                             and fatigue." image={Constitution}/>
                            
                            <StatBox Stat="INTELLIGENCE" description="A measure of a character's problem-solving ability. 
                            Intelligence often controls a character's ability to comprehend foreign languages and their skill 
                            in magic. In some cases, intelligence controls how many skill points the character gets at level up. 
                            In some games, it controls the rate at which experience points are earned, or the amount needed to 
                            level up. Under certain circumstances, this skill can also negate combat actions 
                            between players and NPC enemies. This is sometimes combined with wisdom and/or willpower." image={Intelligence}/>

                            <StatBox Stat="CHARISMA" description="A measure of a character's social skills, and sometimes their 
                            physical appearance. Charisma generally influences prices while trading and NPC reactions. Under 
                            certain circumstances, this skill can negate combat actions between players and NPC enemies." image={Charisma}/>
                            
                            <StatBox Stat="WISDOM" description=" measure of a character's common sense and/or spirituality.
                            Wisdom often controls a  character's ability to cast certain spells, communicate to mystical 
                            entities, or discern other characters' motives or feelings" image={Wisdom}/>  

                            
                             <Link className="nav-link" to="/CharacterInfo">Head on Over to Character Background</Link>  

                                          
                </div>
                <Footer/>
            </div>
        );
    }
}
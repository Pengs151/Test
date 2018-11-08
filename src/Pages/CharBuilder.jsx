import React, {Component} from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx'
import StatBox from '../components/StatBox.jsx'
import './CharacterBuilder.css'
import strength from '../Images/strength2.jpeg'
import Dexterity from '../Images/Dexterity.jpeg'
import Constitution from '../Images/constitution.png'
import Intelligence from '../Images/intelligence.jpeg'
import Charisma from '../Images/charisma.png'
import Wisdom from '../Images/wisdom.jpeg'


export default class CharacterBuilder extends Component{
   
    
    render() {
        return(
            <div>
              <NavBar BuildaChar="nav-item active"/>
              <Jumbotron title="Character Builder" subtitle="EZ PZ"/>
              
                
                    <div className="container">
                        <div className="row">
                            
                            <StatBox Stat="STRENGTH" description="A measure of how physically strong a character is. 
                            Strength often controls the maximum weight the character can carry, melee attack and/or damage, and 
                            sometimes hit points. Armor and weapons might also have a Strength requirement." image={strength}/>
                            
                        
                            <StatBox Stat="DEXTERITY" description="A measure of how agile a character is. 
                            Dexterity controls attack and movement speed and accuracy, as well as evading 
                            an opponent's attac" image={Dexterity}/>
                        </div>
                        <div className="row">
                            
                            <StatBox Stat="CONSTITUTION" description="A measure of how sturdy a character is. Constitution 
                            often influences hit points, resistances for special types of damage (poisons, illness, heat etc.)
                             and fatigue." image={Constitution}/>
                            
                            <StatBox Stat="INTELLIGENCE" description="A measure of a character's problem-solving ability. 
                            Intelligence often controls a character's ability to comprehend foreign languages and their skill 
                            in magic. In some cases, intelligence controls how many skill points the character gets at level up. 
                            In some games, it controls the rate at which experience points are earned, or the amount needed to 
                            level up. Under certain circumstances, this skill can also negate combat actions 
                            between players and NPC enemies. This is sometimes combined with wisdom and/or willpower." image={Intelligence}/>
                        </div>
                        <div className="row">
                            <StatBox Stat="CHARISMA" description="A measure of a character's social skills, and sometimes their 
                            physical appearance. Charisma generally influences prices while trading and NPC reactions. Under 
                            certain circumstances, this skill can negate combat actions between players and NPC enemies." image={Charisma}/>
                            
                            <StatBox Stat="WISDOM" description=" measure of a character's common sense and/or spirituality.
                            Wisdom often controls a  character's ability to cast certain spells, communicate to mystical 
                            entities, or discern other characters' motives or feelings" image={Wisdom}/>
                        </div>
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
                    <Footer/>  
                    
                
            </div>
            
        );
    }
}
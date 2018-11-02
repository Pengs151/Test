import React, {Component} from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx'
import StatBox from '../components/StatBox.jsx'
import './CharacterBuilder.css'


export default class CharacterBuilder extends Component{
    render() {
        return(
            <div>
              <NavBar BuildaChar="nav-item active"/>
              <Jumbotron title="Character Builder" subtitle="EZ PZ"/>
              
                <body>
                    <div className="container col-5">
                        <div className="row">
                            <StatBox Stat="STRENGTH"/>
                            <StatBox Stat="DEXTERITY"/>
                            <StatBox Stat="CONSTITUTION"/>
                            <StatBox Stat="INTELLIGENCE"/>
                            <StatBox Stat="WISDOM"/>
                            <StatBox Stat="CHARISMA"/>
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
                            <StatBox Stat="Perception"/>
                            <StatBox Stat="Nature"/>
                            <StatBox Stat="Religion"/>
                            <StatBox Stat="Arcana"/>
                            <StatBox Stat="Sleight of Hand"/>
                            <StatBox Stat="Stealth"/>
                            <StatBox Stat="Survival"/>  
                            
                        </div>
                        
                    </div>
                    <Footer/>  
                    </body>
                
            </div>
            
        );
    }
}
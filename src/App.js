import React, { Component } from 'react';
import { HashRouter as Router, Route} from 'react-router-dom'
import './App.css';


import Home from './Pages/Home.jsx';
import CharacterBuilder from './Pages/CharBuilder';
import CharacterInfo from './Pages/CharacterInfo';
import LoginPage from './Pages/LoginPage';
import BattleHelper from './Pages/BattleHelper';
import StepBuilder from './Pages/StepBuilder';
import CharacterSheet from './Pages/CharacterSheet';
import CharacterSheetBack from './Pages/CharSheetBack';
import Race from './Pages/StepBuilderRace';
import Prof from './Pages/StepBuilderProf';

class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <Route exact path="/" component ={Home}/>
         <Route exact path="/StepBuilderProf" component = {Prof}/>
         <Route exact path="/StepBuilderRace" component = {Race}/>
         <Route exact path="/CharacterBuilder" component = {CharacterBuilder}/>
         <Route exact path="/CharacterInfo" component = {CharacterInfo}/>
         <Route exact path="/LoginPage" component = {LoginPage}/>
         <Route exact path="/BattleHelper" component = {BattleHelper}/>
         <Route exact path="/StepBuilder" component = {StepBuilder}/>
         <Route exact path="/CharacterSheet" component = {CharacterSheet}/>
         <Route exact path="/CharSheetBack" component = {CharacterSheetBack}/>

        
       
       </div>
     </Router>
    );
  }
}

export default App;

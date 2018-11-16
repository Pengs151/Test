import React, { Component } from 'react';
import './StatBox.css'

export default class StatBox extends Component {
  constructor(props){
    super(props);
    this.state = {input:""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
    this.updateInput(this.props.Stat, event);
  }

  handleSubmit(event){
    event.preventDefault();
  }

  updateInput(key, event){
    console.log(key);
   // this.setState({input: event.target.value});
    localStorage.setItem(key,event.target.value);
  }
    
  
  checkValue(key){
    if(localStorage.hasOwnProperty(key)){
      let currStat = this.props.Stat;
      let currClass = localStorage.getItem('class');
      let currRace = localStorage.getItem('race');
       console.log('helllo');
      if(currStat === 'STRENGTH'){
        if(currRace === 'elf' ){

        }
        if(currRace === 'human'){
          var humanSX = parseInt(localStorage.getItem(key),10);
          var humanSY = 1;
          humanSX = humanSX + humanSY;
          localStorage.setItem(currStat, humanSX);

        }
        if(currRace === 'dwarf'){

        }
        if(currRace === 'dragonborn'){

        }
      }
      if(currStat === 'DEXTERITY'){

        
        if(currRace === 'elf' ){
          var elfDexX = parseInt(localStorage.getItem(key),10);
          var elfDexY = 2;
          elfDexX = elfDexX + elfDexY;
          localStorage.setItem(currStat, elfDexX);

        }
        if(currRace === 'human'){
          var humanDexX = parseInt(localStorage.getItem(key),10);
          var humanDexY = 1;
          humanDexX = humanDexY + humanDexX;
          localStorage.setItem(currStat, humanDexX);

        }
        if(currRace === 'dwarf'){

        }
        if(currRace === 'dragonborn'){
          
        }



      }
      if(currStat === 'INTELLIGENCE'){

        if(currRace === 'elf' ){

        }
        if(currRace === 'human'){
          var humanIntX = parseInt(localStorage.getItem(key),10);
          var humanIntY = 1;
          humanIntX = humanIntX + humanIntY;
          localStorage.setItem(currStat, humanIntX);

        }
        if(currRace === 'dwarf'){

        }
        if(currRace === 'dragonborn'){
          
        }

      }
      if(currStat === 'CHARISMA'){

        
        if(currRace === 'elf' ){

        }
        if(currRace === 'human'){
          var humanCharX = parseInt(localStorage.getItem(key),10);
          var humanCharY = 1;
          humanCharX = humanCharX + humanCharY;
          localStorage.setItem(currStat, humanCharX);

        }
        if(currRace === 'dwarf'){

        }
        if(currRace === 'dragonborn'){
          
        }

      }
      if(currStat === 'WISDOM'){

        
        if(currRace === 'elf' ){

        }
        if(currRace === 'human'){
          var HumanWisX = parseInt(localStorage.getItem(key),10);
          var HumanWisY = 1;
          HumanWisX = HumanWisX + HumanWisY;
          localStorage.setItem(currStat, HumanWisX);

        }
        if(currRace === 'dwarf'){

        }
        if(currRace === 'dragonborn'){
          
        }


      }
      if(currStat === 'CONSTITUTION'){

        if(currRace === 'elf' ){

        }
        if(currRace === 'human'){
          var humanConX = parseInt(localStorage.getItem(key),10);
          var humanConY = 1;
          humanConX = humanConX + humanConY
          localStorage.setItem(currStat, humanConX);

        }
        if(currRace === 'dwarf'){
          var dwarfConX = parseInt(localStorage.getItem(key),10);
          var dwarfConY = 2;
          dwarfConX = dwarfConX + dwarfConY;
          localStorage.setItem(currStat, dwarfConX);
        }
        if(currRace === 'dragonborn'){
          
        }

      }
      
      
      this.setState({ value:localStorage.getItem(key)});
    }
    }
    
  componentDidMount(){
    this.checkValue(this.props.Stat);
  }
/*
  componentWillUnmount(){
      this.updateInput(this.props.Stat, this.state.input);
      console.log("hellloooooo");
  }
  */


    render() {
      //  this.checkValue();
        return (
            
            <div className="btn-toolbar col-5 statbox" role="toolbar" aria-label="Toolbar with button groups">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text" id="btnGroupAddon">{this.props.Stat}</div>
              </div>
              <div className="col-6">
              <input type="text" name = {this.props.Stat}  value ={this.state.value} onChange={this.handleChange}  className="form-control"/>
              </div>
            <button type="button" className="btn btn-secondary">+</button>
              <p>
                            {this.props.description}
                            </p>
                            <img className="col-4" hidden={this.props.hidden} src={this.props.image} alt="" width="72" height="72"/>
            </div>
          </div>
          
        );
    }
}
import React, {Component} from 'react';



export default class RaceButton extends Component{
   
    
    RaceSelector(key){  
        localStorage.setItem('race',key);
    }
    
    
    render(){

        return(
            <div>
            <h2> Select A Race</h2>
            <button onClick={() => this.RaceSelector('elf')}> Elf </button>
            <button onClick={() => this.RaceSelector('human')}> Human </button>
            <button onClick={() => this.RaceSelector('dwarf')}> Dwarf </button>
            <button onClick={() => this.RaceSelector('dragonborn')}> Dragonborn </button>
            </div>
        );
    }
}
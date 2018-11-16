import React,{Component} from 'react';


export default class Proficiences extends Component{
   
    
    descrpfunc(){
        var currClass = localStorage.getItem('class')
        if(currClass === 'barbarian'){
            return(
                "Light and medium armor, shields, simple and martial weapons"
            );
        }
        if(currClass === 'rogue'){
            return(
                "Light armor, simple weapons, hand crossbows, longswords, rapiers, shortswords"
            );
        }
        if(currClass === 'wizard'){
            return("Daggers, darts, slings, quarterstaffs, light crossbows"
            );
        }


        
    }
    
    
    
    render(){
        return(
            <div>
            <h3>Armor and Weapon Proficiences</h3>
            <p>
                {this.descrpfunc()}
            </p>
            </div>
        );
    }
}
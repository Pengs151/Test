import React, {Component} from 'react';



export default class ClassButton extends Component{

    clasSelector(key){
        localStorage.setItem('class',key);
       var hp;
       if(key === 'barbarian'){
            hp = Math.floor((Math.random()*12)+1);
       }
       if(key === 'rogue'){
        hp = Math.floor((Math.random()*8)+1);
       }
       if(key === 'wizard'){
        hp = Math.floor((Math.random()*6)+1);
       }
       localStorage.setItem('Health Points', hp);
    }
    
    
    render(){

        return(
            <div>
            <h2> Select A Class</h2>
            <button onClick={() => this.clasSelector('barbarian')}> Barbarian </button>
            <button onClick={() => this.clasSelector('wizard')}> Wizard </button>
            <button onClick={() => this.clasSelector('rogue')}> Rogue </button>
            </div>
        );
    }
}
import React, { Component } from 'react';


  
export default class D6 extends Component{
      RollCount=0
      FirstRoll=0
      SecondRoll=0
      ThirdRoll=0
      FourthRoll=0
      RollTotal=0
      
    constructor(props){
        super(props);
        this.state = {D1:""};
        this.rollD6 = this.rollD6.bind(this);
        
       
        
      }
    
   
   
   
    rollD6(){
        
       this.FirstRoll = Math.floor((Math.random()*6)+ 1);
       this.SecondRoll = Math.floor((Math.random()*6)+ 1);
       this.ThirdRoll = Math.floor((Math.random()*6)+ 1);
       this.FourthRoll = Math.floor((Math.random()*6)+ 1);

       if(this.FirstRoll < this.SecondRoll && this.FirstRoll < this.ThirdRoll && this.FirstRoll < this.FourthRoll){
            this.RollTotal = this.SecondRoll + this.ThirdRoll + this.FourthRoll;
       }

       else if(this.SecondRoll < this.ThirdRoll && this.SecondRoll < this.FourthRoll){
        this.RollTotal = this.FirstRoll + this.ThirdRoll + this.FourthRoll;
       }

       else if(this.ThirdRoll < this.FourthRoll){
        this.RollTotal = this.FirstRoll + this.SecondRoll + this.FourthRoll;
       }
       else{
        this.RollTotal = this.FirstRoll + this.SecondRoll + this.ThirdRoll;
       }
       //this.setState({D1: "These are your rolls " + this.FirstRoll + " ," 
       // + this.SecondRoll + " ," + this.ThirdRoll + " ," + this.FourthRoll + " The highest 3 added together = "+ this.RollTotal});
       this.setState({D1: this.RollTotal})
   }
   
    render(){
       return(
     <div className='row'>
    <button className="btn btn-secondary" type="button" onClick={() => this.rollD6()}> 
    Roll For Ability Score
    </button>
    <textarea value={this.state.D1} aria-label="With textarea"></textarea>
    </div>
    );
}
}

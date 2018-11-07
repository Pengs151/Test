import React, { Component } from 'react';

export default class StatBox extends Component {
  constructor(props){
    super(props);
    this.state = "";
  }

  handleChange(event, statName){
    this.setState({input: event.target.value})
    
    this.updateInput(statName, this.setState);
  }
  updateInput(key, event){
    console.log(key);
    this.setState(key: event.target.value);
    localStorage.setItem(key,event.target.value);
  }
  
  checkValue(key){
    if(localStorage.hasOwnProperty(key)){
      var value = localStorage.getItem(key);
      this.setState = value;
    }
    else{
      value = this.state.key
    }

   
    }
  
    render() {
        return (
            <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text" id="btnGroupAddon">{this.props.Stat}</div>
              </div>
              <div className="col-2">
              <input type="text" name = {this.props.Stat}  value ={this.checkValue.bind(this.props.Stat)} onChange={this.updateInput.bind(this.props.Stat, this)} className="form-control"/>
              </div>
              <button type="button" className="btn btn-secondary">+</button>
            </div>
          </div>
          
        );
    }
}
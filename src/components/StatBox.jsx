import React, { Component } from 'react';
import './StatBox.css'

export default class StatBox extends Component {
  constructor(props){
    super(props);
    this.state = {input:""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmiut = this.handleSubmiut.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
    this.updateInput(this.props.Stat, event);
  }

  handleSubmiut(event){
    event.preventDefault();
  }

  updateInput(key, event){
    console.log(key);
   // this.setState({input: event.target.value});
    localStorage.setItem(key,event.target.value);
  }
    
  
  checkValue(key){
    if(localStorage.hasOwnProperty(key)){
      this.setState({ value:localStorage.getItem(key)});
      console.log(localStorage.getItem(key));
      console.log("hellooo");
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
                            <img className="col-4" src={this.props.image} alt="" width="72" height="72"/>
            </div>
          </div>
          
        );
    }
}
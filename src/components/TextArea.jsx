import React, {Component} from 'react';
import './Jumbotron.css';

export default class TextArea extends Component {
    constructor(props){
        super(props);
        this.state = {input:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmiut = this.handleSubmiut.bind(this);
      }
      handleChange(event){
        this.setState({value: event.target.value});
        this.updateInput(this.props.TextLabel, event);
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
        this.checkValue(this.props.TextLabel);
      }
    render() {
        return (
            <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">{this.props.TextLabel}</span>
            </div>
            <textarea className="form-control"  value={this.state.value} onChange={this.handleChange} aria-label="With textarea"></textarea>
            
          </div>
        );
    }
}
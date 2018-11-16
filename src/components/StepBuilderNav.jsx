
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';




export default class StepBuilderNav extends Component{
    render(){
        return(
            <div>
              
              <button>
                 <Link to="/StepBuilderRace">Race-Class</Link>   
                </button>
      
                
                <button>
                  <Link to="/StepBuilder">Stats</Link>
                </button>
              </div>
        );
    }
}
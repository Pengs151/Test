
import React, {Component} from 'react';
import { Link } from 'react-router-dom';




export default class CharSheetNav extends Component{
    render(){
        return(
            <div>
              
              <button>
                 <Link to="/CharacterSheet">Front Side of Character Sheet</Link>   
                </button>
      
                
                <button>
                  <Link to="/CharSheetBack">Back Side of Character Sheet</Link>
                </button>
              </div>
        );
    }
}
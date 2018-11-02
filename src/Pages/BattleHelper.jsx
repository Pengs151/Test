import React, {Component} from 'react';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx'


export default class BattleHelper extends Component{
    render() {
        return(
            <div>
              <NavBar BattleHelper="nav-item active" />
              <Jumbotron title="BATTLE Helper" subtitle="Battle Helper goes here"/>
              <Footer/>
                <div className="container">
                
                    <h2>Welcome</h2>
                    
                    
                </div>

            </div>
        );
    }
}
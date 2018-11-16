import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import D6 from '../components/D6';
import StepBuilderNav from '../components/StepBuilderNav';
import RaceComp from '../components/RaceComp.jsx';
import ClassComp from '../components/ClassComp.jsx';
import RaceButton from '../components/RaceButton';
import ClassButton from '../components/ClassButton';


export default class StepBuilderRace extends Component{
    render(){
        return(
            <div>
              <NavBar StepBuilder="nav-item active" />
              <Jumbotron title="Character Builder Helper" subtitle="Step by Step guide"/>
              <StepBuilderNav/>
              <RaceButton/>
              <ClassButton/>
              <Footer/>
              </div>
        );
    }
}
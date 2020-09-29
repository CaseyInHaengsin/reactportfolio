import './Main.css';
import React from 'react';
import portfolio from '../assets/portfolio';
import SelfSegment from './SelfSegment';

const MainDisplay = () => {
return (
    <div classNameName="container" id="main-container">
     <div className="ui placeholder segment">
  <div className="ui two column very relaxed stackable grid">
    <div className="column">
      <div className="ui form">
        <div className="field">
          
          
        </div>
        <div classNameName="ui internally celled grid">
          <div classNameName="row">
            <div classNameName="twelve wide column">
            <img id="portfolio-image" src={portfolio}></img>
            </div>
          
          </div>
        </div>
        
      </div>
    </div>
    <div className="middle aligned column">
      <SelfSegment />
    </div>
  </div>
  
  <div className="ui vertical divider">
  <div classNameName="three wide column borderless">
          <a href="https://www.linkedin.com/in/casey-rowley/" target="_blank">
            <i className="linkedin left icon huge"></i>
          </a>
          <a href="https://github.com/CaseyInHaengsin" target="_blank">
          <i className="github left icon huge"></i>
          </a>
          </div>
      <h2>Casey Rowley</h2>
  </div>
  </div>
    </div>
    
    )
}
             
             
export default MainDisplay;

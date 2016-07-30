import React, { Component } from 'react';

import Map from './Map.jsx';

// App component - represents the whole app
export default class App extends Component {

  
    


  render() {
    var videoStyle = {
    width: '100%',
    height: '100%',
    verticalAlign: 'middle'

  }
  setTimeout(function() {
    document.getElementsByClassName('former')[0].classList.remove('opener');
    setTimeout(function() {document.getElementsByClassName('former')[0].classList.add('animation');},600); 
  }, 3000);
    
      


  

    return (
      <div className="container">
        <header>
          <h1 className="title">SoundTrails</h1>
          <div className="background">
            <div className="video" id="video">
              <video autoPlay="true" loop noControls muted style ={videoStyle}>
                <source src="/img/better_earth.mp4" type="video/mp4"/>
              </video>
            </div>
          </div>
        </header>

          <Map createMarkers={this.createMarkers} />

      </div>
    );
  }
}
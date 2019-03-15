import React, { Component } from 'react';
import  { BrowserRouter  } from 'react-router-dom';
import Navbar from './components/Navbar';
import DelayRoute from './animations/DelayRoute';
import Animation from './animations/Animation';
import './App.css';
class App extends Component {
  state = {
    isOpened: false
  }
  componentDidMount() {
    Animation.openPreLoad(()=>{
      this.setState({ isOpened: true })
    });
  }
 
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div id="open_preload">
              <div className="left"><div className="bg"></div><div className="text">sujini</div></div>
              <div className="right"><div className="bg"></div><div className="text">Bak</div></div>
              <div className="center_line"></div>
          </div>
          <Navbar/>
          <DelayRoute isOpened={this.state.isOpened}/>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component} from 'react'
import './App.css';
import Slider from './Slider'


class App extends Component {
  constructor (){
    super()

    this.state = {
      epOnFocus : 0

    }

    this.changeEp = (ep)=> {
      this.setState({epOnFocus : ep})
    }
  }
  render () {
    return (
      <div className ='App'>
        <Slider updatefunc = {this.changeEp} focusedEp = {this.state.epOnFocus}/>
      </div>
    )
  }
}

export default App;

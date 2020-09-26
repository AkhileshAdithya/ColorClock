import React from 'react';
import './App.css';

class App extends React.Component{
  componentDidMount(){
    this.timeHandler()
  }
  componentDidUpdate(){
    setInterval(() => {this.timeHandler()},1000)
  }
  state = {
    time:"",    
  }
  timeHandler = () => {
    var d = new Date();
    var h = d.getHours()
    if(h < 10){
      h = `0${h}`
    }
    var m = d.getMinutes()
    if(m < 10){
      m = `0${m}`
    }
    var s = d.getSeconds()
    if(s < 10){
      s = `0${s}`
    }
    var t = `${h}${m}${s}`
    console.log(t)
    this.setState({time: t})
  }
  render() {
    return (
      <div style = {{backgroundColor: `#${this.state.time}`, color: "white", width: '100vw', height: '100vh', textAlign: 'center', verticalAlign: 'middle', lineHeight: '100vh', fontSize: '5vh'}}>
        {`#${this.state.time}`}       
      </div>
    )
  }
}

export default App;

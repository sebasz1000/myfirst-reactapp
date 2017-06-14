import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Messaje from './Messaje';

  /*
class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = { on : true };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.setState( prevState => ({ on : !prevState.on }) );
  }
  
  render(){
    let text;
    this.state.on ? text = "Encendido" : text = "Apagado" ;
    return <button onClick={this.handleClick}>{text}</button>
  }
}

function Loginbtn(props){
    return <button onClick={props.onClick} > {"LOGIN"} </button>
}

function Logoutbtn(props){
    return <button onClick={props.onClick} >{"LOGOUT"} </button>  
}

class Logcontrol extends React.Component{
  
  
  constructor(props){
    super(props)
    this.state = {  logged : true };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.setState( prevState => ({ logged : !prevState.logged }) );
  }
  
  render(){
    return this.state.logged ? <Logoutbtn onClick={  this.handleClick  }/> : <Loginbtn onClick={  this.handleClick  }/> ;
  }
} 

function Destroybtn(props){
    return <button onClick={props.click} > {'Desmontar'} </button>
  }
    
class Timer extends React.Component{
    constructor(props){
    super(props);
    this.state = {  time : new Date(), destroyed : false };
    this.tock = this.tock.bind(this);
    this.destroy = this.destroy.bind(this);
    }
    
    tock(){
      this.setState( { time : new Date() });
    }
    
    destroy(){
      this.setState = ({ destroyed : true }) ;
      
      
    }
    
    componentDidMount(){
      const timer = setInterval(this.tock , 1000);
      
    }
    componentWillUnmount(){
      clearInterval(this.timer);
      window.alert("Timer Desmontado");
    }

    render(){
      
      if(this.state.destroyed == true){
        return null;
      }
      
       return (
        <div>
        <h1>{  this.state.time.toLocaleTimeString()  }</h1> 
        <Destroybtn click={this.destroy}/>
        </div>
       )
     
    }
  }   
  
  function Display(){
    return (
      <div>
        <Timer />
        <Timer />
        <Timer />
      </div>
    );
  }



const arr =[ 1, 2, 3, 4, 5 , 6];

function User(props){
  const key = props.key;
  return <li> {props.name} </li>;
}

function Userslist(){
  let content = arr.map( (num) => 
    (<User name={num} key={num.toString()}/>)
                       );
  return (
    <ul>
     {content}
    </ul>  
    
  );
}



class Flavorform extends React.Component{
  constructor(props){
  super(props);
  this.state = { value : 'mango' };
  this.changeState = this.changeState.bind(this);
  }
  changeState(event){
    this.setState(  { value : event.target.value } );
    alert(event.target);
  }
  render(){
    return(
     <form>
      <select value={this.state.value} onChange={this.changeState}>
        <option value="mango">Mango</option>
        <option value="fresa">Fresa</option>
        <option value="coconout">Coconout</option>
      </select>
    </form>
    
    
    );
  }
  
  
}


class Reservation extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {  checked : false , numGuests : 0 };
    this.handleChange = this.handleChange.bind(this);
    
  }
  handleChange(event){ 
    let target = event.target;
    const value = target.type === "checkbox" ?  target.checked : target.value;
    this.setState( { [target.name] : value } );
  }
  
  render(){
    return(
      <form>
        <label>
          Reserved
          <input name="checked" type="checkbox"  checked={this.state.checked} onChange={this.handleChange} />
        </label>
      <br />
        <label>
          Number Guests
          <input name="numGuests" type="number" value={this.state.numGuests} onChange={this.handleChange} />
        </label>
      </form>
    
    )
  }
}

*/

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);














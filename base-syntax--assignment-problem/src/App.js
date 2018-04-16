import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';


class App extends Component {
  state = {
    properties : [
      {username : 'Robert Dan', course: 'React'},
      {username : 'Max William', course: 'Python'},      
    ]
  }

  userNameChangeHandler = (event) => {
    this.setState({
      properties : [
        {username : 'Robert Dan', course: 'React'}, 
        {username : event.target.value, course: 'Python'},     
      ]
    });

    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <UserInput change={this.userNameChangeHandler} name={this.state.properties[1].username}/>
        <UserOutput name={this.state.properties[0].username} course={this.state.properties[0].course} />
        <UserOutput name={this.state.properties[1].username} course={this.state.properties[1].course} />
      </div>
    );
  }
}

export default App;

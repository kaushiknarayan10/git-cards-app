import React from 'react';
import './App.css';
import CardList from './CardList';
import Form from './Form';

class App extends React.Component{
  state = {
    profiles:[]
  };

  addNewProfile = (newProfile) => {

    this.setState(prevState => ({
      profiles : [...prevState.profiles, newProfile]
    }))
  };


  render(){
    return(
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit = {this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}

export default App;

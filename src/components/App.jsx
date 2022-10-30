import React from 'react';
import {Form} from './Form/Form';

export class App extends React.Component{
  state = {
    contacts: [],
    filter: '',
  };
  render(){
    return (
      <div>
        <h2>Phonebook</h2>
        <Form />
      </div>);
  }

}


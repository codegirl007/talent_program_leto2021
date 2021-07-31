import React from 'react';
import './index.css';

export class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'react',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }
    
    authorize(event) {
      //verze 1
      // let password = event.target.querySelector('input[type="password"]').value;
      // const newPassword = password === this.state.password; 

      //verze 2
      const newPassword = this.state.password === 'react' ? true : false;
      this.setState({authorized: newPassword});
    }
  
  
  render() {
    const login = (
      <form action = "#" onSubmit={this.authorize}>
        <input type = "password" placeholder="Password" />
        <input type = "submit"/>
      </form>
    );

    const contactInfo = (
      <ul>
          <li>client@example.com</li>
          <li>555.555.5555</li>
      </ul>
    );

    return (
      <div id="authorization">
        <h1>{ this.state.authorized ? 'Contact' : 'Enter the Password' }</h1>
        <p>{ this.state.authorized ? contactInfo : login }</p>
      </div>
    );
  }
}

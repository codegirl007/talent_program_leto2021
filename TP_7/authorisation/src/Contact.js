import React from "react";

class Contact extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      password : 'react',
      authorized : false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(){
      const password = document.querySelector('input[type=password]').value;
      password == this.state.password ? this.setState({authorized: true}) : this.setState({authorized: false});
  }

  render(){
  
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
      <h1>{this.state.authorized == false ? 'Enter the Password' : 'Contact'}</h1>
      <p>{this.state.authorized == false ? login : contactInfo}</p>
    </div>
    );
  }
}

export default Contact;

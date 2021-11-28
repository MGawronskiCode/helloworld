import React, {Component} from 'react';
import Error from './Error';
import './../App.css';


class LoginForm extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      passwordConfirmation: '',
      email: '',
      errors: []
    }

    this.validateUserNameOnBlur = this.validateUserNameOnBlur.bind(this);
    this.validatePasswordOnBlur = this.validatePasswordOnBlur.bind(this);
    this.validatePasswordConfirmationOnBlur = this.validatePasswordConfirmationOnBlur.bind(this);
    this.validateEmailOnBlur = this.validateEmailOnBlur.bind(this);
  }
  
  submitForm(event)
  {
    console.log("Submitting!");
    console.log(event);
    console.log(this);
    this.setState({username : "username"});
  }

  validateUserNameOnBlur(event)
  {
    const username = event.target.value;
    const errors = this.state.errors;

    errors.push(this.validateNotEmpty("Username", username));
    this.setState({username, errors});
  }

  validatePasswordOnBlur(event)
  {
    const password = event.target.value;
    const errors = this.state.errors;

    errors.push(this.validateNotEmpty("Password", password));
    this.setState({password, errors});
  }

  validatePasswordConfirmationOnBlur(event)
  {
    const passwordConfirmation = event.target.value;
    const errors = this.state.errors;

    if(passwordConfirmation !== this.state.password) {
      errors.push("Password must mach!");
    }

    this.setState({passwordConfirmation, errors})
  }

  validateEmailOnBlur(event)
  {
    const email = event.target.value;
    const errors = this.state.errors;

    errors.push(this.validateEmailFormat("Email", email));
    this.setState({email, errors});

  }

  validateEmailFormat(field, value)
  {
    let [lhs, rhs] = value.split('@');
    lhs = lhs || '';
    rhs = rhs || '';

    if(lhs.length <= 0 || rhs.length <= 0)
    {
      return `${field} must be in email format`;
    }
  }

  validateNotEmpty(field, value)
  {
    if(value.length <= 0) {
      console.log("Empty");
      return `${field} must be filled out!`;
    }

  }
  displayErrors() {
    return (
      <div className="Red">
        {this.state.errors.map((err, i) => <Error i={i} err={err} />)}
      </div>
    )
  }

  displayForm()
  {
    return (
      
      <div>
        Username: <input type="Text" onBlur={this.validateUserNameOnBlur}/><br />
        Password: <input type="Text" onBlur={this.validatePasswordOnBlur}/><br />
        Password Confirmation: <input type="Text" onBlur={this.validatePasswordConfirmationOnBlur}/><br />
        Email: <input type="Text"  onBlur={this.validateEmailOnBlur}/><br /><br />
        <button onClick={this.submitForm}>Submit</button>
      </div>
      )
  }

  render() {
    return (
      <div>
        {this.displayErrors()}
        {this.displayForm()}
      </div>
    )
  }
}

export default LoginForm;

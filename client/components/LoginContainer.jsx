LoginContainer = React.createClass({

  getInitialState() {
    return {
      errorObj: {}
    }
  },

  validateEmail(email) {
  	let re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  	let valid = re.test(email);
    if (valid) {
      return true;
    }else{
      this.setState({errorObj: {heading: 'Error', message: 'Invalid email'}});
      return false;
    }
  },

  errorMessage() {
    return <Message messageType="negative" messageContent={this.state.errorObj} />
  },

  render() {
  	return <Login validateEmail={this.validateEmail} errorMessage={this.errorMessage()} />
  }

});
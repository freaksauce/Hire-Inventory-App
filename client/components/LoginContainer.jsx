LoginContainer = React.createClass({

  getInitialState() {
    return {
      errorObj: {},
      showError: false
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
    console.log(this.state.showError);
    if (this.state.showError === true) {
      return <Message messageType="negative" messageContent={this.state.errorObj} hideErrorMessage={this.hideErrorMessage} />    
    }
  },

  hideErrorMessage() {
    console.log('hide error message');
    this.setState({showError: false});
  },

  showErrorMessage() {
    console.log('show error message');
    this.setState({showError: true});
  },

  render() {
  	return <Login validateEmail={this.validateEmail} errorMessage={this.errorMessage()} hideErrorMessage={this.hideErrorMessage} showErrorMessage={this.showErrorMessage} />
  }

});
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

  showLoginError() {
    this.setState({errorObj: {heading: 'Invalid login', message: 'The user does not exist'}});
    this.setState({showError: true});
  },

  errorMessage() {
    if (this.state.showError === true) {
      return <Message messageType="negative" messageContent={this.state.errorObj} hideErrorMessage={this.hideErrorMessage} />    
    }
  },

  hideErrorMessage() {
    this.setState({showError: false});
  },

  showErrorMessage() {
    this.setState({showError: true});
  },

  render() {
  	return <Login validateEmail={this.validateEmail} errorMessage={this.errorMessage()} hideErrorMessage={this.hideErrorMessage} showErrorMessage={this.showErrorMessage} showLoginError={this.showLoginError} />
  }

});
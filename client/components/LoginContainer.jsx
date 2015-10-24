LoginContainer = React.createClass({

  getInitialState() {
    return {
      errorMessageText: ''
    }
  },

  validateEmail(email) {
  	console.log('parent validateEmail');
  	console.log(email);
  	let re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  	let valid = re.test(email);
    if (valid) {
      return true;
    }else{
      this.setState({errorMessageText: 'Invalid email'});
      return false;
    }
  },

  errorMessage() {
  	return <div className="ui negative message">
              <div className="header">
                {this.state.errorMessageText}
              </div>
            </div>;
  },

  render() {
  	return <Login validateEmail={this.validateEmail} errorMessage={this.errorMessage()} />
  }

});
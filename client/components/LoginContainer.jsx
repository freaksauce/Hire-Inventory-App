LoginContainer = React.createClass({

  validateEmail(email) {
  	console.log('parent validateEmail');
  	console.log(email);
  	let re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  	return re.test(email);
  },

  errorMessage() {
  	return <div className="ui error message"> </div>;
  },

  render() {
  	return <Login validateEmail={this.validateEmail} errorMessage={this.errorMessage} />
  }

});
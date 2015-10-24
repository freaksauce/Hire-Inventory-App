Login = React.createClass({

	getInitialState() {
		return {
			showLoginError: false
		}
	},

	handleSubmit(e) {
		let emailVal = React.findDOMNode(this.refs.email).value;
		let passwordVal = React.findDOMNode(this.refs.password).value;
		if (this.props.validateEmail(emailVal)) {
			console.log('email valid');
		}else{
			console.log('email invalid');
			this.setState({showLoginError: true});
		}

		e.preventDefault();
	},

	checkErrorState() {
		console.log('check error state');
		if (this.state.showLoginError === true) {
			console.log('error message');
			return this.props.errorMessage;
		}
	},

	render() {
		return (
			<div className="ui two column centered grid login-form">
				<div className="column">
					<h2>Login</h2>
					<form className="ui large form" onSubmit={this.handleSubmit}>
						<div className="ui stacked segment">						
							<div className="field">					
								<div className="ui left icon input">
									<i className="user icon"></i>
									<input ref="email" type="text" name="email" placeholder="E-mail address"/>
								</div>							
							</div>						
							<div className="field">
								<div className="ui left icon input">
									<i className="lock icon"></i>
									<input ref="password" type="password" name="password" placeholder="Password"/>
								</div>
							</div>
							<input className="ui fluid large teal submit button" type="submit" value="Login" />
						</div>					
						{this.checkErrorState()}
					</form>
				</div>
			</div>			
		)
	}
});
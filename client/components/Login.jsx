Login = React.createClass({

	handleSubmit(e) {
		let emailVal = this.refs.email.value;
		let passwordVal = this.refs.password.value;
		if (this.props.validateEmail(emailVal)) {
			this.props.hideErrorMessage();

			Meteor.loginWithPassword(emailVal, passwordVal, (err) => {
		      if (err) {
		        // The user might not have been found, or their passwword
		        // could be incorrect. Inform the user that their
		        // login attempt has failed.
		        // console.log(err);
		        this.props.showLoginError();
		      }else{
		        // The user has been logged in.
		        FlowRouter.go("/dashboard");
		      }
		    });

		}else{
			this.props.showErrorMessage();
		}

		e.preventDefault();
	},

	renderErrorMessage() {
		return this.props.errorMessage;		
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
						{this.renderErrorMessage()}
					</form>
				</div>
			</div>			
		)
	}
});
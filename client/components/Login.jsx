Login = React.createClass({
	render() {
		return (
			<div className="login-form">
				<h2>Login</h2>
				<form className="ui large form">
					<div className="ui stacked segment">
						
						<div className="field">					
							<div className="ui left icon input">
								<i className="user icon"></i>
								<input type="text" name="email" placeholder="E-mail address"/>
							</div>							
						</div>
						
						<div className="field">
							<div className="ui left icon input">
								<i className="lock icon"></i>
								<input type="password" name="password" placeholder="Password"/>
							</div>
						</div>

						<div className="ui fluid large green submit button">Login</div>

					</div>

					<div className="ui error message"> </div>
				</form>
			</div>			
		)
	}
});
MainNav = React.createClass({
	render() {
		return (
			<nav>
				<div className="ui inverted menu">
					<a href="/" className="active item">
						Home
					</a>
					<a href="/login" className="item">
						Login
					</a>
				</div>
			</nav>
		)
	}
});
MainNav = React.createClass({
	render() {
		return (
			<nav>
				<div className="ui inverted menu fixed">
					<a href="/" className="active item">
						Hire Inventory App
					</a>
					<a href="/login" className="item">
						Login
					</a>
				</div>
			</nav>
		)
	}
});
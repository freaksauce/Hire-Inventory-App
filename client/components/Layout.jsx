Layout = React.createClass({
  render() {
    return (
      <div>
        <MainNav />
        <div className="container">
          <header><h1 className="">Hire Inventory App</h1></header>
          <main>
            {this.props.content}
          </main>
        </div>
      </div>
    );
  }
});
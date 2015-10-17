Layout = React.createClass({
  render() {
    return (
      <div>
        <MainNav />
        <div className="container">          
          <main>
            {this.props.content}
          </main>
        </div>
      </div>
    );
  }
});
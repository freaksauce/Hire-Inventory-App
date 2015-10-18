Layout = React.createClass({
  render() {
    return (
      <div>
        <MainNav />
        <div className="ui main container">          
          <main>
            {this.props.content}
          </main>
        </div>
      </div>
    );
  }
});
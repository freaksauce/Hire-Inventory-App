Layout = React.createClass({
  render() {
    return (
      <div>
        <MainNav />
        <div className="ui container">          
          <main>
            {this.props.content}
          </main>
        </div>
      </div>
    );
  }
});
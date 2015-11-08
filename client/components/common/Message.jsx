Message = React.createClass({

  propTypes: {
    messageType: React.PropTypes.string.isRequired,
    messageContent: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      messageClasses: "ui message "+this.props.messageType
    }
  },

  componentDidMount() {
    var _self = this;
    $('.message .close')
      .on('click', function() {
        $(this)
          .closest('.message')
          .fadeOut('fast');
          _self.props.hideErrorMessage();
      }
    );
  },

  getErrors() {
    let errors = [];
    if (typeof this.props.messageContent.message === "object") {      
      for (errorMsg in this.props.messageContent.message) {
        errors.push(this.props.messageContent.message[errorMsg]);
      }
      return errors.map((err) => {
        console.log(err);
        return <ErrorMessageItem msg={err} />
      });
    }else{
      return this.props.messageContent.message;
    }
  },

  render() {
    return (
      <div className={this.state.messageClasses}>
        <i className="close icon"></i>
        <div className="header">
          {this.props.messageContent.heading}
        </div>
        <div className="message-body">
          <div className="ui list">{this.getErrors()}</div>
        </div>
      </div>
    );
  }
});

ErrorMessageItem = React.createClass({
  
  propTypes: {
    msg: React.PropTypes.string.isRequired
  },

  render() {
    return (
        <div className="item">{this.props.msg}</div>
      );
  }

});
import React from 'react';
import $ from 'jquery';

class BroadcastingButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.bc = new BroadcastChannel('button');
  }

  getDateTime() {
    // TODO: Figure out how to integrate world time API
    // var dtApiUrl = "http://worldtimeapi.org/api/ip";
    // var dateTime;
    // $.ajax({
    //   url: dtApiUrl, 
    //   type: "GET",
    //   dataType : "json",
    //   async : false,
    //   success : function(data) {
    //     dateTime = Date.parse(data.datetime);
    //   }
    // });
    // return dateTime;
    return new Date();
  }

  handleClick() {
    var dateTime = this.getDateTime();
    this.bc.postMessage(dateTime);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Press Button!
      </button>
    );
  }
}

export default BroadcastingButton;

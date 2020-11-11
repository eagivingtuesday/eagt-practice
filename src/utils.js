import $ from 'jquery';

function getApiTime() {
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

export function sendTime(channel) {
  channel.postMessage(getApiTime());
}

export var donationAmount = (2499).toLocaleString();

import $ from 'jquery';

function getApiTime() {
  var dtApiUrl = "http://worldtimeapi.org/api/ip";
  var dateTime;
  $.ajax({
    url: dtApiUrl,
    type: "GET",
    dataType : "json",
    async : false,
    success : function(data) {
      dateTime = Date.parse(data.datetime);
    }
  });
  return dateTime;
}


export function sendTime(channel) {
  channel.postMessage(getApiTime());
}

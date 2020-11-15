import $ from 'jquery';

function getApiTime() {
  const dtApiUrl = "https://worldtimeapi.org/api/ip";
  var dateTime;
  $.ajax({
    url: dtApiUrl,
    type: "GET",
    dataType: "json",
    async: false,
    success: function(data) {
      dateTime = Date.parse(data.datetime);
    }
  });

  return dateTime;
}

export function sendTime(channel) {
  channel.postMessage(getApiTime());
}

export var donationAmount = (2_499).toLocaleString();

import $ from 'jquery';
const { DateTime } = require("luxon");

export function getApiTime() {
  const dtApiUrl = "https://worldtimeapi.org/api/ip";
  var dateTime;
  $.ajax({
    url: dtApiUrl,
    type: "GET",
    dataType: "json",
    async: false,
    success: function(data) {
      dateTime = DateTime.fromISO(data.datetime);
    }
  });

  return dateTime;
}

export var donationAmount = (2_499).toLocaleString();

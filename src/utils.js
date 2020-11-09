export function sendTime(channel) {
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

  channel.postMessage(new Date());
}

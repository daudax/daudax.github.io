videojs.getPlayer('myPlayerID').ready(function() {
  var myPlayer = this,
  accountId = myPlayer.bcinfo.accountId,
  options = {};

  // +++ Wait for loadstart event so can use mediainfo object +++
  myPlayer.on('loadstart', function() {
  var videoId = myPlayer.mediainfo.id,
  baseURL = 'https://analytics.api.brightcove.com/v1/alltime/accounts/',
  endPoint = accountId + '/videos/' + videoId;
  options.proxyURL = "https://solutions.brightcove.com/bcls/bcls-proxy/doc-samples-proxy-v2.php";
  options.url = baseURL + endPoint;
  options.requestType = "GET";
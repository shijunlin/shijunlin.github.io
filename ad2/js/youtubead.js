function loadYtplayer(){
 var tag = document.createElement('script');
 tag.src = "http://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

var player;
var key =  videoIds = document.URL.split('#');
function onYouTubeIframeAPIReady() {
  var youtubekey = key[1];
  player = new YT.Player('player', { 
    height: '315',
    width: '980',
    videoId: youtubekey,
    playerVars: {rel: 0, showinfo: 0,autoplay:1,controls:0},
    events: {
      'onStateChange':onPlayerStateChange 
    }
  });
 }

function onPlayerStateChange(event) {
  if(event.data == YT.PlayerState.ENDED) {
    playtime = player.getCurrentTime();
    player.seekTo(0);
  }
}

function ytbclose(){
  playtime = player.getCurrentTime();
  player.pauseVideo();
  player.seekTo(0);
  $("#youtube").hide();
}

function playing(){
   player.seekTo(0);
   player.playVideo();
   $("#youtube").show();
}

function mute() {
    player.mute()
}

function unmute() {
    player.unMute()
}

$(document).ready(function(){
   loadYtplayer();
});

var setSong = function(songNumber){
    currentlyPlayingSongNumber = parseInt(songNumber);
    currentSongFromAlbum = currentAlbum.songs[songNumber- 1];
}

var getSongNumberCell = function(number){
    return $('.song-item-number[data-song-number="'] + number + '")';
var createSongRow = function(songNumber, songName, songLength) {

var template =
      '<tr class="album-view-song-item">'
     + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
     + '  <td class="song-item-title">' + songName + '</td>'
     + '  <td class="song-item-duration">' + songLength + '</td>'
     + '</tr>'
   ;
  
var $row = $(template);
    
  var clickHandler = function() {
    var songNumber = parseInt($(this).attr('data-song-number'));
    
    if (setSong !== null){
        var currentlyPlayingCell = $('.song-item-number[data-song-number="'currentlyPlayingSongNumber +'"]');
        currentlyPlayingCell.html(currentlyPlayingSongNumber);
        }
    if (currentlyPlayingSongNumber !== songNumber) {
             $(this).html(pauseButtonTemplate);
             setSong(songNumber);
             updatePlayerBarSong();
         } else if (currentlyPlayingSongNumber === songNumber) {
             $(this).html(playButtonTemplate);
             $('.main-controls .play-pause').html(playerBarPlayButton);
             currentlyPlayingSongNumber = null;
             currentSongFromAlbum = null;
         }

};
     };
    
     var onHover = function(event) {
         // Placeholder for function logic
     };
     var offHover = function(event) {
         // Placeholder for function logic
     };
    
  $row.find('.song-item-number').click(clickHandler);
    
  $row.hover(onHover, offHover);
  
  return $row;
};

var albumTitle = 

var setCurrentAlbum = function(album) {
  currentAlbum = album; 
  var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
  
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl);
    
   $albumSongList.empty(); 
  
  for (var i = 0; i < album.songs.length; i++) {
     var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
         $albumSongList.append($newRow);
  }
  
};

var trackIndex = function(album, song) {
     return album.songs.indexOf(song);
 };

var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';

var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

var playerBarPlayButton = '<span class="ion-play"></span>';

var playerBarPauseButton = '<span class="ion-pause"></span>';

var currentAlbum = null;

var currentlyPlayingSongNumber = null;

var currentSongFromAlbum = null;

var $previousButton = $('.main-controls .previous');

var $nextButton = $('.main-controls .next');


$(document).ready(function() {
  setCurrentAlbum(albumPicasso);
     $previousButton.click(previousSong);
     $nextButton.click(nextSong);
 
    
  songListContainer.addEventListener('mouseover', function(event){
});
var albums =[albumPicasso,albumMarconi,albumAristotle];

var index = 1;
  album.image.addEventListener("click",function(event) {  
    setCurrentAlbum(album[index]);
    index++;
    if (index == albums.length){
      index = 0;
    }
  });
var updatePlayerBarSong = function() { 
   
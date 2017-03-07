var albumPicasso = {
  title: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUr1: 'assets/images/01.png',
  songs: [
    { title: 'Blue', duration: '4:26'},
    { title: 'Green', duration: '3:14'},
    { title: 'Red', duration: '5:01'},
    { title: 'Pink', duration: '3:21'},
    { title: 'Magenta', duration: '2:15'},
  ]
};

var albumMarconi = {
  title: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'EM',
  year: '1909',
  albumArtUr1: 'assets/images/20.png',
  songs: [
    {title: 'Hello, Operator?', duration: '1:01'},
    {title: 'Ring, ring, ring', duration: '5:01'},
    {title: 'Fits in your pocket', duration: '3:21'},
    {title: 'Can you hear me now?', duration: '3:14'},
    {title: 'Wrong phone number', duration: '2:15'}
  ]
};

var albumAristotle = {
  title: 'Nichomachean Ethics',
  artist: 'Aristotle',
  label: 'Philosopher Kings',
  year: '384 bc',
  albumArtUr1:'assets/images/17.png',
  songs: [
    {title: 'Stagira', duration: '4:35'},
    {title: 'Kings of Macedonia', duration: '5:48'},
    {title: 'Platos Demise', duration: '2:28'},
    {title: 'Athens Escape', duration: '13:21'},
    {title: 'The Art of Rhetoric', duration: '8:10'}
  ]
};

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
         // clickHandler logic
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

var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

var currentlyPlayingSong = null;

$(document).ready(function() {
  setCurrentAlbum(albumPicasso);
 
    
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

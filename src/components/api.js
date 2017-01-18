import $ from 'jQuery'
import apiKey from './../steamKey'

$(document).ready(function () {
  $('form').submit(function (evt) {
    evt.preventDefault()
    var steamIdEndpoint = 'http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/' + '?' + apiKey
    var spotifyAlbumEndpoint = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/' + '?' + apiKey
    var spotifyOptions = {
      format: 'json'
      vanityUrl: $('#vanityUrl').val(),
    //     var spotifySearchEndpoint = 'https://api.spotify.com/v1/search';
    // var spotifyAlbumEndpoint = 'https://api.spotify.com/v1/albums';
    // var spotifyOptions = {
    //   type: 'album',
    //   query: $('#song').val(),
    //   limit: '8'
    } // Requests data from spotify API. Must be a JavaScript Object

    function displayGame (data) {
     // function displayAlbums (data) {
      var gameList = $('<ul></ul>')
      //       var albumList = $('<ul></ul>')

//       // create jQuery array of album covers
//       var albumListItems = data.albums.items.map(function (album, idx) {
    var gameListItems = data.games.items.map (function (album, idx) {
      var gameCover = games.img_icon_url
//         var albumCover = album.images[0].url
      var gameName = games.name
//         var artistName = album.artists[0].name
      return $(`
       <div class="games-list" steam-id="${steamid}">
            <li>
               <a href="#">
                 <img src="${gameCover}" alt="${gameName}">
               </a>
             </li>
           </div>
         `)
       })
//         return $(`
//           <div class="album col-md-3" album-id="${album.id}">
//             <li>
//               <a href="#">
//                 <img src="${albumCover}" alt="${artistName}">
//               </a>
//             </li>
//           </div>
//         `)
//       })

//       // append covers to album list
    gameList.append(gameListItems)
//       albumList.append(albumListItems)

//       // clear the old album covers and replace them with the new list
    $('#game').empty().append(gameList)
//       $('#music').empty().append(albumList)

//       // remove previous click handlers and replace with new ones
//       // the old way was creating multiple click handlers every time search executed
    $('game').off('click', 'a').on('click', )
//       $('#music').off('click', 'a').on('click', 'a', function (event) {
//         event.preventDefault()

//         var a = $(this)
//         var img = a.children('img')
//         var src = img.attr('src')
//         var captionText = img.attr('alt')
//         var album = a.parents('.album')
//         var id = album.attr('album-id')

//         $.getJSON(`${spotifyAlbumEndpoint}/${id}`, function (album) {
//           var $overlay = $('<div id="overlay"></div>')
//           var $image = $('<img>')
//           var $caption = $('<p></p>')
//           var $albumName = $('<a></a>')
//           var $releaseDate = $('<p></p>')

//           $overlay
//             .append($image)
//             .append($caption)
//             .append($albumName)
//             .append($releaseDate)

//           $('body').append($overlay)

//           $image.attr('src', src)
//           $overlay.show()

//           $caption.text(captionText)
//           $releaseDate.text(album.release_date)

//           $albumName
//             .attr('href', album.external_urls.spotify)
//             .attr('target', '_blank')
//             .text(album.name)

//           $overlay.click(function () {
//             $overlay.remove()
//           })
//         })
//       })
//     }

//     $.getJSON(spotifySearchEndpoint, spotifyOptions, displayAlbums)
//   })
// })

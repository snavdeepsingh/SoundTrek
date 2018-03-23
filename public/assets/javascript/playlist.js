// $(document).ready(function(){
//   $('.sidenav').sidenav();
// });
// $(document).ready(function(){
    // init carousel
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDzsha_Y7fmjvpUUwjhXObV1otIdcLlHx0",
        authDomain: "proj0324.firebaseapp.com",
        databaseURL: "https://proj0324.firebaseio.com",
        projectId: "proj0324",
        storageBucket: "",
        messagingSenderId: "978329944664"
      };
      firebase.initializeApp(config);

    // $("h1").on("click", function(){
    //     alert("Success!");
    // });

    

      function login() {
        function newLoginHappened(user){
          if(user){
            // user is signed in
            $("#login").hide();
            app(user);
          } else {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithRedirect(provider);
          }
        }
        firebase.auth().onAuthStateChanged(newLoginHappened);
      }
    function app(user){
      // user.displayName
      // user.email
      // user.photId
      // user.uid
      
      var userName = $("<p>");
      userName.addClass("user");
      userName.text("welcome " + user.displayName);
      console.log(user.displayName);
      $("#userName").append(userName);
      
    }

    window.onload = login;
    
      
    $("#signOut").on("click", function(){
      signOut();
    })
    
   function signOut(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
   }

   // iframe - iframe - iframe
   var tag = document.createElement('script');
   tag.src = "https://www.youtube.com/iframe_api";
   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

   var player;
   function onYouTubeIframeAPIReady() {
     player = new YT.Player('player', {
       height: '390',
       width: '640',
      //  videoId: 'CcLE1v4Msns',
       events: {
        //  'onReady': onPlayerReady,
         'onReady': playlistLoader,         
        //  'onStateChange': onPlayerStateChange
       }

     //END OF: player = new YT.Player('player', {
     });

   //END OF: function onYouTubeIframeAPIReady() {
   }

   var playlist = ["CcLE1v4Msns", "gZ6uzWRVgRk", "m6ZgytCOBw8"];

   $("#search-url-btn").on("click", function(){
     event.preventDefault();

    // var addVideoToList = $("#search-url").val().trim();

    // playlist.push(addVideoToList);
    playlist.push(urlToId());
    

    console.log(playlist);
    // playlistCuer();
    playlistLoader_postAdd();
    

   })

   function urlToId() {

    var addVideoToList = $("#search-url").val().trim();
    $("#search-url").val("")
    var vidUrlToId = addVideoToList.substring(17)
    console.log(vidUrlToId)
    return vidUrlToId;


   }

  // var playlistIndex = 0;
  function playlistLoader() {
    // var adjPlaylistIndex = playlistIndex - 1;
  
    player.loadPlaylist({
        // listType:String,
        playlist
        // ,adjPlaylistIndex
        // index:playlistIndex
        // startSeconds:Number,
        // suggestedQuality:String
      })

  //END OF: function playlistLoader() {
  }

  function playlistLoader_postAdd() {
    // var adjPlaylistIndex = playlistIndex - 1;
    var currentTime = player.getCurrentTime()
  
    player.loadPlaylist({
        // listType:String,
        playlist,
        startSeconds: currentTime
        // ,adjPlaylistIndex
        // index:playlistIndex
        // startSeconds:Number,
        // suggestedQuality:String
      })

  //END OF: function playlistLoader() {
  }



  // function playlistCuer() {

  //   player.cuePlaylist(
  //     playlist
  //     // playlist:String|Array,
  //     // index:Number,
  //     // startSeconds:Number,
  //     // suggestedQuality:String
  //   )

  // //END OF: function playlistCuer() {  
  // }



  // $("#playlist-next").on("click", function(){
  //   event.preventDefault();
  //   console.log("next btn!")
  //   playlistIndex++;

  //   playlistLoader();

  // });

  // test: cue video thumbnail
  //  var player_cue;
  //  function onYouTubeIframeAPIReady() {
  //   player_cue = new YT.Player('player-cue', {
  //      height: '100',
  //      width: '200',
  //      videoId: 'CcLE1v4Msns',
  //      events: {
  //      }
  //    });
  //  }

  //  function onPlayerReady(event) {
  //    event.target.playVideo();
  //  }

  //  var done = false;
  //  function onPlayerStateChange(event) {
  //    if (event.data == YT.PlayerState.PLAYING && !done) {
  //     //  setTimeout(stopVideo, 1000 * 3);
  //     // setTimeout(loadVideoById1, 1000 * 10);
  //     // setTimeout(loadVideoByUrl, 1000 * 5);

  //     // test: cue video thumbnail      
  //     // cueVideoById();
      
      
  //      done = true;
  //    // END OF: if (event.data == YT.PlayerState.PLAYING && !done) {  
  //    } 

  //   //  else if (event.data != YT.PlayerState.PLAYING) {
  //   //    console.log("video stopped!", player.getPlayerState())
  //   //    cueVidId();
  //   //  }

  //  //END OF: function onPlayerStateChange(event) {  
  //  }
   
  //  function stopVideo() {
  //    player.stopVideo();
  //  }

  //  function cueVidId() {
  //   player.cueVideoById(gZ6uzWRVgRk);

  //  }

//   function loadVideoById1(){
//     player.loadVideoById({videoId:'gZ6uzWRVgRk'});
//     console.log("P.TM video!");
//     setTimeout(loadVideoById2, 1000 * 5);
    
//   }
   
  
// function loadVideoById2() {
//   player.loadVideoById({videoId:'m6ZgytCOBw8'})  

// }

// function loadVideoByUrl() {
//   player.loadVideoByUrl({mediaContentUrl:"https://www.youtube.com/watch?v=gZ6uzWRVgRk"})

// }


// test: cue video thumbnail
// function cueVideoById() {
//   player_cue.cueVideoById({videoId:"gZ6uzWRVgRk"})
// }
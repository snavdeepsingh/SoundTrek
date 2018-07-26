// $(document).ready(function(){
//   $('.sidenav').sidenav();
// });
// $(document).ready(function(){
    // init carousel
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyApFL9NGnN4kE--WBYnbd9vZbUz7EGzpNU",
      authDomain: "soundtrek-app.firebaseapp.com",
      databaseURL: "https://soundtrek-app.firebaseio.com",
      projectId: "soundtrek-app",
      storageBucket: "soundtrek-app.appspot.com",
      messagingSenderId: "272133441465"
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

  // var playlist = ["CcLE1v4Msns", "gZ6uzWRVgRk", "m6ZgytCOBw8"];
  var playlist = [];

  // var playlist;
  // console.log("right after playlist array:", playlist);

  

  const database = firebase.database();
  // database.ref().set("test"); 
  // database.ref("playlists/mozart's").set(playlist);

  
  database.ref("playlists/mozart's").on("child_added", function(snapshot) {
    var playlistSnap = snapshot.val();
    // if( playlist.indexOf() ) {
    console.log("firebase snap, before push", playlist);
      if (playlist.indexOf(playlistSnap) > -1 ) {
        return;
      } else {
        playlist.push(playlistSnap);
        
      }
      
      console.log("index of",  playlist.indexOf(playlistSnap) );

    // }
    console.log("firebase snap, after push", playlist);
    console.log("database ref!")
  });




   $("#search-url-btn").on("click", function(){
     event.preventDefault();
    //  playlist = [];
    // $("#search-url").val("")
    

    //  var test = urlToId();
    // console.log("urlToId on click func:", test )

    // var addVideoToList = $("#search-url").val().trim();

    // playlist.push(addVideoToList);
    // if( playlist.indexOf(test) <= -1 ){
      // var addId = urlToId();
    console.log("before array push", playlist);
    playlist.push( urlToId() );     
    console.log("after array push", playlist);
    

    // }

    // playlistCuer();
    playlistLoader_postAdd();

   database.ref("playlists/mozart's").set(playlist);

   console.log("after firebase push", playlist);
    

   });

   

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

    // database.ref("playlists/mozart's").on("value", function(snapshot) {
    //   var listSnap = snapshot.val();
    //   playlist.push(listSnap);
    // });

    // console.log("inside playListLoader", playlist);



  
    player.loadPlaylist({
        // listType:String,
        playlist,
        // ,adjPlaylistIndex
        // index:1
        // startSeconds:Number,
        // suggestedQuality:String
      })

  //END OF: function playlistLoader() {
  }

  function playlistLoader_postAdd() {
    // var adjPlaylistIndex = playlistIndex - 1;
    var currentTime = player.getCurrentTime()

    // database.ref("playlists/mozart's").on("value", function(snapshot){
    //   var listSnap = snapshot.val();
    //   playlist.push(listSnap);

    // })

  
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
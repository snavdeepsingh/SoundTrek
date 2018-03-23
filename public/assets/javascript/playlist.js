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
       height: '500',
       width: '875',
       videoId: 'CcLE1v4Msns',
       events: {
         'onReady': onPlayerReady,
         'onStateChange': onPlayerStateChange
       }
     });
   }

   function onPlayerReady(event) {
     event.target.playVideo();
   }

   var done = false;
   function onPlayerStateChange(event) {
     if (event.data == YT.PlayerState.PLAYING && !done) {
      //  setTimeout(stopVideo, 1000 * 3);
      setTimeout(loadVideoById1, 1000 * 5);
      
       done = true;
     } 
    //  else if (event.data != YT.PlayerState.PLAYING) {
    //    console.log("video stopped!", player.getPlayerState())
    //    cueVidId();
    //  }
   }
   
  //  function stopVideo() {
  //    player.stopVideo();
  //  }

  //  function cueVidId() {
  //   player.cueVideoById(gZ6uzWRVgRk);

  //  }

  function loadVideoById1(){
    player.loadVideoById({videoId:'gZ6uzWRVgRk'});
    console.log("P.TM video!");
    setTimeout(loadVideoById2, 1000 * 5);
    
  }
   
  
function loadVideoById2() {
  player.loadVideoById({videoId:'m6ZgytCOBw8'})  

}
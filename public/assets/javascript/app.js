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
  
   
  // ===================================================================
  // This uploads map to the map.html after user is logged in. 
  google.maps.event.addDomListener(window, 'load', initialize);
   var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   var labelIndex = 0;
   var number = 0;
   function initialize() {
     var austin = { lat: 30.30, lng: -97.75 };
     var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 12,
       center: austin
     });

     // This event listener calls addMarker() when the map is clicked.
     google.maps.event.addListener(map, 'click', function(event) {
       addMarker(event.latLng, map);
     });

    
   }

   // Adds a marker to the map.
   function addMarker(location, map) {
     // Add the marker at the clicked location, and add the next-available label
     // from the array of alphabetical characters.
     var image = "assets/images/cassette.png";
      var marker = new google.maps.Marker({
       position: location,
       map: map,
      icon: image,
     });

     var contentString = '<div class="content">'+
         '<div class="siteNotice">'+
         '</div>'+ '<div class="playlistView"></div>'+
         '<div class="input-field col s12">' + 
         '<input placeholder="Create a playlist" class="playlistInput validate" type="text" class="validate">'+
         '<label for="first_name"></label>' +
         '</div>'+
         '<a type="submit" id="' +(number)+'" class="btn-floating playlist-btn btn-large waves-effect waves-light red">' + '<i class="material-icons">+</i>'+ '</a>'+
         '<h1 id="firstHeading" class="firstHeading">'+(number++)+'</h1>'+
         '<div id="bodyContent">'+
         '<p></p>'+
         '<p>, <a href="playlist </a> '+
         '(last visited June 22, 2009).</p>'+
         '</div>'+
         '</div>';

     var infowindow = new google.maps.InfoWindow({
       content: contentString
     });
     marker.addListener('click', function() {
       infowindow.open(map, marker);
     });

     $(document).on("click", ".playlist-btn", function(event) {
      event.preventDefault();
      var playlistId = $(this).attr("class");
      // This line grabs the input from the textbox
      var playlist = $(this).closest(".content").find(".playlistInput").val().trim();
          var playlistBtn = $("<button>");

          playlistBtn.addClass("playlist-button");
          playlistBtn.attr("data-name");
          playlistBtn.text(playlist);
          if (playlist !== ""){
            $(this).closest(".content").find(".playlistView").append(playlistBtn);
            console.log(playlist);
            console.log(playlistBtn.text(playlist).val());
          };
          $(".playlistInput").val("");
          
    
    });
   }

   

   $(document).on("click", ".firstHeading", function(e){
    $(this).text();
    console.log($(this).text());
   }) 

   $(document).on("click", ".playlist-button", function(event) {
     window.location = "playlist.html";
     
   })

  // });


    
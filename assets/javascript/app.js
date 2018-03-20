$(document).ready(function(){
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
      // Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
    callbacks: {
      signInSuccess: function(currentUser, credential, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
  };


  // The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
    
});
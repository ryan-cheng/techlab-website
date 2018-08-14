// Initialize Firebase
var config = {
  apiKey: "AIzaSyAbROaNXDM-Mm-pWYD7-i7dIKihKqW0SSg",
  authDomain: "techlab-website-1f5cc.firebaseapp.com",
  databaseURL: "https://techlab-website-1f5cc.firebaseio.com",
  projectId: "techlab-website-1f5cc",
  storageBucket: "techlab-website-1f5cc.appspot.com",
  messagingSenderId: "434406194453"
};
firebase.initializeApp(config);

var db = firebase.firestore();


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function createContact(element) {
  element.preventDefault();

  var name = document.getElementById("contact_user_name").value;
  var email = document.getElementById("contact_user_email").value;

  if (name && email && validateEmail(email)) {
    console.log("VALIDATION SUCCESS.");
    db.collection("users").add({
      "name": name,
      "email": email
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      db.collection("emails").doc(email).set({
        "userID": docRef.id,
      })
      .then(function() {
        console.log("Wrote email ref!");
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }
  else {
    console.log("VALIDATION FAILED.");
  }
}



















/*

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAbROaNXDM-Mm-pWYD7-i7dIKihKqW0SSg",
  authDomain: "techlab-website-1f5cc.firebaseapp.com",
  databaseURL: "https://techlab-website-1f5cc.firebaseio.com",
  projectId: "techlab-website-1f5cc",
  storageBucket: "techlab-website-1f5cc.appspot.com",
  messagingSenderId: "434406194453"
};
firebase.initializeApp(config);

var db = firebase.firestore();


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function createContact(element) {
  element.preventDefault();

  var name = document.getElementById("contact_user_name").value;
  var email = document.getElementById("contact_user_email").value;

  if (name && email && validateEmail(email)) {
    console.log("VALIDATION SUCCESS.");
    db.collection("users").add({
      "name": name,
      "email": email
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      db.collection("emails").doc(email).set({
        "userID": docRef.id,
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);

      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }
  else {
    console.log("VALIDATION FAILED.");
  }
}
*/

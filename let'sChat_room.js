
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {

  apiKey: "AIzaSyBPWR4_LUQZQn5G_2wGfqRxQm3R0v7wjZw",

  authDomain: "let-schat-4a35e.firebaseapp.com",

  databaseURL: "https://let-schat-4a35e-default-rtdb.firebaseio.com",

  projectId: "let-schat-4a35e",

  storageBucket: "let-schat-4a35e.appspot.com",

  messagingSenderId: "330511961486",

  appId: "1:330511961486:web:f3665ae23cde09548f28df",

  measurementId: "G-9Y8S36SX4J"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

document.getElementById("room_name").innerHTML="";
    localStorage.setItem("room_name", room_name);
    
    window.location = "let'sChat_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
});});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "let'sChat_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

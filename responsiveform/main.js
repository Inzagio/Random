// Initialize Firebase
var config = {
    apiKey: "AIzaSyCwxM1E4lobueDE4KErTnIJQB8PMyAN3WI",
    authDomain: "contactformtkb.firebaseapp.com",
    databaseURL: "https://contactformtkb.firebaseio.com",
    projectId: "contactformtkb",
    storageBucket: "contactformtkb.appspot.com",
    messagingSenderId: "388114459588"
};
firebase.initializeApp(config);

//  Ref message collection
var messagesRef = firebase.database().ref('messages');


// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e) {
    e.preventDefault();

    // get vals
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    //save message
    saveMessage(name,company, email, phone, phone ,message);

    //Show alert
    document.querySelector('.alert').style.display = 'block';

    //hide alert
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    document.getElementById('contactForm').reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name,company, email, phone, phone ,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
}
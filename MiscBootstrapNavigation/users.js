var config = {
    apiKey: "AIzaSyAVEJXmj2yzkXNNJc36KyIRCYydjkVw9IA",
    authDomain: "testuserdbtkb.firebaseapp.com",
    databaseURL: "https://testuserdbtkb.firebaseio.com",
    projectId: "testuserdbtkb",
    storageBucket: "testuserdbtkb.appspot.com",
    messagingSenderId: "1001793894896"
};
firebase.initializeApp(config);
var database = firebase.database();
var dbRefUsers = database.ref('users');

//Tabs with panes
function userTabs() {
    var dynamicContentArea = document.getElementById('dynamicContentArea');
    var tabNav = element_builder('nav', { class: 'nav nav-tabs', role: 'tablist' });
    dynamicContentArea.appendChild(tabNav);

    for (var i = 0; i < 2; i++) {
        var tabNavItem = element_builder('nav', { class: 'nav-item' });
        var tabNavAnchor = element_builder('a', { class: 'nav-link'});
        tabNav.appendChild(tabNavItem);
        tabNavItem.appendChild(tabNavAnchor);

        if (i == 0){
            tabNavAnchor.setAttribute('href','#registerUser');
            tabNavAnchor.setAttribute('data-toggle','tab');
            tabNavAnchor.innerHTML = 'Register User';
            renderRegisterUsers();
        }
        if (i == 1){
            tabNavAnchor.setAttribute('href','#users');
            tabNavAnchor.setAttribute('data-toggle','tab');
            tabNavAnchor.innerHTML = 'User list';
            renderUserListTable();
        }
    }
    
}


//Firstly I'd like to note, doing it this way, can be very tricky and messy
function renderRegisterUsers() {

    var dynamicContentArea = document.getElementById('dynamicContentArea');
    var tabContent = element_builder('div',{class:'tab-content'});
    var tabPane = element_builder('div',{id:'registerUser', class:'container tab-pane active'});
    var form = element_builder('form', { id: 'registerUsersForm' });
    var divFormGroupName = element_builder('div', { class: 'form-group noselect' });
    var labelForName = element_builder('label', { for: 'usernameInput', class: 'noselect' });
    var inputName = element_builder('input', { type: 'text', class: 'form-control', id: 'usernameInput', placeholder: 'Username', required: 'true' });
    var submitButton = element_builder('button', { type: 'submit', class: 'btn btn-primary' });
    submitButton.innerHTML = 'Register user';
    labelForName.innerHTML = 'Username';
    
    dynamicContentArea.appendChild(tabContent);
    tabContent.appendChild(tabPane);
    tabPane.appendChild(form);
    form.appendChild(divFormGroupName);
    divFormGroupName.appendChild(labelForName);
    divFormGroupName.appendChild(inputName);

    for (var i = 0; i < 2; i++) {
        var divFormGroupPassword = element_builder('div', { class: 'form-group noselect' });
        var labelForPassword = element_builder('label', { for: 'formGroupPassword', class: 'noselect' });
        var inputPassword = element_builder('input', { type: 'text', class: 'form-control', placeholder: 'Password', required: 'true' });

        labelForPassword.innerHTML = 'Password';

        form.appendChild(divFormGroupPassword);
        divFormGroupPassword.appendChild(labelForPassword);
        divFormGroupPassword.appendChild(inputPassword);

        if (i == 0) {
            labelForPassword.setAttribute('id', 'password');
        }
        if (i == 1) {
            labelForPassword.setAttribute('id', 'password2');
            inputPassword.setAttribute('placeholder', 'Repeat Password');
        }
    }
    form.appendChild(submitButton);
    document.getElementById('registerUsersForm').addEventListener('submit', submitUserForm);
}


//User list table
function renderUserListTable(){
    var tabContent = element_builder('div',{class:'tab-content'});
    var tabPane = element_builder('div',{id:'users', class:'container tab-pane'});
    var table = element_builder('table',{class:'table table-striped'});
    var tableHead = element_builder('thead');
    for (var i = 0; i < 3; i++){
        var thScope = element_builder('th',{scope:'col'});
    }
    if (i == 0){
        thScope.innerHTML = '#';   
    }
    if (i == 1){
        thScope.innerHTML = 'First Name';   
    }
    if (i == 2){
        thScope.innerHTML = 'Last Name';   
    }
    if (i == 3){
        thScope.innerHTML = 'Handle';   
    }
    
}

//Submit the registration form to the database
function submitUserForm(e) {
    e.preventDefault();
    var name = getInputVal('usernameInput');
    saveUserRegistered(name);

    //Reset after 1,5 seconds
    setTimeout(function(){
        document.getElementById('registerUsersForm').reset();
    },1500);
}


// Returns the value from input - Used for submitUserForm
function getInputVal(id) {
    return document.getElementById(id).value;
}

//Save user to firebase
function saveUserRegistered(name) {
    var newUserRef = dbRefUsers.push();
    newUserRef.set({
        username: name,
    })
}


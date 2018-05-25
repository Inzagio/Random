
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
        var tabNavAnchor = element_builder('a', { class: 'nav-link', data_toggle: 'tab' });
        tabNav.appendChild(tabNavItem);
        tabNavItem.appendChild(tabNavAnchor);

        if (i == 0) {
            tabNavAnchor.setAttribute('href', '#registerUser');
            tabNavAnchor.innerHTML = 'Register User';
            tabNavAnchor.addEventListener('click', function (e) {
                resetContent();
                renderRegisterUsers();
            });
        }
        if (i == 1) {
            tabNavAnchor.setAttribute('href', '#users');
            tabNavAnchor.innerHTML = 'User list';
            tabNavAnchor.addEventListener('click', function (e) {
                resetContent();
                renderUserListTable();
            });
        }
    }

}


//Firstly I'd like to note, doing it this way, can be very tricky and messy
function renderRegisterUsers() {

    var dynamicContentArea = document.getElementById('dynamicContentArea');
    var tabContent = element_builder('div', { class: 'tab-content' });
    var tabPane = element_builder('div', { id: 'registerUser', class: 'container tab-pane active' });
    var form = element_builder('form', { id: 'registerUsersForm' });
    var divFormGroupName = element_builder('div', { class: 'form-group noselect' });
    var labelForName = element_builder('label', { for: 'inputUsername', class: 'noselect' });
    var labelForEmail = element_builder('label', { for: 'inputEmail', class: 'noselect' });
    var inputName = element_builder('input', { type: 'text', class: 'form-control', id: 'inputUsername', placeholder: 'Username', required: 'true' });
    var inputEmail = element_builder('input', { type: 'email', class: 'form-control', id: 'inputEmail', placeholder: 'Provide a valid e-mail', required: 'true' })
    var submitButton = element_builder('button', { type: 'submit', class: 'btn btn-primary' });
    submitButton.innerHTML = 'Register user';
    labelForName.innerHTML = 'Username';
    labelForEmail.innerHTML = 'E-mail';

    dynamicContentArea.appendChild(tabContent);
    tabContent.appendChild(tabPane);
    tabPane.appendChild(form);
    form.appendChild(divFormGroupName);
    divFormGroupName.appendChild(labelForName);
    divFormGroupName.appendChild(inputName);
    divFormGroupName.appendChild(labelForEmail);
    divFormGroupName.appendChild(inputEmail);

    // Creates the two password fields, one for pw input and one for repeating it, conforms with regular UX on reg forms
    for (var i = 0; i < 2; i++) {
        var divFormGroupPassword = element_builder('div', { class: 'form-group noselect' });
        var labelForPassword = element_builder('label', { for: 'formGroupPassword', class: 'noselect' });
        var inputPassword = element_builder('input', { type: 'password', class: 'form-control', placeholder: 'Password', required: 'true' });
        labelForPassword.innerHTML = 'Password';

        form.appendChild(divFormGroupPassword);
        divFormGroupPassword.appendChild(labelForPassword);
        divFormGroupPassword.appendChild(inputPassword);

        if (i == 0) {
            labelForPassword.setAttribute('id', 'password');

        }
        if (i == 1) {
            labelForPassword.setAttribute('id', 'confirmPassword');
            inputPassword.setAttribute('placeholder', 'Confirm Password');
            labelForPassword.innerHTML = 'Confirm Password';
        }

    }
    //Compare them - Currently doesnt work. 
    // var password = document.getElementById('password').value;
    // var confirmPassword = document.getElementById('confirmPassword').value;
    // if (password === confirmPassword) {
    //     alert('Passwords match');
    // } else if (!password === confirmPassword) {
    //     alert('Passwords DO NOT match');
    // }
    form.appendChild(submitButton);
    document.getElementById('registerUsersForm').addEventListener('submit', submitUserForm);
}


//User list table
function renderUserListTable() {
    var dynamicContentArea = document.getElementById('dynamicContentArea');

    var tabContent = element_builder('div', { class: 'tab-content' });
    var tabPane = element_builder('div', { id: 'users', class: 'container tab-pane' });
    var table = element_builder('table', { class: 'table table-striped', id: 'users' });
    var tableHead = element_builder('thead');
    for (var i = 0; i < 3; i++) {
        var thScope = element_builder('th', { scope: 'col' });

        if (i == 0) {
            thScope.innerHTML = '#';
        }
        if (i == 1) {
            thScope.innerHTML = 'First Name';
        }
        if (i == 2) {
            thScope.innerHTML = 'Last Name';
        }
        if (i == 3) {
            thScope.innerHTML = 'Handle';
        }
        dynamicContentArea.appendChild(tabContent);
        tabContent.appendChild(tabPane);
        tabPane.appendChild(table);
        table.appendChild(tableHead);
        tableHead.appendChild(thScope);
    }
}

//Submit the registration form to the database
function submitUserForm(event) {
    event.preventDefault();
    var username = getInputVal('inputUsername');
    var email = getInputVal('inputEmail');
    saveUserRegistered(username, email);

    //Reset after 1,5 seconds
    setTimeout(function () {
        document.getElementById('registerUsersForm').reset();
    }, 1500);
}


// Returns the value from input - Used for submitUserForm
function getInputVal(id) {
    return document.getElementById(id).value;
}

//Save user to firebase
function saveUserRegistered(username, email) {
    var newUserRef = dbRefUsers.push();
    newUserRef.set({
        username: username,
        email: email
    })
}


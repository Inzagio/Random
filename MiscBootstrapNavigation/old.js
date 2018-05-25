// function renderNavigationBar() {
//     var navBar = element_builder('nav', { class: 'navbar navbar-expand-sm bg-light justify-content-center' });
//     for (var i = 0; i < 3; i++) {
//         var navUlElem = element_builder('ul', { class: 'navbar-nav' });
//         var navLiElem = element_builder('li', { class: 'navbar-item' });
//         var navAnchorElem = element_builder('a', { class: 'nav-bar brand', href: '#' });
//         var iconsNav = document.createElement('i');

//         document.body.appendChild(navBar);
//         navBar.appendChild(navUlElem);
//         navUlElem.appendChild(navLiElem);
//         navLiElem.appendChild(navAnchorElem);
//         navAnchorElem.appendChild(iconsNav);

//         if (i == 0) {
//             iconsNav.setAttribute('class', 'fas fa-users fa-6x');


//         }
//         if (i == 1) {
//             navAnchorElem.innerText = 'hei';
//             console.log('test2');
//         }
//         if (i == 2) {
//             navAnchorElem.innerText = 'hei';
//             console.log('test3');
//         }
//     }

// }


//Renders the bootstrap 4 Jumbotron with a welcome message. 
// function renderJumbotron() {
//     var jumbo = element_builder('div', { class: 'jumbotron jubotron-fluid' });
//     container = element_builder('div', { class: 'container' });
//     var h1Jumbo = element_builder('h2', { class: 'display 4' });
//     var lead = element_builder('p', { class: 'lead' });

//     document.body.appendChild(jumbo);
//     jumbo.appendChild(container);
//     container.appendChild(h1Jumbo);
//     container.appendChild(lead);
//     h1Jumbo.innerText = 'Welcome %USER%';
//     lead.innerText = 'This is the admin navigation console';

// }
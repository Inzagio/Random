document.addEventListener('DOMContentLoaded', renderCard());



// This builds an element using the following syntax var 'yourVarName' = element_builder('HTMLTAG',{attribute:'value', attribute:'value'});
// Remember to appendChild. e.g if this is the first element created, append it to document.body
function element_builder(type, attrs) {
    var elem = document.createElement(type);
    if (attrs) {
        Object.getOwnPropertyNames(attrs).forEach(function (attribute) {
            elem.setAttribute(attribute.replace('_','-'), attrs[attribute]);
        });
    }
    return elem;
}


//Main.css is added here
const CSSstyle = element_builder('link', {
    rel: 'stylesheet',
    href: 'styles.css'
});
document.head.appendChild(CSSstyle);

//jQuery added
const jQuery = element_builder('script', {
    src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js'
});
document.head.appendChild(jQuery);
//Bootstrap JS
const boostrapJS = element_builder('script', {
    src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js',
    async: true
});
document.head.appendChild(boostrapJS);

//Popper.js
const popper = element_builder('script', {
    src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
});
document.head.appendChild(popper);


// Link for boostrap css
const bootstrapLink = element_builder('link', {
    rel: 'stylesheet',
    href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css',
    integrity: 'sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4',
    crossorigin: 'anonymus'
});
document.head.appendChild(bootstrapLink);

//Including font awesome
const fontAwesomeLink = element_builder('link', {
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
    integrity: 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp',
    crossorigin: 'anonymus'
});
document.head.appendChild(fontAwesomeLink);

//Renders the navigation cards. 
function renderCard() {

    var container = element_builder('div', { class: 'container text'});
    var row = element_builder('div', { class: 'row my-3' });
    for (var i = 0; i < 3; i++) {

        var col = element_builder('div', { class: "col-md-4" });
        var card = element_builder('div', { class: 'card text-center bg-light my-2' });
        var cardBlock = element_builder('div', { class: 'card-block mt-2' });
        var cardTitle = element_builder('h3', { class: 'card-title' }); //Insert text on this node
        var icons = document.createElement('i');

        document.body.appendChild(container);
        container.appendChild(row);
        row.appendChild(col);
        col.appendChild(card);
        card.appendChild(cardBlock);
        cardBlock.appendChild(icons);
        cardBlock.appendChild(cardTitle);

        if (i == 0) {
            icons.setAttribute('class', 'fas fa-users fa-3x');
            cardTitle.innerHTML += 'Users';
            cardBlock.addEventListener('click', function (e) {
                resetContent();
                userTabs();
            });

        }
        if (i == 1) {
            icons.setAttribute('class', 'fas fa-chart-area fa-3x');
            cardTitle.innerHTML += 'Statistics';
            cardBlock.addEventListener('click', function (e) {
                resetContent();
            });
        }
        if (i == 2) {
            icons.setAttribute('class', 'fas fa-cog fa-3x');
            cardTitle.innerHTML += 'Settings';
            cardBlock.addEventListener('click', function (e) {
                resetContent();
            });
        }
    }
    var dynamicContentArea = element_builder('div', { class: 'container', id: 'dynamicContentArea' });
    document.body.appendChild(dynamicContentArea);
}
// Reset the content in Dynamic Content Area
function resetContent() {
    var dynamicContent = document.getElementById('dynamicContentArea');
    while (dynamicContent.firstChild) {
        dynamicContent.removeChild(dynamicContent.firstChild);
    }
}




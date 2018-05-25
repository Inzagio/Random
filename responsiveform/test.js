var pepe = element_builder('div', { id: 'pepelord', class: 'button black goteeem', onclick: 'console.log("easy life bro")', style: 'background-color: red; width: 50px; height: 50px' });
document.body.appendChild(pepe);


function element_builder(type, attrs) {
    var elem = document.createElement(type);
    if (attrs) {
        Object.getOwnPropertyNames(attrs).forEach(function (attribute) {
            elem.setAttribute(attribute, attrs[attribute]);
        });
    }

    return elem;
}
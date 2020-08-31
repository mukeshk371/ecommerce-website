function createMenuItemList(details) {
    var menu = document.createElement('a');
    menu.innerHTML = details.name;
    menu.setAttribute('id', details.id);
    menu.setAttribute('href', 'javascript:void(0)');
    menu.classList.add('d-flex', 'align-items-center');

    return menu;
}

function loadMenuItems() {
    var subHeader = document.getElementById('sub-header'); 
    while (subHeader.firstChild) {
        subHeader.removeChild(subHeader.firstChild);
    }
    for (var i = 0; i < menuList.length; i++) {
        var li = createMenuItemList(menuList[i]);
        subHeader.appendChild(li);
    }
}
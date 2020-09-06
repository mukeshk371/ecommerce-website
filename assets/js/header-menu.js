function createMenuItemList(details) {
    var menuCategoryBox = document.createElement('div');
    menuCategoryBox.classList.add('menu-box', 'row');

    var menuPopup = document.createElement('div');
    menuPopup.classList.add('menu-popup');
    menuPopup.appendChild(menuCategoryBox);


    var menu = document.createElement('a');
    menu.innerHTML = details.name;
    menu.setAttribute('id', details.id);
    menu.setAttribute('href', 'javascript:void(0)');
    menu.classList.add('d-flex', 'align-items-center', 'menu');
    menu.appendChild(menuPopup);
    menu.addEventListener('click', function () {
        for (var l = 0; l < details.length; l++) {
            if (menu.details.id = details.id) {
                var menuListing = details[l].length;
                loadSubMenu(menuListing);
            }
        }
    });

    return menu;
}

function loadSubMenu(menuListing) {
    for (var j = 0; j < menuListing.length; j++) {
        var menuListingOptions = menuListing[j].options;
        var menuColumn = document.createElement('div');
        menuColumn.classList.add('col');
        menuCategoryBox.appendChild(menuColumn);
        for (var k = 0; k < menuListingOptions.length; k++) {
            var menuCategory = document.createElement('a');
            menuCategory.setAttribute('href', 'javascript:void(0)');
            menuCategory.classList.add('d-flex', 'align-items-center');
            menuCategory.setAttribute('id', menuListingOptions[k].id);
            menuCategory.innerHTML = menuListingOptions[k].name;
            menuColumn.appendChild(menuCategory);
        }
    }
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
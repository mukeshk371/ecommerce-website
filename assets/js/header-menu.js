function createMenuItemList(details) {
    var menuCategoryBox = document.createElement('div');
    menuCategoryBox.classList.add('menu-box');

    for (var i = 0; i < menuList.length; i++) {
        var menuListing = menuList[i].options;
        for (var i = 0; i < menuListing.length; i++) {
            var menuListingOptions = menuListing[i].options;
            for (var i = 0; i < menuListingOptions.length; i++) {
                var menuCategory = document.createElement('a');
                menuCategory.setAttribute('href', 'javascript:void(0)');
                menuCategory.classList.add('d-flex', 'align-items-center');
                menuCategory.setAttribute('id', menuListingOptions[i].id);
                menuCategory.innerHTML = menuListingOptions[i].name;
                menuCategoryBox.appendChild(menuCategory);
            }
        }
    }

    var menuPopup = document.createElement('div');
    menuPopup.classList.add('menu-popup');
    menuPopup.appendChild(menuCategoryBox);


    var menu = document.createElement('a');
    menu.innerHTML = details.name;
    menu.setAttribute('id', details.id);
    menu.setAttribute('href', 'javascript:void(0)');
    menu.classList.add('d-flex', 'align-items-center', 'menu');
    menu.appendChild(menuPopup);

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
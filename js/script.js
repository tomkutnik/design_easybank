function menuPopUp(action){
    const menuIcon = document.getElementById("menuIcon");
    const closeIcon = document.getElementById("closeIcon");
    const menu = document.getElementById("popUpMenu");
    if (action === "open"){
        menuIcon.classList.add("nav__icon-hide");
        closeIcon.classList.remove("nav__icon-hide");
        menu.classList.remove("nav__mobile-hide");
    }else{
        menuIcon.classList.remove("nav__icon-hide");
        closeIcon.classList.add("nav__icon-hide");
        menu.classList.add("nav__mobile-hide");
    }
}
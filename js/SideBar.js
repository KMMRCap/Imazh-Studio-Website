// -------------------------------------------------- SideMenu
const handleHorizontalSidabar = (lang) => {
    if (lang === 'fa') {
        if ($("#nav-main")[0].style.right == "4rem") {
            $("#nav-shape1")[0].style.transform = "initial";
            $("#nav-shape2")[0].style.opacity = "1";
            $("#nav-shape3")[0].style.transform = "initial";

            if (window.matchMedia("(min-width: 1440px)").matches) {
                $("#nav-main")[0].style.right = "-30rem";
            }
            else if (window.matchMedia("(min-width :992px)").matches) {
                $("#nav-main")[0].style.right = "-30rem";
            }
        }
        else {
            $("#nav-shape1")[0].style.transform = "rotate(-45deg)"
            $("#nav-shape2")[0].style.opacity = "0";
            $("#nav-shape3")[0].style.transform = "rotate(45deg)"

            if (window.matchMedia("(min-width :576px)").matches) {
                $("#nav-main")[0].style.right = "4rem";
            }
            else {
                $("#nav-main")[0].style.right = "4rem";
                $("#nav-main")[0].style.marginRight = "-1rem";
            }
        }
    }
    else {
        if ($("#nav-main")[0].style.left == "4rem") {
            $("#nav-shape1")[0].style.transform = "initial";
            $("#nav-shape2")[0].style.opacity = "1";
            $("#nav-shape3")[0].style.transform = "initial";

            if (window.matchMedia("(min-width: 1440px)").matches) {
                $("#nav-main")[0].style.left = "-30rem";
            }
            else if (window.matchMedia("(min-width :992px)").matches) {
                $("#nav-main")[0].style.left = "-30rem";
            }
        }
        else {
            $("#nav-shape1")[0].style.transform = "rotate(45deg)"
            $("#nav-shape2")[0].style.opacity = "0";
            $("#nav-shape3")[0].style.transform = "rotate(-45deg)"

            if (window.matchMedia("(min-width :576px)").matches) {
                $("#nav-main")[0].style.left = "4rem";
            }
            else {
                $("#nav-main")[0].style.left = "4rem";
                $("#nav-main")[0].style.marginLeft = "-1rem";
            }
        }
    }
}

const handleOpenVerticalSidebar = (lang) => {
    if (lang === 'fa') {
        $("#nav-main")[0].style.right = "0rem";
    }
    else {
        $("#nav-main")[0].style.left = "0rem";
    }
}

const handleCloseSidebar = (lang) => {
    if (lang === 'fa') {
        if (window.matchMedia("(min-width :768px)").matches) {
            $("#nav-main")[0].style.right = "-28rem";
        }
        else if (window.matchMedia("(min-width :576px)").matches) {
            $("#nav-main")[0].style.right = "-25rem";
        }
        else {
            $("#nav-main")[0].style.right = "-100vw";
        }
    }
    else {
        if (window.matchMedia("(min-width :768px)").matches) {
            $("#nav-main")[0].style.left = "-28rem";
        }
        else if (window.matchMedia("(min-width :576px)").matches) {
            $("#nav-main")[0].style.left = "-25rem";
        }
        else {
            $("#nav-main")[0].style.left = "-100vw";
        }
    }
}
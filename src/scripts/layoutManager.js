import MenuImage from '../images/menu.svg';
import { printLayout as printHomeLayout } from './homeLayout';
import { addListeners as addHomeListeners } from './homeLayout';
import { printLayout as printMenuLayout } from './menuLayout';
import { printLayout as printContactLayout } from './contactLayout';

let sidebarObject = null;
let sidebarBackground = null;
let currentlySelected = "linkHome";

const printBasicLayout = () => {

    let contentBox = document.querySelector(".content");

    let headerBox = document.createElement("div");
    headerBox.classList.add("header");

    let headerTitle = document.createElement("div");
    headerTitle.classList.add("header-title");
    headerTitle.textContent = "Il Ristorante";
    headerBox.appendChild(headerTitle);

    let headerMenu = document.createElement("div");
    headerMenu.classList.add("menu-holder");

    let headerMenuImage = document.createElement("div");
    headerMenuImage.classList.add("menu-image-holder");
    headerMenuImage.addEventListener("click", _clickHandler);

    let menuImage = new Image();
    menuImage.src = MenuImage;
    headerMenuImage.appendChild(menuImage);
    headerMenu.appendChild(headerMenuImage);

    headerBox.appendChild(headerMenu);
    contentBox.appendChild(headerBox);

    let footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = "Site made for The Odin Project";
    contentBox.appendChild(footer);
}

const appendContent = (content) => {
    let contentBox = document.querySelector(".content");

    let previousContentBox = document.querySelector(".main-content");

    if(previousContentBox !== null)
    {
        previousContentBox.remove();
    }

    let mainContentBox = document.createElement("div");
    mainContentBox.classList.add("main-content");
    
    if(content === "linkHome")
    {
        printHomeLayout(mainContentBox);
        addHomeListeners(_clickHandler);
    } else if(content === "linkMenu")
    {
        printMenuLayout(mainContentBox);
    } else if(content === "linkContact")
    {
        printContactLayout(mainContentBox);
    }

    contentBox.appendChild(mainContentBox);

}

const _clickHandler = (event) => {
    let contentBox = document.querySelector(".content");
    // id selectors
    if(event.target.id === "linkHome")
    {
        _menuSelected(event.target);
    } else if(event.target.id === "secondaryLinkMenu")
    {
        _menuSelected(event.target);
    } else if(event.target.id === "linkMenu")
    {
        _menuSelected(event.target);
    } else if(event.target.id === "linkContact")
    {
        _menuSelected(event.target);
    }

    // class selectors
    if(event.target.classList.contains("sidebarBackground"))
    {
        event.stopPropagation();
        event.target.remove();
        if(sidebarBackground !== null)
        {
            sidebarBackground = null;
        }

        if(sidebarObject.classList.contains("slide-in"))
        {
            sidebarObject.classList.remove("slide-in");
        }
        sidebarObject.classList.add("slide-out");
        setTimeout(() => {
            sidebarObject.remove();     
            sidebarObject = null;       
        }, 375);

        return;
    }

    if(event.target.classList.contains("menu-image-holder") || event.target.parentElement.classList.contains("menu-image-holder"))
    {
        if(sidebarObject === null)
        {
            sidebarBackground = document.createElement("section");
            sidebarBackground.classList.add("sidebarBackground");
            sidebarBackground.addEventListener("click", _clickHandler);
            contentBox.appendChild(sidebarBackground);

            sidebarObject = document.createElement("section");
            sidebarObject.classList.add("sidebarMenu");
            sidebarObject.classList.add("slide-in");

            let sidebarMenuHolder = document.createElement("div");
            sidebarMenuHolder.classList.add("menuHolder");

            let sidebarMenu = document.createElement("div");
            sidebarMenu.classList.add("menuItem");
            if(currentlySelected === "linkHome")
            {
                sidebarMenu.classList.add("selected");
            }
            sidebarMenu.textContent = "Home";
            sidebarMenu.setAttribute("id", "linkHome");
            sidebarMenu.addEventListener("click", _clickHandler);
            sidebarMenuHolder.appendChild(sidebarMenu);

            sidebarMenu = document.createElement("div");
            sidebarMenu.classList.add("menuItem");
            if(currentlySelected === "linkMenu")
            {
                sidebarMenu.classList.add("selected");
            }
            sidebarMenu.textContent = "Menu";
            sidebarMenu.setAttribute("id", "linkMenu");
            sidebarMenu.addEventListener("click", _clickHandler);
            sidebarMenuHolder.appendChild(sidebarMenu);

            sidebarMenu = document.createElement("div");
            sidebarMenu.classList.add("menuItem");
            if(currentlySelected === "linkContact")
            {
                sidebarMenu.classList.add("selected");
            }
            sidebarMenu.textContent = "Contact Us";
            sidebarMenu.setAttribute("id", "linkContact");
            sidebarMenu.addEventListener("click", _clickHandler);
            sidebarMenuHolder.appendChild(sidebarMenu);

            sidebarObject.appendChild(sidebarMenuHolder);

            contentBox.appendChild(sidebarObject);
        }
    }
}

const _menuSelected = (target) => {
    if(target.id === "secondaryLinkMenu")
    {
        currentlySelected = "linkMenu";
        // Handle layout modification logic
        appendContent("linkMenu");

    } else {
        if(sidebarObject != null)
        {
            if(sidebarBackground != null)
            {
                sidebarBackground.remove();
                sidebarBackground = null;
            }

            if(sidebarObject.classList.contains("slide-in"))
            {
                sidebarObject.classList.remove("slide-in");
            }
            sidebarObject.classList.add("slide-out");
            setTimeout(() => {
                sidebarObject.remove();     
                sidebarObject = null;       
            }, 375);
            }

        if(!target.classList.contains("selected"))
        {
            let allMenus = document.querySelectorAll(".menuItem");
            allMenus.forEach((menu) => {
                if(menu.classList.contains("selected"))
                {
                    menu.classList.remove("selected");
                }
            });

            target.classList.add("selected");

            currentlySelected = target.id;
            // Handle layout modification logic
            appendContent(target.id);
        }
    }
}

export { printBasicLayout, appendContent }
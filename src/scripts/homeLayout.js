import ChefImage from '../images/chef.png';

let menuButton = null;

const printLayout = (contentBox) => {

    let contentHolder = document.createElement("div");
    contentHolder.classList.add("main-content-index");

    let chefImage = new Image();
    chefImage.src = ChefImage;
    contentHolder.appendChild(chefImage);

    let paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "Order online or visit us!";
    contentHolder.appendChild(paragraph);

    paragraph = document.createElement("p");
    paragraph.innerHTML = "Come and try our food in <em>il Ristorante</em>, serving you the best italian food since 1893";
    contentHolder.appendChild(paragraph);

    menuButton = document.createElement("button");
    menuButton.textContent = "Check the menu";
    menuButton.setAttribute("id", "secondaryLinkMenu");
    contentHolder.appendChild(menuButton);

    paragraph = document.createElement("p");
    paragraph.classList.add("timetable")
    paragraph.innerHTML = "<strong>We service at</strong> <br />" +
    "<span class='restDay'>Mon-Thurs:</span> 11am-9pm<br/>" +
    "<span class='restDay'>Fri-Sun:</span> 10am-11pm";
    contentHolder.appendChild(paragraph);

    contentBox.appendChild(contentHolder);

};

const addListeners = (clickHandler) => {
    if(menuButton != null)
    {
        menuButton.addEventListener("click", clickHandler);
    }
}

export { printLayout, addListeners }
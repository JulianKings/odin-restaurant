import PizzaMenu from '../images/pizza-menu.png';

const printLayout = (contentBox) => {
    let contentHolder = document.createElement("div");
    contentHolder.classList.add("main-content-menu");

    let pizzaImage = new Image();
    pizzaImage.src = PizzaMenu;

    let menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = PizzaMenu;
    menuItem.appendChild(pizzaImage);
    let paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "Tartufi e funghi";
    let span = document.createElement("span");
    span.innerText = "Crema de tòfona negra, variat de formatges i xampinyons.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = PizzaMenu;
    menuItem.appendChild(pizzaImage);
    paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "4 Stagioni";
    span = document.createElement("span");
    span.innerText = "Tomàquet, mozzarella, xampinyons, gambes, guanciale i pernil dolç.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = PizzaMenu;
    menuItem.appendChild(pizzaImage);
    paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "Tagliatella";
    span = document.createElement("span");
    span.innerText = "Salsa de tomàquet confitat groc, mozzarella, Mortadel·la di Bologna IGP, stracciatella, festuc, ruca i oli de mandarina.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = PizzaMenu;
    menuItem.appendChild(pizzaImage);
    paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "Al parmigiano";
    span = document.createElement("span");
    span.innerText = "Tomàquet, mozzarella, Parmigiano Reggiano DOP, bacó, formatge Taleggio DOP i alfàbrega.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = PizzaMenu;
    menuItem.appendChild(pizzaImage);
    paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "7 Formaggi";
    span = document.createElement("span");
    span.innerText = "Tomàquet, mozzarella, Taleggio DOP, Pecorino Romano DOP, Gorgonzola DOP, Mozzarella de Búfala DOP, Parmigiano Reggiano DOP i formatge Montasio DOP.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    menuItem = document.createElement("div");
    menuItem.classList.add("item");
    pizzaImage = new Image();
    pizzaImage.src = PizzaMenu;
    menuItem.appendChild(pizzaImage);
    paragraph = document.createElement("p");
    paragraph.classList.add("title");
    paragraph.textContent = "Bismark";
    span = document.createElement("span");
    span.innerText = "Tomàquet, mozzarella, pernil dolç i ou.";
    span.classList.add("desc");
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(span);
    menuItem.appendChild(paragraph);

    contentHolder.appendChild(menuItem);

    contentBox.appendChild(contentHolder);
};

export { printLayout }
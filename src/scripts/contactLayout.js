const printLayout = (contentBox) => {
    let contentHolder = document.createElement("div");
    contentHolder.classList.add("main-content-contact");

    let paragraph = document.createElement("p");
    paragraph.textContent = "📞 (+99) 987 654 321";
    contentHolder.appendChild(paragraph);

    paragraph = document.createElement("p");
    paragraph.textContent = "🏠 C/ Luis De Morales 2, 41018, Sevilla, Spain";
    contentHolder.appendChild(paragraph);

    let mapElement = document.createElement("div");
    mapElement.setAttribute("id", "map");
    mapElement.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792.532981647481!2d-5.973415623968875!3d37.386712230686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126ea355335b6f%3A0xb4749b86315ebdd4!2sRestaurante%20La%20Tagliatella%20%7C%20Nervi%C3%B3n%2C%20Sevilla!5e0!3m2!1sen!2ses!4v1695844081460!5m2!1sen!2ses" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    contentHolder.appendChild(mapElement);

    contentBox.appendChild(contentHolder);

};

export { printLayout }
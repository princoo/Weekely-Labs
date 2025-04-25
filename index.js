"use strict";
let imageData = [];
fetch("https://picsum.photos/v2/list?page=1").then((response) => {
    response.json().then((data) => {
        imageData = data;
        displayData(imageData);
    });
});
const lightBoxClose = document.querySelector("#light-box-close");
function displayData(images = []) {
    const container = document.querySelector(".container");
    if (!container)
        return;
    container.innerHTML = "";
    if (images.length === 0) {
        container.innerHTML = "<h1>Empty List</h1>";
    }
    else {
        container.innerHTML = "";
        const fragmentElement = document.createDocumentFragment();
        for (const image of images) {
            const listItem = document.createElement("li");
            const imageElement = document.createElement("img");
            const iconElement = document.createElement("img");
            listItem.className =
                "relative group mb-3 cursor-pointer hover:scale-105 transition-all duration-300 overflow-hidden";
            imageElement.className =
                "object-cover rounded-lg w-full h-full group-hover:blur-sm transition-all duration-300 ease-in-out";
            iconElement.className =
                "w-10 h-10 group-hover:top-1/2 absolute -top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black transition-all duration-300 ease-in-out";
            imageElement.src = image.download_url;
            iconElement.src = "./view-svgrepo-com.svg";
            imageElement.alt = image.author;
            listItem.addEventListener("click", () => {
                ligthBoxImage(image);
            });
            listItem.appendChild(imageElement);
            listItem.appendChild(iconElement);
            fragmentElement.appendChild(listItem);
        }
        container.appendChild(fragmentElement);
    }
}
function ligthBoxImage(image) {
    const lightBox = document.querySelector("#ligthbox");
    const lightBoxImage = document.querySelector("#ligthbox-image");
    const lightBoxAuthor = document.querySelector("#ligthbox-title");
    const lightBoxRedirect = document.querySelector("#light-box-download");
    if (!lightBox || !lightBoxImage || !lightBoxAuthor || !lightBoxRedirect)
        return;
    lightBox.classList.remove("hidden");
    lightBoxImage.src = image.download_url;
    lightBoxImage.alt = image.author;
    lightBoxRedirect.href = image.url;
}
lightBoxClose === null || lightBoxClose === void 0 ? void 0 : lightBoxClose.addEventListener("click", () => {
    const lightBox = document.querySelector("#ligthbox");
    if (!lightBox)
        return;
    lightBox.classList.add("hidden");
});

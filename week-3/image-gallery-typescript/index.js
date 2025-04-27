"use strict";
let imageData = [];
fetch("https://picsum.photos/v2/list?page=1").then((response) => {
    response.json().then((data) => {
        imageData = data;
        displayData(imageData);
    });
});
let imageIndex = 0;
const lightBox = document.querySelector("#ligthbox");
const lightBoxClose = document.querySelector("#light-box-close");
const container = document.querySelector(".container");
const ligthBoxPrevious = document.querySelector("#ligthbox-previous");
const ligthBoxNext = document.querySelector("#ligthbox-next");
const wrapperDiv = document.querySelector("#wrapper");
function displayData(images = []) {
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
                ligthBoxImage(Number(image.id), images.length);
            });
            listItem.appendChild(imageElement);
            listItem.appendChild(iconElement);
            fragmentElement.appendChild(listItem);
        }
        container.appendChild(fragmentElement);
    }
}
function ligthBoxImage(imageId, dataLength = imageData.length) {
    wrapperDiv === null || wrapperDiv === void 0 ? void 0 : wrapperDiv.classList.add("h-[81vh]", "overflow-hidden");
    imageIndex = imageId;
    checkNavigationButtons();
    if (imageId < dataLength && imageId >= 0) {
        imageIndex = Number(imageId);
        const image = imageData[Number(imageId)];
        const lightBoxImage = document.querySelector("#ligthbox-image");
        const lightBoxAuthor = document.querySelector("#ligthbox-title");
        const lightBoxRedirect = document.querySelector("#light-box-download");
        if (!lightBox || !lightBoxImage || !lightBoxAuthor || !lightBoxRedirect)
            return;
        lightBox.classList.remove("opacity-0", "pointer-events-none");
        lightBox.classList.add("opacity-100");
        lightBoxImage.src = image.download_url;
        lightBoxImage.alt = image.author;
        lightBoxRedirect.href = image.url;
    }
}
lightBoxClose === null || lightBoxClose === void 0 ? void 0 : lightBoxClose.addEventListener("click", () => {
    closeLightBox();
});
ligthBoxNext === null || ligthBoxNext === void 0 ? void 0 : ligthBoxNext.addEventListener("click", () => {
    moveNext();
});
ligthBoxPrevious === null || ligthBoxPrevious === void 0 ? void 0 : ligthBoxPrevious.addEventListener("click", () => {
    movePrevious();
});
function moveNext() {
    if (imageIndex < imageData.length - 1)
        imageIndex += 1;
    ligthBoxPrevious === null || ligthBoxPrevious === void 0 ? void 0 : ligthBoxPrevious.classList.remove("hidden");
    checkNavigationButtons();
    ligthBoxImage(imageIndex);
}
function movePrevious() {
    if (imageIndex > 0)
        imageIndex -= 1;
    ligthBoxNext === null || ligthBoxNext === void 0 ? void 0 : ligthBoxNext.classList.remove("hidden");
    checkNavigationButtons();
    ligthBoxImage(imageIndex);
}
function checkNavigationButtons() {
    if (imageIndex === 0) {
        ligthBoxPrevious === null || ligthBoxPrevious === void 0 ? void 0 : ligthBoxPrevious.classList.add("hidden");
    }
    else {
        ligthBoxPrevious === null || ligthBoxPrevious === void 0 ? void 0 : ligthBoxPrevious.classList.remove("hidden");
    }
    if (imageIndex === imageData.length - 1) {
        ligthBoxNext === null || ligthBoxNext === void 0 ? void 0 : ligthBoxNext.classList.add("hidden");
    }
    else {
        ligthBoxNext === null || ligthBoxNext === void 0 ? void 0 : ligthBoxNext.classList.remove("hidden");
    }
}
function closeLightBox() {
    lightBox === null || lightBox === void 0 ? void 0 : lightBox.classList.remove("opacity-100");
    lightBox === null || lightBox === void 0 ? void 0 : lightBox.classList.add("opacity-0");
    setTimeout(() => {
        lightBox === null || lightBox === void 0 ? void 0 : lightBox.classList.add("pointer-events-none");
    }, 300);
    wrapperDiv === null || wrapperDiv === void 0 ? void 0 : wrapperDiv.classList.remove("h-[81vh]", "overflow-hidden");
}
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeLightBox();
    }
    else if (event.key === "ArrowRight") {
        moveNext();
    }
    else if (event.key === "ArrowLeft") {
        movePrevious();
    }
});

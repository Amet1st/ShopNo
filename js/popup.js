let modal = document.querySelector(".modal");

let images = document.querySelectorAll(".open-modal");

let modalImg = document.querySelector(".modal__content");


images.forEach(item => {
    item.addEventListener('click', (event) => {
        modal.style.display = "flex";
        modalImg.src = event.target.src;
    })
})

let span = document.querySelector(".modal__close");

span.onclick = function () {
    modal.style.display = "none";
}

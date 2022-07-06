let modal = document.querySelector(".modal");

let images = document.querySelectorAll(".open-modal");

let modalImg = document.querySelector(".modal-content");


images.forEach(item => {
    item.addEventListener('click', (event) => {
        modal.style.display = "block";
        modalImg.src = event.target.src;
    })
})

let span = document.querySelector(".close");

span.onclick = function () {
    modal.style.display = "none";
}

const share = document.querySelector(".share-icon");
const contact =document.querySelector(".contact");

share.addEventListener("click" , () => {
contact.classList.toggle("active");
});
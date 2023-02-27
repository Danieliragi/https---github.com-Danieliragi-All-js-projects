let toastEL = document.querySelector(".toast");
let closebtnEl = document.querySelector(".closebtn");
let progressEL = document.querySelector(".progress");
let btnEL = document.querySelector(".btn");

btnEL.addEventListener("click", () => {
  toastEL.classList.add("active");
  progressEL.classList.add("active");
  progressEL.classList.add("active");
  setTimeout(() => {
    toastEL.classList.remove("active");
    progressEL.classList.remove("active");
  }, 5000);
})
closebtnEl.addEventListener("click", () => {
  toastEL.classList.remove("active");
  progressEL.classList.remove("active");
})
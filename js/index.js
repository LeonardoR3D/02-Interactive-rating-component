// Variables
let rating = 0;
const ratingButtons = document.querySelectorAll(".btn-rating");
const btnSubmit = document.querySelector(".btn-submit");
const ratingContent = document.querySelector(".rating-content");
const thankYouContent = document.querySelector(".thank-you-content");
const ratingResult = document.querySelector(".rating-result");
// .
// .
// .
// .
// .
// .
// .
// . Functions
function setRating(event) {
  rating = event.target.textContent;
}
function showThankYou() {
  if (rating === 0) {
    alert("Please choose a rating");
  } else {
    let elementP = document.createElement("p");

    elementP.textContent = `You selected ${rating} out of 5`;
    ratingResult.appendChild(elementP);

    ratingContent.classList.toggle("hidden");
    thankYouContent.classList.toggle("hidden");
  }
}
// .
// .
// .
// .
// .
// .
// .
// . Events Listeners
ratingButtons.forEach((btn) => {
  btn.addEventListener("click", setRating);
});
btnSubmit.addEventListener("click", showThankYou);

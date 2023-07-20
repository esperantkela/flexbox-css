document.addEventListener("DOMContentLoaded", () => {
  const secetionTwo = document.querySelector(".section-two");

  secetionTwo.addEventListener("click", (event) => {
    if (event.target !== event.currentTarget) {
      if (event.target.classList.contains("selected")) {
        event.target.classList.remove("selected");
      } else {
        const selectedDiv = document.querySelector(".selected");

        selectedDiv && selectedDiv.removeAttribute("class");

        event.target.classList.add("selected");
      }
    }
  });
});

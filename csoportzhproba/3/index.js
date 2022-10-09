const contacts = document.querySelector("#contacts");

contacts.addEventListener("click", (e) => handleButtonClick(e));
handleButtonClick = (e) => {
  if (e.target.matches("button")) {
    console.log("Button innerText: " + e.target.innerText);
    console.log("Button data-toggle property: " + e.target.dataset.toggle);

    const clickedSection = e.target.closest("section");
    console.log(
      "Name of user: " + clickedSection.querySelector(".name").innerText
    );

    const email = clickedSection.querySelector(".email");
    email.toggleAttribute("hidden");

    const toggle = e.target.dataset.toggle;
    if (toggle !== "email") {
      const nodeToToggle = clickedSection.querySelector(`.${toggle}`);
      nodeToToggle.toggleAttribute("hidden");
    }
  }
};

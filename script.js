let input = document.querySelector("input");
let button = document.querySelector("p");

const defaultText = "Upload File";

button.addEventListener("click", () => {
  input.value = "";
  input.click();
});

input.addEventListener("change", () => {
  if (input.files.length > 0) {
    button.textContent = `${input.files[0].name} selected`;
    button.classList.add("selected");
  } else {
    button.textContent = defaultText;
    button.classList.remove("selected");
  }
});

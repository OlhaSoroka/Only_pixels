const colorSection = document.getElementById("pick-color");
const titleBtn = document.getElementById("title-btn");
const duckContainer = document.getElementById("duck");

titleBtn.addEventListener("click", () => {
  duckContainer.style.visibility = "visible";
  const innerDuckWrapper = duckContainer.children[0];
  let position = -400;
  const interval = setInterval(() => {
    innerDuckWrapper.style.left = `${position}px`;
    position += 10;
    if (position > 0) {
      position = -400;
      innerDuckWrapper.style.left = `${position}px`;
      clearInterval(interval);
      colorSection.scrollIntoView({ behavior: "smooth", block: "center" });
      duckContainer.style.visibility = "hidden";
    }
  }, 30);
});

const colorInput = document.getElementById("color-number-input");
const colorBtn = document.getElementById("color-number-btn");
const inputsForm = document.getElementById("color-input-wrapper");
colorBtn.addEventListener("click", () => {
  [...inputsForm.children].forEach((elem) => {
    elem.remove();
  });
  const number = colorInput.value;
  if (number > 25 && number < 1) {
    alert("Number must be in range of 1 - 25");
  } else {
    for (let i = 0; i < number; i++) {
      const colorDiv = document.createElement("div");
      const colorSpan = document.createElement("span");
      const colorInput = document.createElement("input");
      colorDiv.classList.add("color-input-item");
      colorSpan.innerText = String.fromCharCode(i + 97);
      colorInput.name = String.fromCharCode(i + 97);
      colorDiv.appendChild(colorSpan);
      colorDiv.appendChild(colorInput);
      inputsForm.appendChild(colorDiv);
    }
    const colorSubmitBtn = document.createElement("button");
    colorSubmitBtn.classList.add("main-btn");
    colorSubmitBtn.innerText = "SUBMIT";
    colorSubmitBtn.setAttribute("type", "submit");
    inputsForm.appendChild(colorSubmitBtn);
    inputsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const value = Object.fromEntries(data.entries());
      console.log(value);
    });
  }
});

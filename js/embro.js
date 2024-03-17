const embroSave = document.getElementById("embroSave");
const embroEdit = document.getElementById("embroEdit");
const embroBtn = document.getElementById("embroBtn");
const embroPrice = document.getElementById("embroPrice");

const embroItems = document.querySelectorAll(".embroItem__row");
let totalPrice = 0;

embroItems.forEach((embroItem) => {
  const embroInputs = embroItem.querySelectorAll(".embroInput");
  embroInputs.forEach((embroInput) => {
    embroInput.onchange = () => {
      let id = embroInput.getAttribute("data-rad");
      let currentTab = document.querySelector(id);
      totalPrice += 24;

      if (embroInput.checked) {
        currentTab.classList.add("active");

        embroInputs.forEach((item) => {
          let id2 = item.getAttribute("data-rad");
          let currentTab2 = document.querySelector(id2);
          if (embroInput !== item) {
            currentTab2.classList.remove("active");
          } else {
            currentTab2.classList.add("active");
          }
        });
      } else {
        currentTab.classList.remove("active");
      }
    };
  });
});

embroSave.onclick = () => {
  embroEdit.classList.add("active");
  embroBtn.innerHTML = "Edit";
  if (totalPrice > 48) {
    totalPrice = 48;
  }
  embroPrice.innerHTML = totalPrice;
};

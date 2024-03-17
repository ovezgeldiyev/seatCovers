const editBtn = document.getElementById("editBtn");
const editCard = document.getElementById("editCard");
const editBack = document.getElementById("editBack");
const editSteps = document.getElementById("editSteps");
const transportInner = document.querySelector(".transportSelect__inner");

if (editBtn) {
  editBtn.onclick = () => {
    editCard.classList.remove("active");
    editSteps.classList.add("active");
  };
}
if (editBack) {
  editBack.onclick = () => {
    editCard.classList.add("active");
    editSteps.classList.remove("active");
  };
}
const stepBtn = document.querySelectorAll(".stepBtn");
const stepEvent = document.querySelectorAll(".stepEvent");
// const colorSelect = document.getElementById("colorSelect");

stepBtn.forEach((e) => {
  onStepClick(stepBtn, stepEvent, e);
});
function onStepClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-step");
    let currentTab = document.querySelector(tabId);
    // if (currentBtn.classList.contains("active2")) {
    //   const faq = colorSelect.querySelector(".stepEvent");
    //   if (faq) {
    //     faq.classList.remove("active");
    //     currentBtn.classList.remove("active2");
    //   }
    // } else
    if (!currentBtn.classList.contains("active2")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active2");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active2");
      currentTab.classList.add("active");
      transportInner.scrollTop = 0;
    }
  });
}
const make2 = document.getElementById("make");
const model2 = document.getElementById("model");
const year2 = document.getElementById("year");
const selectBtn1 = document.getElementById("selectBtn-1");
make2.onchange = () => {
  if (make2.value !== "0" && model2.value !== "0" && year2.value !== "0") {
    selectBtn1.removeAttribute("disabled");
  } else {
    selectBtn1.setAttribute("disabled", true);
  }
};
model2.onchange = () => {
  if (make2.value !== "0" && model2.value !== "0" && year2.value !== "0") {
    selectBtn1.removeAttribute("disabled");
  } else {
    selectBtn1.setAttribute("disabled", true);
  }
};
year2.onchange = () => {
  if (make2.value !== "0" && model2.value !== "0" && year2.value !== "0") {
    selectBtn1.removeAttribute("disabled");
  } else {
    selectBtn1.setAttribute("disabled", true);
  }
};
const radioInputs = document.querySelectorAll(`input[name="seatType"]`);
const selectBtn2 = document.getElementById("selectBtn-2");

if (radioInputs.length > 0) {
  radioInputs.forEach((radioInput) => {
    radioInput.onchange = () => {
      selectBtn2.removeAttribute("disabled");
    };
  });
}

const additional1_2 = document.getElementById("additional-1");
const additional2_2 = document.getElementById("additional-2");
const selectBtn3 = document.getElementById("selectBtn-3");
additional1_2.onchange = () => {
  if (additional1_2.value !== "0" && additional2_2.value !== "0") {
    selectBtn3.removeAttribute("disabled");
  } else {
    selectBtn3.setAttribute("disabled", true);
  }
};
additional2_2.onchange = () => {
  if (additional1_2.value !== "0" && additional2_2.value !== "0") {
    selectBtn3.removeAttribute("disabled");
  } else {
    selectBtn3.setAttribute("disabled", true);
  }
};

const selectBtn4 = document.getElementById("selectBtn-4");
const couponInput = document.getElementById("couponInput");
if (couponInput) {
  couponInput.onchange = () => {
    selectBtn4.classList.remove("skipp");
  };
}

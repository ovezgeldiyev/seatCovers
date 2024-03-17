// tab start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// tab end
let stepsPassed = [false, false, false, false];
const steps = document.querySelectorAll(".checkoutItem");
const submitBtn = document.querySelector("#submitBtn");
const sameAsBill = steps[2].querySelector("#sameAsBill");
const inputs2 = steps[1].querySelectorAll(".input input,select");
const inputs3 = steps[2].querySelectorAll(".input input,select");
const check2 = steps[1].querySelector(".checkoutItem__head-icon");
const check3 = steps[2].querySelector(".checkoutItem__head-icon");
steps.forEach((step, index) => {
  const inputs = step.querySelectorAll(".input input,select");
  const check = step.querySelector(".checkoutItem__head-icon");

  if (sameAsBill) {
    sameAsBill.onchange = (e) => {
      if (e.target.checked) {
        inputs2.forEach((input, inpIndex) => {
          inputs3[inpIndex].value = input.value;
        });
        if (check2.classList.contains("active")) {
          check3.classList.add("active");
          stepsPassed[2] = true;
          if (stepsPassed.indexOf(false) === -1) {
            submitBtn.removeAttribute("disabled");
          } else {
            submitBtn.setAttribute("disabled", true);
          }
        }
        steps[2].querySelector(".tabEvent").classList.remove("active");
        steps[2].querySelector(".tabBtn").classList.remove("active");
        steps[3].querySelector(".tabEvent").classList.add("active");
        steps[3].querySelector(".tabBtn").classList.add("active");
      } else {
        if (stepsPassed[2] === false) check3.classList.remove("active");
      }
    };
  }
  inputs.forEach((input, inpIndex) => {
    input.onblur = () => {
      if (input.value === "") {
        input.parentElement.parentElement.classList.add("active");
      }
      let isEmpty = [];
      inputs.forEach((input2) => {
        if (input2.value === "") {
          isEmpty.push(true);
        } else {
          isEmpty.push(false);
        }
      });

      if (isEmpty.indexOf(true) === -1) {
        check.classList.add("active");
        if (index === 1 && sameAsBill.querySelector("input").checked) {
          check3.classList.add("active");
          stepsPassed[2] = true;
        }
        stepsPassed[index] = true;
        if (stepsPassed.indexOf(false) === -1) {
          submitBtn.removeAttribute("disabled");
        } else {
          submitBtn.setAttribute("disabled", true);
        }
        step.querySelector(".tabEvent").classList.remove("active");
        step.querySelector(".tabBtn").classList.remove("active");
        if (
          index + 1 < steps.length &&
          !steps[index + 1]
            .querySelector(".checkoutItem__head-icon")
            .classList.contains("active")
        ) {
          steps[index + 1].querySelector(".tabEvent").classList.add("active");
          steps[index + 1].querySelector(".tabBtn").classList.add("active");
        } else if (
          index + 2 < steps.length &&
          !steps[index + 2]
            .querySelector(".checkoutItem__head-icon")
            .classList.contains("active")
        ) {
          steps[index + 2].querySelector(".tabEvent").classList.add("active");
          steps[index + 2].querySelector(".tabBtn").classList.add("active");
        } else if (
          index + 3 < steps.length &&
          !steps[index + 3]
            .querySelector(".checkoutItem__head-icon")
            .classList.contains("active")
        ) {
          steps[index + 3].querySelector(".tabEvent").classList.add("active");
          steps[index + 3].querySelector(".tabBtn").classList.add("active");
        }
      } else {
        check.classList.remove("active");
        stepsPassed[index] = false;
        if (stepsPassed.indexOf(false) === -1) {
          submitBtn.removeAttribute("disabled");
        } else {
          submitBtn.setAttribute("disabled", true);
        }
      }
    };
    input.oninput = (e) => {
      if (index === 1 && sameAsBill.querySelector("input").checked) {
        const inputs3 = steps[2].querySelectorAll(".input input,select");
        inputs3[inpIndex].value = e.target.value;
      }
      if (input.value !== "") {
        input.parentElement.parentElement.classList.remove("active");
      }
    };
  });
});

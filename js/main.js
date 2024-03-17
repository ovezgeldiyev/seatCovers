// sliders
// /*mobile slider */
function mobileOnlySlider() {
  $(".slider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1.5,
    adaptiveHeight: false,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}
if (window.innerWidth < 1025) {
  mobileOnlySlider();
}
function resizeListener(e) {
  if (window.innerWidth < 1025) {
    $(".slider").addClass("sliderMob");
    if (!$(".slider").hasClass("slick-initialized")) {
      mobileOnlySlider();
    }
  } else {
    $(".slider").removeClass("sliderMob");
    if ($(".slider").hasClass("slick-initialized")) {
      $(".slider").slick("unslick");
    }
  }
}
resizeListener();
window.addEventListener("resize", () => {
  resizeListener();
});

const info = document.getElementById("info");
const infoBtns = document.querySelectorAll(".ns_infoItem");
const infoMain = document.getElementById("infoMain");

if (infoBtns.length > 0) {
  infoBtns.forEach((infoBtn) => {
    infoBtn.onclick = () => {
      const infoBtnData = infoBtn.getAttribute("data-filter");
      const cards = document.querySelectorAll(`.${infoBtnData}`);

      if (infoBtn.classList.contains("active")) {
        cards.forEach((card) => {
          card.classList.remove(`${infoBtnData}-active`);
        });
        infoBtn.classList.remove("active");
      } else {
        cards.forEach((card) => {
          card.classList.add(`${infoBtnData}-active`);
        });
        infoBtn.classList.add("active");
      }
      let isActive = [];
      infoBtns.forEach((item) => {
        if (item.classList.contains("active")) {
          isActive.push(true);
        } else {
          isActive.push(false);
        }
      });
      if (isActive.indexOf(true) !== -1) {
        infoMain.classList.remove("active");
      } else {
        infoMain.classList.add("active");
      }
    };
  });
}
// color start
const colorSelectFunc = () => {
  const productTabs = document.querySelector(".product__inner-tabs");
  const productDemo = document.querySelector(".product__inner-demo");
  const productItems = document.querySelectorAll(".productSelect__item");
  productItems.forEach((productItem) => {
    productItem.onclick = () => {
      let productData = productItem.getAttribute("data-color");
      const productItemParent = productItem.parentElement;
      currentColors = productItemParent.querySelectorAll(
        ".productSelect__item"
      );
      currentColors.forEach((currentColor) => {
        currentColor.classList.remove("active");
        let currentColorData = currentColor.getAttribute("data-color");
        if (currentColorData === productData) {
          currentColor.classList.add("active");
        }
      });
      // text tabs
      const productTabsItems = productTabs.querySelectorAll(".productTab");
      productTabsItems.forEach((productTabsItem) => {
        productTabsItem.classList.remove("active");
      });
      productTabs.querySelector(`.${productData}`).classList.add("active");

      // slider tabs
      const productSliders = productDemo.querySelectorAll(
        ".product__inner-slider"
      );
      productSliders.forEach((productSlider) => {
        productSlider.classList.remove("active");
      });
      productDemo.querySelector(`.${productData}`).classList.add("active");
    };
  });
};
colorSelectFunc();

// color end
const product = document.getElementById("product");

if (product) {
  // connected sliders
  $(function () {
    $(".ns_productSlider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      speed: 500,
      asNavFor: ".ns_productSwiper",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: true,
          },
        },
      ],
    });
  });

  $(function () {
    $(".ns_productSwiper").slick({
      dots: false,
      infinite: true,
      centerMode: false,
      arrows: false,
      focusOnSelect: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: ".ns_productSlider",
    });
  });
}

// tab start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
const colorSelect = document.getElementById("colorSelect");

tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      const faq = colorSelect.querySelector(".tabEvent");
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
// faq start

const myTabs = document.querySelectorAll(".ns_productTab");
myTabs.forEach((myTab) => {
  const faqBtn = myTab.querySelectorAll(".faqBtn");
  const faqEvent = myTab.querySelectorAll(".faqEvent");
  faqBtn.forEach((e) => {
    onFaqClick(faqBtn, faqEvent, e);
  });
  function onFaqClick(faqBtns, faqItems, item) {
    item.addEventListener("click", function (e) {
      let currentBtn = item;
      let faqId = currentBtn.getAttribute("data-faq");
      let currentTab = document.querySelector(faqId);
      if (currentBtn.classList.contains("active")) {
        const faq = currentBtn.parentElement.querySelector(".faqEvent");
        if (faq) {
          faq.classList.remove("active");
          currentBtn.classList.remove("active");
        }
      } else if (!currentBtn.classList.contains("active")) {
        faqBtn.forEach(function (item) {
          item.classList.remove("active");
        });

        faqItems.forEach(function (item) {
          item.classList.remove("active");
        });
        currentBtn.classList.add("active");
        currentTab.classList.add("active");
      }
    });
  }
});

// faq end

const promo = document.getElementById("promo");

if (promo) {
  const orderBtn = document.getElementById("orderBtn");
  const promoCheck = document.getElementById("promoCheck");

  const shippingCheck = document.getElementById("shippingCheck");
  const shippingPrice = document.getElementById("shippingPrice");
  const shippingTotal = document.getElementById("shippingTotal");
  let totalPrice = shippingTotal.innerHTML;
  promo.onkeydown = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.preventDefault();
      if (promo.value != "") {
        promoCheck.classList.add("active");
      }
      if (parseInt(totalPrice) < 250) {
        shippingPrice.innerHTML = "12";
      } else {
        shippingCheck.classList.add("active");
      }
    }
  };

  orderBtn.onclick = () => {
    if (promo.value != "") {
      promoCheck.classList.add("active");
    }
    if (parseInt(totalPrice) < 250) {
      shippingPrice.innerHTML = "12";
    } else {
      shippingCheck.classList.add("active");
    }
  };
}

const designBtn = document.getElementById("designBtn");
if (designBtn) {
  const designMenu = document.getElementById("designMenu");
  const brandBtn = document.getElementById("brandBtn");
  const brandMenu = document.getElementById("brandMenu");

  designBtn.onclick = () => {
    designMenu.classList.toggle("active");
    brandMenu.classList.remove("active");
    brandBtn.classList.remove("active");
  };
  brandBtn.onclick = () => {
    brandMenu.classList.toggle("active");
    brandBtn.classList.toggle("active");
    designMenu.classList.remove("active");
  };
}

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navbg = document.querySelector(".nav-bg");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
  navbg.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const radioMonthly = document.getElementById("flexRadioDefault1");
  const radioPrepaid = document.getElementById("flexRadioDefault2");
  const itemContainer = document.querySelector(".item-container");
  const items = document.querySelectorAll(".item");

  // Kiểm tra radio button checked
  if (radioPrepaid.checked) {
    itemContainer.style.display = "block";
  }

  radioMonthly.addEventListener("change", function () {
    if (radioMonthly.checked) {
      itemContainer.style.display = "none";
    }
  }); 

  radioPrepaid.addEventListener("change", function () {
    if (radioPrepaid.checked) {
      itemContainer.style.display = "block";
    }
  });

  // Hiệu ứng click vào từng item
  items.forEach(function (item) {
    item.addEventListener("click", function () {
      items.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".scrollable-list .card");
  const container = document.querySelector(".scrollable-list");

  function checkMiddleCard() {
    const containerRect = container.getBoundingClientRect();
    const middleX = containerRect.left + containerRect.width / 2;

    cards.forEach((card) => {
      const cardRect = card.getBoundingClientRect();
      const cardMiddleX = cardRect.left + cardRect.width / 2;

      if (Math.abs(middleX - cardMiddleX) < cardRect.width / 2) {
        card.classList.add("highlight");
      } else {
        card.classList.remove("highlight");
      }
    });
  }

  container.addEventListener("scroll", checkMiddleCard);
  window.addEventListener("resize", checkMiddleCard);

  checkMiddleCard();
});


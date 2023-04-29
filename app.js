$(window).on("scroll", function () {
  $(this).scrollTop() > 130
    ? $(".header").addClass("active")
    : $(".header").removeClass("active");
}),
  $(window).on("scroll", function () {
    $(this).scrollTop() > 700 ? $(".backtop").show() : $(".backtop").hide();
  }),
  $(function () {
    $(".dropdown-link").click(function () {
      $(this).next().toggle(),
        $(this).toggleClass("active"),
        $(".dropdown-list:visible").length > 1 &&
          ($(".dropdown-list:visible").hide(),
          $(this).next().show(),
          $(".dropdown-link").removeClass("active"),
          $(this).addClass("active"));
    });
  });

// const dropdownLink = document.querySelectorAll(".dropdown-link");
// const dropdownList = document.querySelectorAll(".dropdown-list");
const backdrop = document.querySelector(".backdrop");

const categoryBtn = document.querySelector(".cate-btn");
const mCategorySidebar = document.querySelector(".Mcategory-sidebar");
const mCategoryCloseBtn = document.querySelector(".Mcategory-close");

const cartBtn = document.querySelector(".header-cart");
const cartBtnM = document.querySelector(".cart-btn");
const mCartSidebar = document.querySelector(".Mcart-sidebar");
const cartCloseBtn = document.querySelector(".Mcart-close");

const couponBtn = document.querySelector(".coupon-btn");
const couponForm = document.querySelector(".coupon-form");

// category open close
categoryBtn.addEventListener("click", () => {
  mCategorySidebar.classList.add("active");
  backdrop.style.display = "flex";
});
mCategoryCloseBtn.addEventListener("click", () => {
  mCategorySidebar.classList.remove("active");
  backdrop.style.display = "none";
});

// cart open close
cartBtn.addEventListener("click", () => {
  mCartSidebar.classList.add("active");
  backdrop.style.display = "flex";
});

cartBtnM.addEventListener("click", () => {
  mCartSidebar.classList.add("active");
  backdrop.style.display = "flex";
});

cartCloseBtn.addEventListener("click", () => {
  mCartSidebar.classList.remove("active");
  backdrop.style.display = "none";
});

// coupon btn n form

couponBtn.addEventListener("click", () => {
  couponBtn.style.display = "none";
  couponForm.style.display = "flex";
});

backdrop.addEventListener("click", () => {
  mCartSidebar.classList.remove("active");
  mCategorySidebar.classList.remove("active");
  backdrop.style.display = "none";
});

// dropdownLink.forEach((link, index) => {
//   link.addEventListener("click", () => {
//     // showDropdownLink(e, dropdownLink[index], index);
//     if (!link.classList.contains("active")) {
//       link.classList.add("active");
//       dropdownList[index].classList.add("active");
//     } else {
//       link.classList.remove("active");
//       dropdownList[index].classList.remove("active");
//     }

//     for (let index = 0; index < dropdownLink.length; index++) {
//       // const element = dropdownLink[index];

//     }
//   });
// });

// TODO functions

// function showDropdownLink(e, index) {

// }

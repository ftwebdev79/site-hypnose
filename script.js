"use strict";

class Accordeon {
  constructor(element) {
    this.title = element.querySelector(".accordeon_title");
    this.content = element.querySelector(".accordeon_content");
    this.dropDown();
  }

  dropDown() {
    if (this.content) {
      this.title.addEventListener("click", () => {
        this.content.classList.toggle("accordeon_content");
        this.content.classList.toggle("accordeon_content_visible");
        console.log("youpi");
      })
    }
}
}

const accordeon1 = new Accordeon(document.querySelector(".accordeon_items0"));
const accordeon2 = new Accordeon(document.querySelector(".accordeon_items1"));
const accordeon3 = new Accordeon(document.querySelector(".accordeon_items2"));
const accordeon4 = new Accordeon(document.querySelector(".accordeon_items3"));
const accordeon5 = new Accordeon(document.querySelector(".accordeon_items4"));
const accordeon6 = new Accordeon(document.querySelector(".accordeon_items5"));
const accordeon7 = new Accordeon(document.querySelector(".accordeon_items6"));

// const items = document.querySelectorAll(".accordeon_items");
// const titles = document.querySelectorAll("h3.accordeon_title");
// const contents = document.querySelectorAll("p.accordeon_content");

// console.log(titles, items, contents);

// titles.forEach((title) => {
//   if (
//     title.addEventListener("click", () => {
//       contents.forEach((content) => {
//         content.classList.remove("accordeon_content");
//         content.classList.add("accordeon_content_visible");
//         console.log("youpi");
//       });
//     })
//   );
// });

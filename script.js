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


const burger = document.querySelector('#burger_img')
const burgerMenu = document.querySelector('.menu')
const links = document.querySelectorAll('.menu_items')
const burgerOpen = document.querySelector('#burger_img')
const burgerClose  = document.querySelector('#close_menu')

burger.addEventListener('click', () => {
  burgerMenu.classList.toggle('show_menu')
  burgerOpen.style.display = 'none'
  burgerClose.style.display = 'block'
})

burgerClose.addEventListener('click', () => {
  burgerMenu.classList.toggle('show_menu')
  burgerOpen.style.display = 'block'
  burgerClose.style.display = 'none'
})

links.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('show_menu')
  })
})
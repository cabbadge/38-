require("es6-promise").polyfill();
import "nodelist-foreach-polyfill";

import tabs from "./modules/tabs";
import cards from "./modules/cards";
import timer from "./modules/timer";
import modal from "./modules/modal";

import calc from "./modules/calc";
import slider from "./modules/slider";
import form from "./modules/form";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", function () {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    300000
  );

  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  cards();
  modal("[data-modal]", ".modal");
  timer(".timer", "2022-12-31");
  form("form", modalTimerId);
  calc();
  slider({
    container: ".offer__slider",
    slide: ".offer__slide",
    prev: ".offer__slider-prev",
    next: ".offer__slider-next",
    totalCounter: "#total",
    currentCounter: "#current",
    wrapperSlide: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });
});

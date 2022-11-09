window.addEventListener("DOMContentLoaded", function () {
  const tabs = require("./modules/tabs"),
    slider = require("./modules/slider"),
    timer = require("./modules/timer"),
    modal = require("./modules/modal"),
    cards = require("./modules/cards"),
    calc = require("./modules/calc");

  tabs();
  slider();
  modal();
  timer();
  cards();
  calc();
});

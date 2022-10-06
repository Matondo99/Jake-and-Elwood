"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const openButton = $(".open-btn");
    const closeButton = $(".close-btn");
    const nav = $(".navi");
    openButton.addEventListener("click", () => {
        nav.classList.add("navi-opening");
    });
    closeButton.addEventListener("click", () => {
        nav.classList.remove("navi-opening");
    });
});
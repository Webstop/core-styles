"use strict";
// Adds default data attribute support to components that are missing it from Bootstrap.

function initPopovers() {
  $('[data-toggle="popover"]').popover();
}

function initTooltips() {
  $('[data-toggle="tooltip"]').tooltip();
}

function initDataAttributes() {
  initPopovers();
  initTooltips();
}

$(function() {
  initDataAttributes();
});

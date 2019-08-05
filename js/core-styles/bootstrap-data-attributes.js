"use strict";
// Adds default data attribute support to components that are missing it from Bootstrap.

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();
});

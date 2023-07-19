$(document).ready(function () {
  $("#home").fadeIn("fast");

  $(".home-button").on("click", function () {
    $("#mode-on").fadeOut(1000);
    $("#mode-off").fadeOut(1000);
    $("#home").fadeIn(1000);
  });
  $(".modeon-button").on("click", function () {
    $("#home").fadeOut(1000);
    $("#mode-off").fadeOut(1000);
    $("#mode-on").fadeIn(1000);
  });
  $(".modeoff-button").on("click", function () {
    $("#home").fadeOut(1000);
    $("#mode-on").fadeOut(1000);
    $("#mode-off").fadeIn(1000);
  });
});

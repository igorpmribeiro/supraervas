$(document).ready(function () {
  $("#home").fadeIn("fast");
  $(".home-button").addClass("selected");

  $(".home-button").on("click", function () {
    $(".home-button").addClass("selected");
    $(".modeon-button").removeClass("selected");

    $("#mode-on").fadeOut(1000);
    $("#mode-off").fadeOut(1000);
    $("#home").fadeIn(1000);
  });
  $(".modeon-button").on("click", function () {
    $(".modeon-button").addClass("selected");
    $(".home-button").removeClass("selected");
    $(".modeoff-button").removeClass("selected");

    $("#home").fadeOut(1000);
    $("#mode-off").fadeOut(1000);
    $("#mode-on").fadeIn(1000);
  });
  $(".modeoff-button").on("click", function () {
    $(".modeoff-button").addClass("selected");
    $(".home-button").removeClass("selected");
    $(".modeon-button").removeClass("selected");

    $("#home").fadeOut(1000);
    $("#mode-on").fadeOut(1000);
    $("#mode-off").fadeIn(1000);
  });

  $("a[href='#search']").on("click", function () {
    $(".search-form").toggleClass("active");
  });

  $("section").on("click", function () {
    $(".search-form").removeClass("active");
  });
});

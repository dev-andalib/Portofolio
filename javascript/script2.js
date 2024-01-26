$(function () {
  var containerEl = document.querySelector(".mixit_main");
  var mixer = mixitup(containerEl, { animation: { duration: 1000 } });

  $(".stt").click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});

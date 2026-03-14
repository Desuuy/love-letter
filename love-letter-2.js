$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var fullLetter = $("#full-letter-overlay");
  var btnCloseFull = $("#close-full-letter");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    fullLetter.addClass("show");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
    fullLetter.removeClass("show");
  }

  btnCloseFull.on("click", function () {
    close();
  });

  fullLetter.on("click", function (e) {
    if (e.target.id === "full-letter-overlay") {
      close();
    }
  });
});
$(function() {
    $("#checkbox").click(function() {
        var hide = document.querySelectorAll(".hide");
      if ($(this).is(":checked")) {
        $(hide).show();
        $(hide).hide();
      } else {
        $(hide).hide();
        $(hide).show();
      }
    });
  });
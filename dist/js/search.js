$(".search-input").on("foucs", function () {
  if ($(this).val() !== "") {
    $("#navbar-input").val($(this).val());
  }
});
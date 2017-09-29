$("#sidemenu li>a").on("click", function () {
  console.log('click');
  $(this).parent().siblings().removeClass("active");
  $(this).parent().addClass('active');
  $(this).next().toggle();
  return false;
});

$("#submenu li").on("click", function () {
  $("#submenu li").removeClass("active");
  $(this).toggleClass("active");
  return false;
});
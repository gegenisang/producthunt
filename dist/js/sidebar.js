$("#sidemenu li>a").on("click", function () {
  console.log('click');
  $(this).parent().siblings().removeClass("active");
  $(this).parent().toggleClass('active');
  $(this).next().toggle();
  return false;
});

$("#submenu li").on("click", function () {
  $("#submenu li").removeClass("active");
  $(this).addClass("active");
  return false;
});
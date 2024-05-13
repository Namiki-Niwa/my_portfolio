// ハンバーガーメニュー
$("#js-btnDrawer").on("click", function(){
  $(this).toggleClass("is-checked");
  $("#js-drawer").slideToggle();
  $("body").toggleClass("is-fixed");
});
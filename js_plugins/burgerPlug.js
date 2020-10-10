$.fn.burger = function(_nav){
  $(this).on("click",function(){
    $(_nav).slideToggle(400);
  })
}

$(() => {
  $("#nav_btn").burger("#id_nav")
})
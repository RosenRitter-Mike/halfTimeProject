let open=true;
$(() => {

    $("#readM").on("click", function (){
         $(".moreInfo").toggleClass("d-none")
       $(".moreInfo").slideDown(800)
       if (open){
         $("#readM").html("read less <<")
       }
       else{
        $("#readM").html("read more >>")
       }
       open=!open;
       $("#readM").toggleClass("bg-warning")
    })
   
  })
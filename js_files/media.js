// $(() => {
//     previewFunc(link_ar)
// })
// let currentView=0;
// let currentlySelected = 0;
// const nodes = document.querySelectorAll(".trailer");

// function previous() {
//     $("#nextBtn").disabled = false;
//     nodes[currentlySelected].classList.remove("active");
//     currentlySelected--;
//     nodes[currentlySelected].classList.add("active");
  
//     if (currentlySelected === 0) {
//       $("#prevBtn").disabled = true;
//     }
//   }
  
//   function next() {
//     $("#prevBtn").disabled = false;
//     nodes[currentlySelected].classList.remove("active");
//     currentlySelected++;
//     nodes[currentlySelected].classList.add("active");
  
//     if (currentlySelected + 1 === nodes.length) {
//       $("#nextBtn").disabled = true;
//     }
//   }



// const previewFunc=(_ar)=>{
//     $("#prevBtn").on("click", function() {
//         previous();
//       });
    
//       $("#nextBtn").on("click", function(e) {
//         next();
//       });


//   if (currentView <= 0){
//       $(".prev").css(disabledBtn);
//     }  
//   else {
//      $(".prev").on("click", function(){
//          currentView--;
//          $("#frame").attr("src",_ar[currentView])
//           return currentView;
//       })
  
//   }  

//   if(currentView >= _ar.length-1){
//       $(".next").css(disabledBtn);
//     }
//   else {
//       $(".next").on("click", function(e){
//          currentView++;
//           $("#frame").attr("src",_ar[currentView])
//          return currentView;
//      })
  
//  }    

// }

// let disabledBtn={
//     cursor: "not-allowed",
//     background:"grey"
// }


$(() => {
    declareViewEvents();
  })
  
  const declareViewEvents = () => {
    $("#id_form input").on("focus",function(){
      $(this).next().addClass("d-none")
      $(this).css("background","white")
    })
    
    $("#id_form").on("submit",function(e){
      e.preventDefault();
      let flagSend = true;
  
  
  
  
      if($("#id_name").val().length < 2){
        $("#id_name").next().removeClass("d-none");
        $("#id_name").css("background","pink")
        flagSend = false;
      }
  
      if($("#id_text").val().length < 7){
        $("#id_phone").next().removeClass("d-none")
        $("#id_phone").css("background","pink")
        flagSend = false;
      }
  
      if(!$("#id_email").val().includes("@") || !$("#id_email").val().includes(".") ){
        $("#id_email").next().removeClass("d-none")
        $("#id_email").css("background","pink")
        flagSend = false;
      }
  
      if(flagSend){
        e.target.submit()
      }
  
  
    })
  }
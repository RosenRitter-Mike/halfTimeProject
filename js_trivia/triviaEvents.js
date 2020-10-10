let triviaScore=0;
$("#subBtn").on("click",function(){
  for(let i=0;i < q_ar.length; i++) {
    if($(`input[type='radio'][name='a${i+1}']:checked`).val()=="right"){
      //    alert("you're right!");
         triviaScore+=10;
         console.log(triviaScore);
            $("#id_score").html(`${triviaScore}`);
            $(`#q${i+1}`).html(`You're right! ${factData[i]}`);
        }
        else{
        //  alert("you're wrong!");
            $("#id_score").html(`${triviaScore}`);
            $(`#q${i+1}`).html(`You're wrong! ${factData[i]}`);
       }
      }

                          if(triviaScore>90){
                               alert(`A+, Your score: ${triviaScore}/100, Wow you're realy smart!`)
                          }
                          else if(triviaScore>80){
                            alert(`A, Your score: ${triviaScore}/100, You're realy well read!`)
                          }
                          else if(triviaScore>70){
                            alert(`B, Your score: ${triviaScore}/100, You've clearly read some things.`)
                          }
                          else if(triviaScore>50){
                            alert(`C, Your score: ${triviaScore}/100, You're obviosly smarter then a than your usual 5th grader.`)
                          }
                          else if(triviaScore>20){
                            alert(`D, Your score: ${triviaScore}/100, You realy should somtimes visit the library.`)
                          } 
                          else{ 
                            alert(`You know nothing, Your score is ${triviaScore}/100! Are you called Jon Snow?`)
                          }
                          $("#Scr").html(`Your score: ${triviaScore}/100`);       
})


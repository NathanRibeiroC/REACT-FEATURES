var showAnswersResults = false
var butPressed1 = false
var isAnsBtn1Right = false

if(showAnswersResults){
    if(butPressed1){
     if(isAnsBtn1Right){
       console.log("1")
     }else{
        console.log('2')
     }
   }else{
     if(isAnsBtn1Right){
        console.log("3")
     }else{
        console.log('4')
     }
   }
 }else{
   if(butPressed1){
    console.log("5")
   }else{
    console.log("6")
   }
 }

 showAnswersResults ? 
    (butPressed1 ? 
        (isAnsBtn1Right ? "green"
                        : "red") 
    : (isAnsBtn1Right ? "green" 
                      : "white")) 
: (butPressed1 ? "#D6DBF5" 
               : "white")

//  showAnswersResults ? butPressed1 ? isAnsBtn1Right : console.log("green")


let attempts = 10;
var randomnumber=Math.floor(Math.random()*100);
console.log(randomnumber);
let inputnum;
while(attempts>0){   
    inputnum=prompt("Enter a number from 1-100");
    
    if (inputnum>100 || inputnum<0)
    {
        alert("Your number is invalid. Please insert a number from 1-100");
    }
    else{
        if(inputnum==randomnumber)
        {
        alert("You won");
        alert("Game ended. Please click the refresh button to play again.");
        attempts=0;

         }
        else if(inputnum>randomnumber)
        {
        alert("Too High");
         }
        else 
        {
        alert("Too Low");
         }
        attempts= attempts-1;
    }
}

 

 if (attempts==0){
 alert("Your attempts ran out. Please click the refresh button to play again.")}
  
    

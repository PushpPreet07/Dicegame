   document.querySelector(".btn").onclick=function(){myfcn()}
   
   function myfcn(){
    var Num1= Math.floor(Math.random()*6+1);

    var Num1Path="dice"+Num1+".png";

    var Num2= Math.floor(Math.random()*6+1);

    var Num2Path="dice"+Num2+".png";

    document.querySelectorAll("img")[0].setAttribute("src", Num1Path);
  
    document.querySelectorAll("img")[1].setAttribute("src", Num2Path);
  

    if(Num1>Num2){
        document.querySelector("h1").innerHTML="player 1 wins";
    }
    else if(Num2>Num1){
        document.querySelector("h1").innerHTML="player 2 wins";
    }
    else{
        document.querySelector("h1").innerHTML="TIE";
    }

    }





   




    

function faktoriel(x){
    var f=1;
    for(var s=1; s<=x; s++){
       f=f*s; 
    }
    
return f;
}
var n=Number(prompt("N: "));

alert(n+"! = "+faktoriel(n));

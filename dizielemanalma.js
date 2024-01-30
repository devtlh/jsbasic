var arkadaslar=new Array(4);

for(var i=0; i<4; i++){
    arkadaslar[i]=prompt(i+". indisli arkadaş:");
   
}
 document.write(arkadaslar);
 document.write("<br>");

 for(var i=0; i<=3; i++){
    document.write(arkadaslar[i]+"<br>");
 }
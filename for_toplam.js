//0 dan N e kadar toplam
var toplam=0;
var n=Number(prompt("N: "));
for(var sayac=0; sayac<=n; sayac=sayac+1){
    document.write(sayac+"<br>");
    toplam=toplam+sayac;

}
document.write("Toplam= "+toplam);


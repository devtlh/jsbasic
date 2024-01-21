var r,alan,cevre,pi=3.14;
r=Number(prompt("Çapı Giriniz:"));
if(r<=0)
    alert("r pozitif olmalı. sayfayı yenileyerek yenden deneyin...")
else{
    alan=pi*r*r;
    cevre=2*pi*r;
    alert("Alan: "+alan+"  Çevre: "+cevre);
}

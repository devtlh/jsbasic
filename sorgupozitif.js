var sayi,kare;
sayi=Number(prompt("Sayı Giriniz:"));

//sorgu kısmı
if(sayi<0){
    alert("sayı negatif")
    alert("F5 İle Sayfayı yenileyin")
}
else{
    kare=sayi*sayi;
    alert("Katre:"+kare)
}
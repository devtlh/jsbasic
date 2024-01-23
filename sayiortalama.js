var n, s, sayi, toplam=0, ortalama=0;

n=Number(prompt("Kaç adet Sayının Orttalaması Alınacak ?"));

for(s=1; s<=n; s++){
    sayi=Number(prompt(s+". Sayi"));
    toplam=toplam+sayi;
    document.write(s+". sayı="+sayi);
    document.write("<br>");
}

document.write("<br>");
ortalama=toplam/n;
document.write("Ortalama=  "+ortalama);

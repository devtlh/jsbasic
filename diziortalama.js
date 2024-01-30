var dizitoplam=0, ortalama=0;
var dizi=new Array(5);
for(var i=0; i<5; i++){
    dizi[i]=Number(prompt(i+". sayı"));
}
for(var i=0; i<5; i++){
    dizitoplam=dizitoplam+dizi[i];
}

ortalama=dizitoplam/5

document.write(ortalama);
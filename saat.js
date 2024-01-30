var an=new Date();
document.write(an+"<br>");
document.write(an.toLocaleString());

var gun=an.getDate();
var ay=an.getMonth();
var yil=an.getFullYear();
var saat=an.getHours();
var dakika=an.getMinutes();

document.write("<br>"+"Tarih:"+gun+"/"+(ay+1)+"/"+yil);
document.write("<br>"+"Saat:"+saat+":"+dakika);


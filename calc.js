
// dane do wprowadzenia czas / odległosc
//czas sprowadzic do wspolnego mianownika

function sugerowaneTempo ( szacowanyCzasWmin, km){
// min/km jako int
var szacowanyCzasWsek=szacowanyCzasWmin*60;
 var min= Math.floor(Math.floor(szacowanyCzasWsek/km)/60);
 //reszta sekund
 var sek= (szacowanyCzasWsek/km)%60;
 // zwróć: tempo

 return min + ":" + sek.toFixed(0) ;
}





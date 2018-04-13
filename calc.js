var godz=$("#godziny").val();
var szacowanyCzasWmin=$("#minuty").val();
var sekundy=$("#sekundy").val();
var km=$("#km").val();


$("#przelicz").on("click", function (){

var wynik=function sugerowaneTempo (godz, szacowanyCzasWmin,sekundy, km){


	

	//				 min/km jako int
	var szacowanyCzasWsek=szacowanyCzasWmin*60;
	szacowanyCzasWsek+=sekundy;
	szacowanyCzasWsek+=godz*3600;

	 var min= Math.floor(Math.floor(szacowanyCzasWsek/km)/60);
	 //				reszta sekund
	 var sek= (szacowanyCzasWsek/km)%60;
	 // 			zwróć: tempo
		if (sek.toString().length === 1) {					
	    	sek = '0' + sek;
	    	return min + ":" + sek;
		}
	 	else{
	 		return min + ":" + sek.toFixed(0) ;
	 		}
		
}; 	


$("#wynik").text(wynik);

});













//		------------------->funkcje<-------------------------


// dane do wprowadzenia czas / odległosc
//czas sprowadzic do wspolnego mianownika


/* 
function sugerowaneTempo ( szacowanyCzasWmin, km){
	//				 min/km jako int
	var szacowanyCzasWsek=szacowanyCzasWmin*60;
	 var min= Math.floor(Math.floor(szacowanyCzasWsek/km)/60);
	 //				reszta sekund
	 var sek= (szacowanyCzasWsek/km)%60;
	 // 			zwróć: tempo
		if (sek.toString().length === 1) {					
	    	sek = '0' + sek;
	    	return min + ":" + sek;
		}
	 	else{
	 		return min + ":" + sek.toFixed(0) ;
	 		}
}

function sugerowaneTempo ( szacowanyCzasWmin,sekundy, km){
	//				 min/km jako int
	var szacowanyCzasWsek=szacowanyCzasWmin*60;
	szacowanyCzasWsek+=sekundy;
	console.log(szacowanyCzasWsek);
	 var min= Math.floor(Math.floor(szacowanyCzasWsek/km)/60);
	 //				reszta sekund
	 var sek= (szacowanyCzasWsek/km)%60;
	 // 			zwróć: tempo
		if (sek.toString().length === 1) {					
	    	sek = '0' + sek;
	    	return min + ":" + sek;
		}
	 	else{
	 		return min + ":" + sek.toFixed(0) ;
	 		}
	}
	function sugerowaneTempo (godz, szacowanyCzasWmin,sekundy, km){
	//				 min/km jako int
	var szacowanyCzasWsek=szacowanyCzasWmin*60;
	szacowanyCzasWsek+=sekundy;
	szacowanyCzasWsek+=godz*3600;
	console.log(szacowanyCzasWsek);
	 var min= Math.floor(Math.floor(szacowanyCzasWsek/km)/60);
	 //				reszta sekund
	 var sek= (szacowanyCzasWsek/km)%60;
	 // 			zwróć: tempo
		if (sek.toString().length === 1) {					
	    	sek = '0' + sek;
	    	return min + ":" + sek;
		}
	 	else{
	 		return min + ":" + sek.toFixed(0) ;
	 		}
	} 		 		

*/






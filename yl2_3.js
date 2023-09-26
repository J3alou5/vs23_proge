// ulesanne 2.3

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('Sisestage oma vanus ', age => {
	readline.question('Sisestage oma sugu (n voi m) ', gender => {
		readline.question('Sisestage treeningutuup (1 - tervisetreening, 2 - põhivastupidavuse treening, 3 - intensiivne aeroobne treening) ', training => {
let genderUp = gender.toUpperCase ();		
	if ( genderUp == "M") {
	sPulse = 220
}
	else if ( genderUp == "N"){
	sPulse = 206
}
else {
  sPulse = "Error!";
}
	if (training == 1) {
  vastus = "Teie pulsisagedusest peaks olema vahemikus " + Math.round((sPulse - parseInt(age)) * 0.5) + " kuni " + Math.round((220 - age) * 0.7) ;
} 
	else if (training == 2){
  vastus = "Teie pulsisagedusest peaks olema vahemikus " + Math.round((sPulse - parseInt(age)) * 0.7) + " kuni " + Math.round((220 - age) * 0.8);
}
	else if (training == 3){
  vastus = "Teie pulsisagedusest peaks olema vahemikus " + Math.round((sPulse - parseInt(age)) * 0.8) + " kuni " + Math.round((220 - age) * 0.87);
}
	else {
  vastus = "Vale arv treeningutuupis!";
}
				console.log(vastus);
				readline.close();
			})
		})
});
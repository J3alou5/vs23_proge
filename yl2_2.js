// ulesanne 2.2

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('Sisestage Leedu perekonnanimi: ', name => {
	if (name.slice(-2) == "te") {
  pereSeis = "Vallaline";
}
	else if (name.slice(-2) == "ne") {
  	pereSeis = "Abielus";
}
	else {
	pereSeis = "Maaramata"
}
		console.log(pereSeis);
		readline.close();
});

// ulesanne 2.1

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('Kas soovite ise valida istekoht voi loosiga (kirjuta "loos" voi ise") ', istekohtAlg => {
let istekohtUp = istekohtAlg.toLowerCase ();
	if (istekohtUp == "loos") {
  istekohtValik = "Loosiga istekoht";
} 
	else if (istekohtUp == "ise") { 
  istekohtValik = "Ise Valitud istekoht";
}
	else { 
	istekohtValik = "Error!"
}

		console.log();
		readline.close();
});
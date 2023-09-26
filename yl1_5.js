// ulesanne 1.4

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('Sisestage ainepunktide arv: ', pointsNr => {
	readline.question('Sisestage nadalate arv: ', weekNr  => {
		let vastus = (pointsNr * 26) / weekNr
		console.log("Ajakulu nadalas on ", Math.round(vastus));
		readline.close();
	})
});
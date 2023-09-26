// ulesanne 1.4

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('Sisestage oma nimi: ', name => {
	readline.question('Sisestage lubatud kiirus (km/h): ', allowedSpeed  => {
		readline.question('Sisestage reaalne kiirus (km/h): ', realSpeed  => {
			let esialgneTrahv = (realSpeed - allowedSpeed) * 3
			let lause = name + ", kiiruse uletamise eest on Teie trahv " + Math.min(190,esialgneTrahv) + " eurot." 
		console.log(lause);
		readline.close();
		})
	})
});
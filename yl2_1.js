// ulesanne 2.1

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('Sisestage temperatuur ', temp => {
	if ( temp < 4.0) {
  vastus = "Jaatumis oht";
} 
	else {
  vastus = "Ei ole jaatumis ohtu";
}
		console.log(vastus);
		readline.close();
});
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("Sisestage mitu korda aratab ", kord =>{
for (let i = 1; i <= kord; i++) {
  console.log("Touse ja sara!");
  }
  readline.close();
})
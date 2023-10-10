const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("Taringute arv  ", kord =>{
for (let i = 1; i <= kord; i++) {
  console.log(Math.ceil(Math.rabdom() * 6));
  }
  readline.close();
})
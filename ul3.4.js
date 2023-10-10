const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let apples = 14
readline.question("Mitu poialpoissi tahab ouna  ", pPoiss =>{
for (let i = 1; i <= pPoiss; i++) {
  let ounPpoiss = Math.ceil(Math.random() *2)
  console.log(ounPpoiss);
  apples = apples - ounPpoiss
  }
  console.log("Lumivalgekesele jai " + apples);
  readline.close();
})
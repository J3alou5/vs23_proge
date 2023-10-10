const readline = require("readline").createInterface({
 input: process.stdin,
  output: process.stdout,});
readline.question("Sisestage metsaringide arv: ", metsaringideArv => {
 const porganditeArv = arvutaPorganditeArv(metsaringideArv);
  console.log("Jänesepoeg saab kokku " + porganditeArv + " porgandit.");
   readline.close();});
function arvutaPorganditeArv(metsaringideArv) {
 let porganditeArv = 0;

 for (let ring = 2; ring <= metsaringideArv; ring += 2) {

   porganditeArv += ring;
    }
 return porganditeArv;
}
const rent = 400;
const tax = "8%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = "00";
const minuteOfDay = "00";

// Only change below this line

if (hourOfDay == undefined && minuteOfDay == undefined) {
  console.log(null);
} else 
 if (hourOfDay == "00" && minuteOfDay == "00") {
  const taxAsDecimal = (salary * 8) / 100;                    // % is NAN, therefore I used basic maths, converted 8% to numerical value which is 8/100.
  const startingAfterTax = salary * 1 - taxAsDecimal;
  const balance = startingAfterTax - transport - food - rent; // Replaced start with startingaftertax
  //console.log(taxAsDecimal);//test
  //console.log(startingAfterTax);//test
  console.log('R',balance.toFixed(2));
}

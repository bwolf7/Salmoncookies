'use strict';

let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM'];

function generateRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function stores (name,minCustPerHour, maxCustPerHour, avgCookPerCust, grandTotal, hourlyCustomers){
  this.name = name;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookPerCust = avgCookPerCust;
  this.grandTotal= this.hourlyCustomers();
  this.hourlyCustomers= hourlyCustomers
  }
          
let seattle = new stores("Seattle", "23", "65", "6.3","0")

let tokyo = new stores("Tokyo","3", "24", "1.2","0")

let dubai = new stores("Dubai","11","38","3.7","0")

let paris = new stores("Paris","20","38","2.3","0")

let lima = new stores("Lima","2","16","4.6","0")

console.log(generateRange(0,10))

stores.prototype.hourlyCustomers = function (){
  for (let hour = 0; hour < hours.length; hour++) {
  
    let generateNumber = generateRange(minCustPerHour, maxCustPerHour);

    let customerSales = Math.round(generateNumber * avgCookPerCust);
    //salesTotals.push(`${hours[hour]}: total sales '{customerSales}`);
    grandTotal = grandTotal + customerSales;
  }
  return this.grandTotal
}  

console.log(seattle,tokyo,dubai,paris,lima)

function generateLineItems(store) {
  let parentEl = document.querySelector(`#${store.name}`);
  for (let total = 0; total < store.salesTotals.length; total++) {
    let newItem = document.createElement('li');
    newItem.innerText = store.salesTotals[total];
    parentEl.appendChild(newItem);
  }
  let lastItem = document.createElement('li');
  lastItem.innerText = store.grandTotal;
  parentEl.appendChild(lastItem);
}

seattle.hourlyCustomers();
tokyo.hourlyCustomers();
dubai.hourlyCustomers();
paris.hourlyCustomers();
lima.hourlyCustomers();
generateLineItems( seattle);
generateLineItems( tokyo);
generateLineItems( dubai);
generateLineItems( paris);
generateLineItems( lima)



// let seattle = {
//   name: 'seattle',
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookPerCust: 6.3,
//   salesTotals: [],
//   grandTotal: 0,
//   hourlyCustomers: function() {
//     for (let hour = 0; hour < hours.length; hour++) {
    
//       let generateNumber = generateRange(this.minCustPerHour, this.maxCustPerHour);

//       let customerSales = Math.round(generateNumber * this.avgCookPerCust);
//       this.salesTotals.push(`${hours[hour]}: total sales ${customerSales}`);
//       this.grandTotal = this.grandTotal + customerSales;
//     }
//   },
// };


// console.log("Hello World");
// setTimeout(() =>{
//     alert("Hey Ram");
// }, 2000);
//  for ( let i = 0; i < 100; i++) {
//     console.log(i);

//  }
//  console.log("I love javascript");


// callback

// function sum(a,b,cb){
//     let ans = a+b;
//     cb(ans);
//  }

//   function DisplaySum(result){
//     const h1 = document.createElement("h1");
//     h1.innerHTML = `The sum of number is:${result}`;
//     document.body.append(h1);
//   }
//   sum(8, 9, DisplaySum);

// // Promise
// const res = new Promise((resolve,rejected) => {
//   // resolve ("Promise Fulfilled");
//   // rejected("Server Error");
//   let success = true;
//   if(success){
//     resolve("Data Fetched");
//   }
//   else{
//     rejected("Server Error");
//   }
// });
// res.then((data) => console.log(data)).catch((error) => console.log(error));

// // // CatFact
// // const fetchedData =() => {
// //   fetch(`https://catfact.ninja/fact`).then((res) => res.json())
// //   .then((data) => console.log(data))
// //   .catch((error) => console.log(error));
// // };
// // fetchedData();
// // CatFact
// const fetchedData =() => {
//   fetch(`https://catfact.ninja/fact`).then((res) => res.json())
//   .then((data) => {const h1 = document.createElement("h1");
//     h1.innerHTML =data.fact;
//     document.body.append(h1);
//   })
//   .catch((error) => console.log(error));
// };
// fetchedData();

// // Async And Await
// const fetchedData = async() => {
//   const res = await fetch(`https://catfact.ninja/fact`);
//   const data = await res.json();
//   const h1 = document.createElement("h1");
//   h1.innerHTML = data.fact;
//   document.body.append(h1);
// };

// fetchedData();

// // Async And Await
// const fetchedData = async() => {
//   try{
//     const res = await fetch(`https://catfact.ninja/fact`);
//     const data = await res.json();
//     const h1 = document.createElement("h1");
//     h1.innerHTML = data.fact;
//     document.body.append(h1);
//   }
//   catch(error){
//     console.log(error);
//   }
// };

// fetchedData();
// console.log("Hello World");

const temperatureField = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dateField = document.querySelector(".weather2 span");
const emojiField = document.querySelector(".weather3 img");
const weatherField = document.querySelector(".weather3 span");
const form =document.querySelector("form");
const input =document.querySelector(".searchField");

let target = "Kathmandu";
const fetchedData = async(target) => {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=fd643bac41de4c108a432317240808&q=${target}`
    );
  
    const data = await res.json();
    const {
      current : {temp_c,
        condition : {text, icon}}, 
      location : {name,localtime}
    } = data;
  
    temperatureField.innerHTML = `${temp_c}&degC`;
    cityField.innerHTML = name;
    emojiField.src = icon;
    weatherField.innerHTML = text;

    const currentTime = localtime.split (" ")[1];
    const currentDate = localtime.split (" ")[0];
    const currentDay = new Date();
    let todayDay = getTodaysDay(currentDay.getDay())
  
    dateField.innerHTML = `${currentTime} - ${todayDay} ${currentDate}`;
    
  } catch (error) {
    console.log
    
  }
};


form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim ===""){
    alert ("Please enter a city name");
  } else {
    target = input.value;
    fetchedData(target);
  }
  
});
fetchedData(target);

function getTodaysDay(num){
  switch (num){
    case 0:
      return "Sunday";
    
    case 1:
      return "Monday";

    case 2:
      return "Tuesday";

    case 3:
      return "Wednesday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";

    default:
      return "Invalid Day"  
  }
};

// // BOM - Browser Object Model
// console.log(location.host);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);
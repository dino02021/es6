import Person from "./Person";

const info = document.querySelector("#info");

const p1 = new Person("bill", 20);

info.innerHTML = p1 + "<br>";

console.log(p1);
console.log(p1.toString());
console.log(p1.toJSON());
console.log(JSON.stringify(p1));


// import myf, { ar1, ar2 } from "./my-export02";
// import { ar1 as ar666 } from "./my-export02";
// import cookies from "js-cookie";

// const info = document.querySelector("#info");
// info.innerHTML += myf(66) + "<br>";
// info.innerHTML += ar1 + "<br>";
// info.innerHTML += ar2 + "<br>";
// info.innerHTML += (ar1 === ar666) + "<br>";

// cookies.set("fuck", "yeah");





// let f = name => `Hello, ${name}`;

// const info = document.querySelector("#info");
// info.innerHTML = f("David");


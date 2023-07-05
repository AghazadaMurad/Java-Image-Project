"use strict";

// let i = 0;

// while (i <= 50) {
//   // console.log(i);

//   if (i % 2 === 0) {
//     console.log(i);
//   }

//   i++;
// }

// const winners = [
//   "Germany",
//   "Spain",
//   "Italy",
//   "Brazil",
//   "France",
//   "Brazil",
//   "Germany",
//   "Italy",
//   "Brazil",
//   "France",
// ];

// const countries = new Set(winners);

// console.log(countries.has("argentina"));

// if (!countries.has("argentina")) {
//   countries.add("argentina");
// }

// countries.delete("Germany");

// const count = [...countries];

// console.log(count);

// const worldWarEvents = new Map([
//   [1939, "German invasion of Poland"],
//   [1940, "German invasion of France"],
//   [1941, "Attack on Pearl Harbor"],
//   [1942, "Battle of Stalingrad"],
//   [1943, "Battle of Kursk"],
//   [1944, "D-Day invasion"],
//   [1945, "Atomic bombings of Hiroshima and Nagasaki"],
// ]);

// for (const [year, event] of worldWarEvents) {
//   console.log(`${event} happened in ${year}`);
// }

// const getEventByYear = (year) => {
//   // return worldWarEvents.get(year);
//   if (!worldWarEvents.has(year)) {
//     console.log("there is none");
//   }
// };

// console.log(getEventByYear(1939));
// worldWarEvents.clear();

// console.log(worldWarEvents);

const modalEl = document.querySelector(".myModal");
const allImg = document.querySelectorAll(".myModal img");
const modalImg = document.querySelector(".myModal img");
const image = document.querySelectorAll(".image");
const itag = document.querySelectorAll(".bx");

const modalAdd = () => {
  modalEl.classList.add("isHidden");
};
const modalRemove = () => {
  modalEl.classList.remove("isHidden");
};

for (let i = 0; i < image.length; i++) {
  image[i].addEventListener("click", (event) => {
    modalEl.classList.remove("isHidden");
    // console.log(itag[i].previousElementSibling.src);
    modalImg.src = itag[i].previousElementSibling.src;
    // console.log(event.target.classList[0]);
  });
}

window.addEventListener("keyup", (event) => {
  if (event.code === "Escape") {
    modalEl.classList.add("isHidden");
  }
});

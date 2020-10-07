// Aji Hidayat
// Soal 2

var readBooksPromise = require("./promise.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
];

let times = 10000;
let no = 0;

const runReadBooks = (times) => {

  readBooksPromise(times, books[no])
    .then((sisa) => {
      if (sisa !== 1000) {
        no++;
        runReadBooks(sisa);
      }
    })
};

runReadBooks(times);

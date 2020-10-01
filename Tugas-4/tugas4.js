// Aji Hidayat

// Soal 1
console.log("LOOPING PERTAMA");
a = 2;
while (a <= 20) {
  console.log(a + " " + "-" + " " + "I love coding");
  a += 2;
}
console.log("LOOPING KEDUA");
b = 20;
while (b >= 0) {
  console.log(b + " " + "-" + " " + "I will become a frontend developer");
  b -= 2;
}

// Soal 2
for (var ulang = 1; ulang <= 20; ulang++) {
  if (ulang % 2 == 0) {
    console.log(ulang + " - Berkualitas");
  } else if (ulang % 2 == 1) {
    if (ulang % 3 == 0 && ulang % 2 == 1) {
      console.log(ulang + " - I Love Coding");
    } else {
      console.log(ulang + " - Santai");
    }
  }
}

// Soal 3
var pagar = "";
for (i = 1; i <= 7; i++) {
  for (j = 1; j <= i; j++) {
    pagar += "#";
  }
  console.log(pagar);
  pagar = "";
}

// Soal 4
var kalimat = "saya sangat senang belajar javascript";
var dataArray = kalimat.split(" ");
console.log(dataArray);

// Soal 5
var daftarBuah = [
  "2. Apel",
  "5. Jeruk",
  "3. Anggur",
  "4. Semangka",
  "1. Mangga",
];

var urutBuah = daftarBuah.sort();
for (i = 0; i <= daftarBuah.length - 1; i++) {
  console.log(daftarBuah[i]);
}

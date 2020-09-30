// Aji Hidayat

// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(
  kataPertama +
    " " +
    kataKedua.charAt(0).toUpperCase() +
    kataKedua.substr(1) +
    " " +
    kataKetiga +
    " " +
    kataKeempat.toUpperCase()
);

// Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

console.log(
  Number(kataPertama) +
    Number(kataKedua) +
    Number(kataKetiga) +
    Number(kataKeempat)
);

// Soal 3
var kalimat = "wah javascript itu keren sekali";

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substr(4, 10);
var kataKetiga = kalimat.substr(15, 3);
var kataKeempat = kalimat.substr(19, 5);
var kataKelima = kalimat.substr(25, 6);

console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);

// Soal 4
var nilai = 87;

if (nilai >= 80) {
  console.log("A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("B");
} else if (nilai >= 60 && nilai < 70) {
  console.log("C");
} else if (nilai >= 50 && nilai < 60) {
  console.log("D");
} else {
  console.log("E");
}

// Soal 5
var tanggal = 31;
var bulan = 5;
var tahun = 1996;

switch (bulan) {
  case 1: {
    bulan = "Januari";
    break;
  }
  case 2: {
    bulan = "Februari";
    break;
  }
  case 3: {
    bulan = "Maret";
    break;
  }
  case 4: {
    bulan = "April";
    break;
  }
  case 5: {
    bulan = "Mei";
    break;
  }
  case 6: {
    bulan = "Juni";
    break;
  }
  case 7: {
    bulan = "Juli";
    break;
  }
  case 8: {
    bulan = "Agustus";
    break;
  }
  case 9: {
    bulan = "September";
    break;
  }
  case 10: {
    bulan = "Oktober";
    break;
  }
  case 11: {
    bulan = "November";
    break;
  }
  case 12: {
    bulan = "Desmber";
    break;
  }
  default: {
    console.log("Belum input Bulan");
  }
}

console.log(tanggal + " " + bulan + " " + tahun);

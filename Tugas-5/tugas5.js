// Aji Hidayat

// Soal 1

function halo() {
  return "Halo Sanbers!";
}
console.log(halo());

// Soal 2
function kalikan(num1, num2) {
  return num1 * num2;
}
var num1 = 12;
var num2 = 4;

var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

// Soal 3

function introduce(name, age, adress, hobby) {
  return (
    "Nama saya " +
    name +
    ", umur saya " +
    age +
    " tahun," +
    " alamat saya " +
    adress +
    ", dan saya punya hobby yaitu " +
    hobby
  );
}

var name = "John";
var age = 30;
var adress = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, adress, hobby);
console.log(perkenalan);

// Soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];

var objectDaftarPeserta = {
  nama: arrayDaftarPeserta[0],
  "jenis kelamin": arrayDaftarPeserta[1],
  hobi: arrayDaftarPeserta[2],
  "tahun lahir": arrayDaftarPeserta[3],
};

console.log(objectDaftarPeserta); // Tes console.log

// Soal 5
var daftarBuah = [
  {
    nama: "strawberry",
    warna: "merah",
    "ada bijinya": "tidak",
    harga: 9000,
  },
  {
    nama: "jeruk",
    warna: "oranye",
    "ada bijinya": "ada",
    harga: 8000,
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    "ada bijinya": "ada",
    harga: 10000,
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    "ada bijinya": "tidak",
    harga: 5000,
  },
];
console.log(daftarBuah[0]);

// Soal 6
var dataFilm = [];

function tambahDataFilm(nama, durasi, genre, tahun) {
  dataFilm.push({
    nama: nama,
    durasi: durasi,
    genre: genre,
    tahun: tahun,
  });
  return dataFilm;
}

tambahDataFilm("Who am I", 90, "Biography", 2017);
console.log(dataFilm);

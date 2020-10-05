// Aji Hidayat

// Soal 1
// Luas Lingkaran
let luasLingkaran = (jariJari, phi = 3.14) => {
  return jariJari ** 2 * phi;
};
console.log(luasLingkaran(14));
// Keliling Lingkaran
let kelilingLingkaran = (jariJari, phi = 3.14) => {
  return phi * jariJari * 2;
};
console.log(kelilingLingkaran(14));

// Soal 2
let kalimat = "";
const tambahKalimat = (kata) => {
  return `${kalimat}${kata}`;
};
console.log(tambahKalimat("saya"));
console.log(tambahKalimat("adalah"));
console.log(tambahKalimat("seorang"));
console.log(tambahKalimat("frontend"));
console.log(tambahKalimat("developer"));

// Soal 3
const newFunction = function literal(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(`${firstName} ${lastName}`);
      return;
    },
  };
};

newFunction("William", "Imoh").fullName();

//Driver Code
newFunction("William", "Imoh").fullName();

// Soal 4
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "vimulus Renderus!!",
};

const { firstName, lastName, destination, occupation, spell } = newObject;
console.log(firstName, lastName, destination, occupation, spell);

// Soal 5
const west = ["will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
console.log(combined);

const readline = require("readline");

// interface untuk menerima inputan
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function penjumlahan(a, b) {
  return parseFloat(a + b);
}

function pengurangan(a, b) {
  return parseFloat(a - b);
}

function perkalian(a, b) {
  return parseFloat(a * b);
}

function pembagian(a, b) {
  if (b === 0) {
    console.log("Error, angka tidak bisa dibagi 0");
    process.exit();
  }
  return parseFloat(a / b);
}

console.log("Pilih operasi:");
console.log("1. Penjumlahan");
console.log("2. Pengurangan");
console.log("3. Perkalian");
console.log("4. Pembagian");

rl.question("Masukkan pilihan operasi (1-4): ", (operasi) => {
  rl.question("Masukkan angka pertama: ", (num1) => {
    rl.question("Masukkan angka kedua: ", (num2) => {
      const nominal1 = parseFloat(num1);
      const nominal2 = parseFloat(num2);

      let hasil;
      let namaOperasi;

      switch (operasi) {
        case "1":
          hasil = penjumlahan(nominal1, nominal2);
          namaOperasi = "Penjumlahan";
          break;
        case "2":
          hasil = pengurangan(nominal1, nominal2);
          namaOperasi = "Pengurangan";
          break;
        case "3":
          hasil = perkalian(nominal1, nominal2);
          namaOperasi = "Perkalian";
          break;
        case "4":
          hasil = pembagian(nominal1, nominal2);
          namaOperasi = "Pembagian";
          break;
        default:
          console.log("Pilihan tidak valid!");
          rl.close();
          return;
      }

      console.log(`\nOperasi: ${namaOperasi}`);
      console.log(`Angka 1: ${nominal1}`);
      console.log(`Angka 2: ${nominal2}`);
      console.log(`Hasil : ${hasil}`);

      rl.close();
    });
  });
});
const ages = [12, 5, 17, 20, 40, 55, 67];

function getCategory(age) {
  if (age >= 0 && age <= 12) {
    return "Anak-anak";
  } else if (age >= 13 && age <= 17) {
    return "Remaja";
  } else if (age >= 18 && age <= 59) {
    return "Dewasa";
  } else if (age >= 60) {
    return "Lansia";
  } else {
    return null;
  }
}

let counts = {
  "Anak-anak": 0,
  Remaja: 0,
  Dewasa: 0,
  Lansia: 0,
};

for (let i = 0; i < ages.length; i++) {
  const age = ages[i];
  const category = getCategory(age);

  if (category === "Anak-anak") {
    counts["Anak-anak"]++;
  } else if (category === "Remaja") {
    counts["Remaja"]++;
  } else if (category === "Dewasa") {
    counts["Dewasa"]++;
  } else if (category === "Lansia") {
    counts["Lansia"]++;
  }
}

console.log(`Anak-anak : ${counts["Anak-anak"]}`);
console.log(`Remaja    : ${counts["Remaja"]}`);
console.log(`Dewasa    : ${counts["Dewasa"]}`);
console.log(`Lansia    : ${counts["Lansia"]}`);
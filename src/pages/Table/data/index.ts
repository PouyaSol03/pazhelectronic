export const branchData = [
  {
    rowNumber: 1,
    date: "1402/06/01",
    time: "12:00",
    branchName: "شعبه مرکزی",
    branchCode: "001",
    event: "ورود",
    entryNumber: "123456",
    entryName: "ورود",
    userName: "Admin",
    userNumber: "123",
  },
  {
    rowNumber: 2,
    date: "1402/06/02",
    time: "12:05",
    branchName: "شعبه مرکزی",
    branchCode: "001",
    event: "خروج",
    entryNumber: "123457",
    entryName: "خروج",
    userName: "Admin",
    userNumber: "123",
  },
];

// Iranian cities and regions
const cities = [
  "مشهد",
  "اصفهان",
  "تهران",
  "شیراز",
  "تبریز",
  "قم",
  "کرج",
  "رشت",
  "کرمان",
  "اهواز",
  "یزد",
  "زنجان",
  "ارومیه",
  "اردبیل",
  "قزوین",
  "کرمانشاه",
  "گرگان",
  "همدان",
  "خرم‌آباد",
  "بندرعباس",
];

// Iranian regions or branches
const regions = [
  "کارگر",
  "نقش جهان",
  "سعدی",
  "ولیعصر",
  "ارم",
  "لاله",
  "بلوار",
  "پاسداران",
  "پونک",
  "آزادی",
];

// Function to generate random dates within a range
const generateRandomDate = (startDate, endDate) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const date = new Date(start + Math.random() * (end - start));
  return date.toLocaleDateString("fa-IR"); // Convert to Persian date format
};

// Populate the rest of the data
for (let i = 3; i <= 50; i++) {
  const city = cities[Math.floor(Math.random() * cities.length)];
  const region = regions[Math.floor(Math.random() * regions.length)];
  const date = generateRandomDate("2023-03-21", "2023-09-22"); // Persian calendar equivalent

  branchData.push({
    rowNumber: i.toString().toLocaleString("fa-IR"), // Convert to string first
    date: date,
    time: `12:${String(i).padStart(2, '0')}`.toLocaleString("fa-IR"), // Already a string
    branchName: `شعبه ${region} ${city}`,
    branchCode: i.toString().padStart(3, '0').toLocaleString("fa-IR"), // Convert to string first
    event: i % 2 === 0 ? "ورود" : "خروج",
    entryNumber: `123${i + 455}`.toString().toLocaleString("fa-IR"), // Convert to string first
    entryName: i % 2 === 0 ? "ورود" : "خروج",
    userName: `کاربر ${i.toString().toLocaleString("fa-IR")}`, // Convert to string first
    userNumber: (i + 100).toString().toLocaleString("fa-IR"), // Convert to string first
  });
}

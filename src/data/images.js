export const imageMap = {
food: [
{ src: "./food/bread.jpg", answer: "bread" },
{ src: "./food/soup.jpg", answer: "soup" },
{ src: "./food/eshel.jpg", answer: "artichoke" },
{ src: "./food/chease.jpg", answer: "cheese" },
{ src: "./food/eggSalad.jpg", answer: "egg salad" },
{ src: "./food/icecream.jpg", answer: "ice cream" },
{ src: "./food/omlet.jpg", answer: "omelet" },
{ src: "./food/meatbolls.jpg", answer: "meatballs" },
{ src: "./food/shnitzel.jpg", answer: "schnitzel" },
{ src: "./food/yellowchease.jpg", answer: "yellow cheese" },
{ src: "./food/wippedcream.jpg", answer: "whipped cream" },
{ src: "./food/marokayfish.jpg", answer: "Moroccan fish" },
{ src: "./food/mahpotato.jpg", answer: "mashed potatoes" },
{ src: "./food/bolonez.jpg", answer: "bolognese" },
{ src: "./food/Stirfriedvegetables.jpg", answer: "stir-fried vegetables" },
{ src: "./food/sushi.jpg", answer: "sushi" },
{ src: "./food/shipudim.jpg", answer: "skewers" },
{ src: "./food/shakshuka.jpg", answer: "shakshuka" },
{ src: "./food/kuskus.jpg", answer: "couscous" },
{ src: "./food/rice.jpg", answer: "rice" },
{ src: "./food/majadra.jpg", answer: "majadra" },
{ src: "./food/humusbasar.jpg", answer: "hummus with meat" },
{ src: "./food/lazanya.jpg", answer: "lasagna" },
{ src: "./food/piza.jpg", answer: "pizza" },
{ src: "./food/musaka.jpg", answer: "moussaka" },
{ src: "./food/sosegeinroll.jpg", answer: "hot dog" },
{ src: "./food/tako.jpg", answer: "taco" },
{ src: "./food/shuarma.jpg", answer: "shawarma" },
{ src: "./food/napolyoncake.jpg", answer: "Napoleon cake" },
],
animals: [
{ src: "./animals/BEAR.jpg", answer: "bear" },
{ src: "./animals/Beaver.jpg", answer: "beaver" },
{ src: "./animals/CAMEL.jpg", answer: "camel" },
{ src: "./animals/CAT.jpg", answer: "cat" },
{ src: "./animals/COW.jpg", answer: "cow" },
{ src: "./animals/CROCODDILE.jpg", answer: "crocodile" },
{ src: "./animals/DOLPHIN.jpeg", answer: "dolphin" },
{ src: "./animals/DONKEY.jpg", answer: "donkey" },
{ src: "./animals/EAGLE.jpg", answer: "eagle" },
{ src: "./animals/FOX.jpg", answer: "fox" },
{ src: "./animals/FLAMINGO.jpg", answer: "flamingo" },
{ src: "./animals/elephant.jpg", answer: "elephant" },
{ src: "./animals/GOAT.jpg", answer: "goat" },
{ src: "./animals/Giraffe.jpg", answer: "giraffe" },
{ src: "./animals/FROG.jpg", answer: "frog" },
{ src: "./animals/horse.jpg", answer: "horse" },
{ src: "./animals/Hippopotamus.jpg", answer: "hippopotamus" },
{ src: "./animals/Hedgehog.jpg", answer: "hedgehog" },
{ src: "./animals/MONKEY.jpg", answer: "monkey" },
{ src: "./animals/LION.jpeg", answer: "lion" },
{ src: "./animals/ZEBRA.jpeg", answer: "zebra" },
{ src: "./animals/WOLF.jpeg", answer: "wolf" },
{ src: "./animals/squirrel.jpeg", answer: "squirrel" },
{ src: "./animals/KOALA.jpeg", answer: "koala" },
{ src: "./animals/PANDA.jpeg", answer: "panda" },
{ src: "./animals/OTTER.jpg", answer: "otter" },
{ src: "./animals/ostrich.jpg", answer: "ostrich" },
{ src: "./animals/HAMSTER.jpeg", answer: "hamster" },
{ src: "./animals/RABBIT.jpg", answer: "rabbit" },
{ src: "./animals/PENGUIN.jpg", answer: "penguin" },
{ src: "./animals/SHEEP.jpg", answer: "sheep" },
{ src: "./animals/SHARK.jpg", answer: "shark" },
{ src: "./animals/ROOSTER.jpg", answer: "rooster" },
{ src: "./animals/SNAKE.jpg", answer: "snake" },

],
flags: [
{ src: "./flags/Argentina.jpg", answer: "Argentina" },
{ src: "./flags/Austria.jpg", answer: "Austria" },
{ src: "./flags/BELGIUM.jpg", answer: "Belgium" },
{ src: "./flags/BRAZIL.jpg", answer: "Brazil" },
{ src: "./flags/CANADA.jpg", answer: "Canada" },
{ src: "./flags/CHINA.jpg", answer: "China" },
{ src: "./flags/CROACIA.jpg", answer: "Croatia" },
{ src: "./flags/CYPRUS.jpg", answer: "Cyprus" },
{ src: "./flags/DENMARK.jpg", answer: "Denmark" },

],

holidays: [{ src: "./holidays/football.jpg", answer: "football" }],
geography: [{ src: "./geography/israel.jpg", answer: "Israel" }],
history: [{ src: "./history/pyramid.jpg", answer: "pyramids" }],
music: [{ src: "./music/piano.jpg", answer: "piano" }]
};

//import fs from "fs";
//import path from "path";

// Base directory path (e.g.: public.)
//const baseDir = path.join(process.cwd(), "public.");
const baseDir = "C:\\inetpub\\wwwroot\\thefloor\\TheFloor\\public\\assets";

// Your categories
const categories = ["flags", "food"]; // Can add more

// Translation dictionary example (can expand)
const translations = {
  "Argentina": "ארגנטינה",
  "Austria": "אוסטריה",
  "BELGIUM": "בלגיה",
  "BRAZIL": "ברזיל",
  "CANADA": "קנדה",
  "CHINA": "סין",
  "CROACIA": "קרואטיה",
  "CYPRUS": "קפריסין",
  "DENMARK": "דנמרק",
  "EGYPT": "מצרים",
  "Estonia": "אסטוניה",
  "Finland": "פינלנד",
  "GEORGIA": "גאורגיה",
  "GREECE": "יוון",
  "INDIA": "הודו",
  "IRELAND": "אירלנד",
  "ISRAEL": "ישראל",
  "ITALY": "איטליה",
  "Japan": "יפן",
  "LATVIA": "לטביה",
  "LITHUANIA": "ליטא",
  "Luxembourg": "לוקסמבורג",
  "Malta": "מלטה",
  "MEXICO": "מקסיקו",
  "MONTENEGRO": "מונטנגרו",
  "NETHERLAND": "הולנד",
  "NORWAY": "נורווגיה",
  "Portugal": "פורטוגל",
  "RUSSIA": "רוסיה",
  "SLOVAKIA": "סלובקיה",
  "SLOVENIA": "סלובניה",
  "SOUTH AFRICA": "דרום אפריקה",
  "SOUTH KOREA": "דרום קוריאה",
  "SPAIN": "ספרד",
  "SWITZERLAND": "שווייץ",
  "THAILAND": "תאילנד",
  "Turkey": "טורקיה",
  "UK": "הממלכה המאוחדת"
};


// Function to create category array
// function createCategoryArray(category) {
//   const dirPath = path.join(baseDir, category);
//   if (true || !fs.existsSync(dirPath)) {
//     console.warn(`Directory not found: ${category}`);
//     return [];
//   }

//   const files = fs.readdirSync(dirPath);

//   return files.map(file => {
//     const nameWithoutExt = file.replace(/\.[^/.]+$/, "");
//     const answer = translations[nameWithoutExt] || nameWithoutExt;
//     return {
//       src: `./${category}/${file}`,
//       answer
//     };
//   });
// }

// // Create arrays for each category
// const data = {};
// categories.forEach(cat => {
//   data[cat] = createCategoryArray(cat);
// });

// // Can also save to JSON file:
// fs.writeFileSync("categories.json", JSON.stringify(data, null, 2), "utf-8");

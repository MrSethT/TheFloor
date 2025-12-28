// CRA/Webpack build-time discovery
const images = require.context(
  "../../assets",
  true,
  /\.(png|jpe?g|svg|webp)$/i
);

const shuffle = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const imageMap = images.keys().reduce((acc, key) => {
  // key looks like: "./food/pizza.png"
  const clean = key.replace("./", "");      // "food/pizza.png"
  const [topic] = clean.split("/");         // "food"

  if (!acc[topic]) acc[topic] = [];

  // CRA returns a module object for many image types; .default is the URL
  const url = images(key).default ? `.${images(key).default}` : images(key);
  acc[topic].push({src:url, name: clean, answer: clean.split("/").pop().split(".")[0]}); // filename without extension

  return acc;
}, {});

// Shuffle images within each topic
Object.keys(imageMap).forEach(topic => {
  imageMap[topic] = shuffle(imageMap[topic]);
});

export default imageMap;
// CRA/Webpack build-time discovery
const images = require.context(
  "../../assets",
  true,
  /\.(png|jpe?g|svg|webp)$/i
);

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
export default imageMap;
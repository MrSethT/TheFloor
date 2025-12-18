import { imageMap } from "./imageMap";

export const topicMap = Object.keys(imageMap).map((topic) => ({
  topic,
  owner: null,
  clues: imageMap[topic], // array of image URLs
}));
export default topicMap;
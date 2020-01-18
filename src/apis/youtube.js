import axios from "axios";

const KEY = "AIzaSyBYhLvwuKnjKRCBSVH3hnPH7tUwDaJ6j9o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

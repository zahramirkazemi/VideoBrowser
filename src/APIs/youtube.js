import axios from "axios";

const KEY="AIzaSyB8oJpuf8rYoiI7hSABY5sWE28sylscNOk";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',         
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
import {IndexPage} from "./webpage.js";
import { DataExtraction } from "./dataextraction.js";

export const API_KEY = `live_zqDCS5WwujFSSwwRMvznO3dJk5SQqAK9p8mm82okEkyT7vNy3T3fevnJK44tYEzh`;
export const BASE_URL = `https://api.thecatapi.com/v1`;

let indexConfig = {
    "backgroundColor" : "rgb(0, 0, 153)",
    "frameColor" : "rgb(255, 255, 0)"
};
let gameConfig = {
    baseURL : BASE_URL,
    headers : {
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods" : "GET"
    }
};

let startPage = new IndexPage(document.body, indexConfig);
startPage.build();
let extractor = new DataExtraction(gameConfig);
extractor.get('/images/search?', {
    api_key : API_KEY,
    limit : 1,
}, 
    (data) => {
    console.log(data);
});
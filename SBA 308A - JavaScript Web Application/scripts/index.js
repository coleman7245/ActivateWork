import {Webpage} from "./webpage.js";
import { DataExtraction } from "./dataextraction.js";

const API_KEY = `live_zqDCS5WwujFSSwwRMvznO3dJk5SQqAK9p8mm82okEkyT7vNy3T3fevnJK44tYEzh`;
const BASE_URL = `https://api.thecatapi.com/v1/`;

let indexConfig = {};
let catConfig = {
    "header" : {
        "x-api-key" : API_KEY,
        "params" : {
        "limit" : 20
    }
    },
    "baseURL" : BASE_URL
};

let startPage = new Webpage(document.body, indexConfig);
startPage.build();
let extractor = new DataExtraction(catConfig);
extractor.get('/images/search', {
    "api_key" : API_KEY,
    "limit" : 20}, 
    (data) => {
    console.log(data);
    //extractor.post('/favourites', )
});
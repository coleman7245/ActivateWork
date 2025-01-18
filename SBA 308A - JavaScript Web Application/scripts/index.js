import {Webpage} from "./webpage.js";
import { DataExtraction } from "./dataextraction.js";

const API_KEY = `live_zqDCS5WwujFSSwwRMvznO3dJk5SQqAK9p8mm82okEkyT7vNy3T3fevnJK44tYEzh`;
const BASE_URL = `https://api.thecatapi.com/v1/`;

let indexConfig = {};
let axiosConfig = {
    
};

let startPage = new Webpage(document.body, indexConfig);
startPage.build();
let extractor = new DataExtraction("");
import { DataExtraction } from "./dataextraction";
import { API_KEY } from "./index.js";
import { BASE_URL } from "./index.js";
import { BreedListPage } from "./webpage.js";

let axiosConfig = {baseURL : BASE_URL};
let extractor = new DataExtraction(axiosConfig);

let pageConfig = {
    "backgroundColor" : "rgb(0, 0, 153)",
    "frameColor" : "rgb(255, 255, 0)"
};
let breedListPage = new BreedListPage(document.body, pageConfig);
breedListPage.build();

function postBreedIds(data) {
    
}
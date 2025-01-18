import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { Promise } from "q";

export class DataExtraction {
    #extractor;
    #header;
    #baseURL;
    #config;
    #api_key;

    constructor(header, baseURL, config, api_key) {
        this.#header = header;
        this.#baseURL = baseURL;
        this.#config = config;
        this.#api_key = api_key;

        this.#extractor = axios.create(config);
    };

    async get(fn) {
        try {
            let response = await this.#extractor.get<AxiosResponse>(this.#baseURL, this.#config);

        }
        catch(error) {
            console.log(error);
        }
    }

    async post(data) {
        
    }
}
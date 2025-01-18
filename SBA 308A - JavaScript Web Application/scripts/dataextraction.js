import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { Promise } from "q";

export class DataExtraction {
    #extractor;
    #baseURL;
    #config;
    #api_key;

    constructor(baseURL, config, api_key) {
        this.#baseURL = baseURL;
        this.#config = config;
        this.#api_key = api_key;

        this.#extractor = axios.create(config);
    };

    async get(fn) {
        try {
            let response = await this.#extractor.get(this.#baseURL, this.#config);
            let data = response.data;

            fn(data);

        }
        catch(error) {
            console.log(error);
        }
    }

    async post(data) {
        try {
            await axios.post(this.#baseURL, data, this.#config);
        }
        catch(error) {
            console.log(error);
        }
    }
}
import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { Promise } from "q";

export class DataExtraction {
    #extractor;
    #baseURL;
    #config;

    constructor(baseURL, config) {
        this.#baseURL = baseURL;
        this.#config = config;

        this.#extractor = axios.create(config);
    };

    async get(fn) {
        try {
            let response = await this.#extractor.get(this.#baseURL);
            let data = response.data;

            fn(data);

        }
        catch(error) {
            console.log(error);
        }
    }

    async post(data) {
        try {
            await axios.post(this.#baseURL, data);
        }
        catch(error) {
            console.log(error);
        }
    }
}
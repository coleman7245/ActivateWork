import axios, { Axios, AxiosError, AxiosResponse } from "axios";
import { Promise } from "q";

export class DataExtraction {
    #config;
    #extractor;

    constructor(config) {
        this.#config = config;
        this.#extractor = axios.create(this.#config);
    };

    async get(url, params, fn) {
        try {
            let response = await this.#extractor.get(url, {params});
            let data = response.data;

            fn(data);

        }
        catch(error) {
            console.log(error);
        }
    }

    async post(url, data, params) {
        try {
            await this.#extractor.post(url, data, {params});
        }
        catch(error) {
            alert("Invalid search query. Please try again.");
        }
    }
}
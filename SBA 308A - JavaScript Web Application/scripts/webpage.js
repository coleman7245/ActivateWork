class Webpage {
    #body;
    #config;

    constructor(body, config) {
        this.#body = body;
        this.#config = config;
    }

    build() {
        this.#createBackground();
    }

    #createBackground(backgroundConfig) {
        this.#body.style.color = black;
        this.#body.style.border = "10px red";
    }

    #createQuoteBox() {

    }

    #createRandomQuoteButton() {

    }
}
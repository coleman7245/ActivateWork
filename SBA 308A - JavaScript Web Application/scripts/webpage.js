export class Webpage {
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
        this.#body.style.backgroundColor = "black";
        this.#createPictureFrame();
    }

    #createPictureFrame() {
        let frame = document.createElement("div");
        frame.style.border = "10px solid red";
        this.#body.append(frame);
    }
}

document.body.style.border
export class Webpage {
    #body;
    #config;

    constructor(body, config) {
        this.#body = body;
        this.#config = config;
    }

    build() {
        this.#createBackground();
        this.#createPictureFrame();
    }

    #createBackground(backgroundConfig) {
        this.#body.style.backgroundColor = "black";
    }

    #createPictureFrame() {
        let frame = document.createElement("div");
        frame.setAttribute("id", "frame");
        frame.style.backgroundColor = "white";
        frame.style.border = `10px solid red`;
        frame.style.boxShadow = "4px 4px 2px white";
        frame.style.height = "400px";
        frame.style.width = "300px";
        frame.style.verticalAlign = "middle";
        frame.style.margin = "0 40%";
        this.#body.append(frame);
    }

    #createButton() {

    }
}
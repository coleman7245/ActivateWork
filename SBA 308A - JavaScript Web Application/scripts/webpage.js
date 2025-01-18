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
        this.#createTextBox("Title", true);
    }

    #createBackground(backgroundConfig) {
        this.#body.style.backgroundColor = "black";
    }

    #createPictureFrame() {
        let frame = document.createElement("div");
        frame.setAttribute("id", "frame");
        frame.style.display = "block";
        frame.style.backgroundColor = "white";
        frame.style.border = `10px solid red`;
        frame.style.boxShadow = "0px 0px 0px 2px white";
        frame.style.height = "400px";
        frame.style.width = "300px";
        frame.style.verticalAlign = "middle";
        frame.style.margin = "5% 40%";
        this.#body.append(frame);
    }

    #createTextBox(text, isBold) {
        let textBox = document.createElement("div");
        textBox.setAttribute("id", "text-box");
        textBox.style.display = "block";
        textBox.style.backgroundColor = "white";
        textBox.style.border = "10px solid red";
        textBox.style.boxShadow = "0px 0px 0px 2px white";
        textBox.style.lineHeight = "200px";
        textBox.style.height = "200px";
        textBox.style.width = "400px";
        textBox.style.verticalAlign = "middle";
        textBox.style.margin = "0 40%";
        textBox.style.textAlign = "center";
        textBox.style.verticalAlign = "middle";

        let textContainer = document.createElement("p");
        if (isBold) {
            let boldText = document.createElement("b");
            boldText.innerText = text;
            boldText.style.display = "block";
            boldText.style.color = "red";
            boldText.style.fontSize = "3em";
            textContainer.append(boldText);
        }
        else {
            textContainer.innerText = text;
            textContainer.style.display = "block";
            textContainer.style.color = "red";
            textContainer.style.fontSize = "20";
        }
        textBox.append(textContainer);


        this.#body.append(textBox);
    }

    #createButton() {

    }
}
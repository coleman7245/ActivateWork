export class Webpage {
    #body;
    #config;
    #searchBtn;

    constructor(body, config) {
        this.#body = body;
        this.#config = config;
    }

    get body() {
        return this.#body;
    };

    get searchButton() {
        return this.#searchBtn;
    }

    build() {
        this.#createBackground();
        this.#createTextBox("Video Game Database Search", true);
        this.#createSearchBar();
    };

    #createBackground() {
        this.#body.style.backgroundColor = this.#config.backgroundColor;
    };

    #createFrame() {
        let frame = document.createElement("div");
        frame.setAttribute("class", "frame");
        frame.style.display = "block";
        frame.style.padding = "10px";
        frame.style.backgroundColor = `${this.#config.backgroundColor}`;
        frame.style.border = `10px solid ${this.#config.frameColor}`;
        frame.style.boxShadow = "0px 0px 10px 10px black";
        frame.style.height = "fit-content";
        frame.style.width = "fit-content";
        frame.style.margin = "5% 40%";
        frame.style.textAlign = "center";
        this.#body.append(frame);

        return frame;
    };

    #createTextBox(text, isBold) {
        let textBox = this.#createFrame();

        let textContainer = document.createElement("p");
        textContainer.style.textShadow = "0px 5px 10px black";
        textContainer.style.color = `${this.#config.frameColor}`;
        textContainer.style.fontSize = "3em";

        if (isBold) {
            let boldText = document.createElement("b");
            boldText.innerText = text;
            textContainer.append(boldText);
        }
        else
            textContainer.innerText = text;

        textBox.append(textContainer);


        this.#body.append(textBox);
    };

    #createSearchBar() {
        let searchBarDiv = this.#createFrame();

        let sbLabel = document.createElement("label");
        sbLabel.setAttribute("for", "search-site");
        sbLabel.innerText = "Find info on your favorite game or game company here!";
        sbLabel.style.textShadow = "0px 5px 10px black";
        sbLabel.style.color = `${this.#config.frameColor}`;
        sbLabel.style.fontSize = "3em";
        sbLabel.style.color = `${this.#config.frameColor}`;
        sbLabel.style.margin = "10px";
        searchBarDiv.append(sbLabel);

        let searchBar = document.createElement("input");
        searchBar.setAttribute("type", "search");
        searchBar.style.margin = "10px";
        searchBarDiv.append(searchBar);

        let searchButton = document.createElement("button");
        searchButton.setAttribute("id", "searchBtn");
        searchButton.innerText = "Find";
        searchButton.style.margin = "10px";
        searchBarDiv.append(searchButton);

        this.#body.append(searchBarDiv);
    };
}
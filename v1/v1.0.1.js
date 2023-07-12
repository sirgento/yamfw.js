class Yamfw {
    tgtDivId;
    navButtonClass;
    whereFiles;
    nextYamfw;
    markdownConverter;
    isMarkdown;

    constructor(tgtDivId, navButtonClass, whereFiles, nextYamfw, markdownConverter) {
        this.tgtDivId = tgtDivId;
        this.navButtonClass = navButtonClass;
        this.whereFiles = whereFiles;
        this.markdownConverter = markdownConverter;
        this.nextYamfw = nextYamfw;
        this.isMarkdown = this.markdownConverter != undefined;
    }

    initialize() {
        let elements = document.getElementsByClassName(this.navButtonClass);
        for (let element of elements) {
            element.addEventListener("click", (event) => {
                event.preventDefault();
                this.loadHtml(element.id);
                event.stopPropagation();
            });
        }
    }

    async loadHtml(elementId) {
        if (elementId == null) {
            return;
        }
        let path = "./" + this.whereFiles + elementId + (this.isMarkdown ? ".md" : ".html");
        let fetcher = await fetch(path);
        let fetched = await fetcher.text();

        if (this.isMarkdown) {
            fetched = this.markdownConverter.makeHtml(fetched);
        }

        document.getElementById(this.tgtDivId).innerHTML = fetched;

        if (this.nextYamfw != undefined) {
            this.nextYamfw.initialize();
        }
    }
}
export default class ViewController {

    constructor(container, title)
    {
        this.container = container;
        this.title = title;
        this.titleEl = document.querySelector('#viewTitle');
        this.hide();
    }

    show()
    {
        this.container.style.display = "block";
        this.titleEl.textContent = this.title;
    }

    hide()
    {
        this.container.style.display = "none";
    }
}
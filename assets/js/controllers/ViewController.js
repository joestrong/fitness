export default class ViewController {

    constructor(container)
    {
        this.container = container;
        this.hide();
    }

    show()
    {
        this.container.style.display = "block";
    }

    hide()
    {
        this.container.style.display = "none";
    }
}
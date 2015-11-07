import ViewController from './ViewController.js';

export default class NavigationController {

    constructor()
    {
        this.container = document.querySelector('#navigation');
    }

    /**
     * Add a menu item to the navigation
     * @param itemText The name of the menu item
     * @param controller The ViewController to switch on click
     * @param setDefault Whether to set this item as the default selection
     */
    add(itemText, controller, setDefault)
    {
        if (!controller instanceof ViewController) {
            throw "Navigation controller must be of type ViewController";
        }
        var a = document.createElement('a');
        a.classList.add('mdl-navigation__link');
        a.href = "#";
        a.textContent = itemText;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            this.switchView(controller)
            this.closeDrawer();
        });
        this.container.appendChild(a);
        if (setDefault) {
            a.click();
        }
    }

    /**
     * Switches the view to show
     * @param controller The ViewController to switch to
     */
    switchView(controller)
    {
        if (this.currentController) {
            this.currentController.hide();
        }
        this.currentController = controller;
        this.currentController.show();
    }

    /**
     * Causes the navigation drawer to go away
     */
    closeDrawer()
    {
        if (!this.navButton) {
            this.navButton = document.querySelector('.mdl-layout__drawer-button');
        }
        if (this.navButton) {
            this.navButton.click();
        }
    }
}

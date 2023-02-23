import Component from "./Component.js";

export default class Menu extends Component {
        #MenuContainer;
        #isopen = false;
        constructor(elemID){
        super(elemID);

        const menuButton = new ToggleButton("#menu-button");
        menuButton.onClick = (value) => {

            this.#isopen = !this.#isopen;

            if(this.#isopen) this.open();
            else this.close();

            this.#isopen ? this.open() : this.close();

            console.log("menu button clicked", value)
            menuButton.toggle();
        }

        this.#menuContainer = this.element.queryselector("#Menu-container")
    }

    open() {
        this.#menuContainer.style.transform = "scaleY(1)";
    }
    close() {
        this.#menuContainer.style.transform = "scaleY(0)";
    }
}
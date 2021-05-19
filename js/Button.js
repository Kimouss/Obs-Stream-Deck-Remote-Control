export class Button {
    label = "Default";

    /**
     * @param {HTMLElement} element
     */
    appendTo (element) {
        this.button = document.createElement('button');
        this.button.innerHTML = this.label;
        this.button.addEventListener('click', this.onClick.bind(this));
        element.appendChild(this.button);
        this.onMounted();
    }

    onClick () {
        throw new Error('You need to implement method onClick')
    }

    active (enabled) {
        if (enabled) {
            this.button.classList.add('active');
        } else {
            this.button.classList.remove('active');
        }
    }

    onMounted() {}
}

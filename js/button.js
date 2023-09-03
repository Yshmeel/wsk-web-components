class ButtonEl extends HTMLButtonElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['data-type', 'data-size'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'data-type':
                this.classList.remove(`btn-${oldValue}`);
                this.classList.add(`btn-${newValue}`);
                break;
            case 'data-size':
                this.classList.remove(`btn-size-${oldValue}`);
                this.classList.add(`btn-size-${newValue}`);
                break;
        }
    }

    connectedCallback() {
        const type = this.getAttribute('data-type') || 'primary';
        const size = this.getAttribute('data-size') || 'lg';

        this.classList.add('btn', `btn-${type}`, `btn-size-${size}`);
    }
}

customElements.define('my-button', ButtonEl, { extends: 'button' });
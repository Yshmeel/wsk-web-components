class InputEl extends HTMLElement {
    _internals = null;
    input = null;
    label = null;

    constructor() {
        super();

        this._internals = this.attachInternals();
        console.log(this._internals);
    }

    connectedCallback() {
        const input = document.createElement('input');
        input.classList.add('form-control');
        input.setAttribute('placeholder', this.getAttribute('placeholder') || '');
        input.setAttribute('required', this.getAttribute('required') || '');
        input.setAttribute('maxlength', this.getAttribute('maxlength') || '');
        input.setAttribute('value', this.getAttribute('value') || '');

        const label = document.createElement('label');
        label.innerText = this.getAttribute('label') || '';

        this.input = input;
        this.label = label;

        const shadowRoot = this.attachShadow({ mode: 'open' });

        shadowRoot.appendChild(label);
        shadowRoot.appendChild(input);
    }

    static get observableAttributes() {
        return ['required', 'value', 'maxlength', 'label'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch(name) {
            case 'required':
                input.setAttribute('required', newValue);
                return
            case 'value':
                input.setAttribute('value', newValue);
                return
            case 'maxlength':
                input.setAttribute('maxlength', newValue);
                return
            case 'label':
                input.innerText = newValue;
                return
        }
    }
}

customElements.define('my-input', InputEl)
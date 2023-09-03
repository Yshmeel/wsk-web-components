const _cardTemplate = document.createElement('template');
_cardTemplate.innerHTML = `
    <style>
        .card {
            padding: 20px;
            border: 1px solid #000;
        }
        
        h3 {
            margin: 0;
        }
    
    </style>

    <div class="card">
        <div class="card-header">
            <h3 slot="title">Title</h3>
        </div>
        
        <div class="card-body">
            <slot name="description">Description</slot>
        </div>
    </div>
`;

class CardEl extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const template = _cardTemplate.content.cloneNode(true);
        this.attachShadow({mode: 'open'}).appendChild(template);
    }
}

customElements.define('m-card', CardEl);
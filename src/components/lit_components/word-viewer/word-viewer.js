import { html, css, LitElement } from "lit";

export class WordViewerWC extends LitElement {
    static styles = css`
        :host {
            display: block;
            color: var(--word-viewer-text-color, #000);
            background-color: var(--word-viewer-background-color, #fff);
        }
        p {
            color: blue;
        }`;
    
    static properties = {
        words: { type: String, reflect: true}
    };

    // add state to the component to increment an index
    static state = {
        index: 0
    };

    constructor() {
        super();
        this.words = 'Word Viewer';
    }

    connectedCallback() {
        super.connectedCallback();
        console.log('connected');
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        console.log('disconnected');
    }

    attributeChangedCallback(name, oldVal, newVal) {
        super.attributeChangedCallback(name, oldVal, newVal);
        console.log('attribute changed');
    }

    render() {
        return html`<p>${this.words}</p>`;
    }
}

customElements.define('word-viewer', WordViewerWC);
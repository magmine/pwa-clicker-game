import { html, css, LitElement } from 'lit';

export class BbvaButtonWC extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        color: var(--bbva-button-text-color, #000);
      }
      button {
        background-color: #214a80;
        border: none;
        color: #fff;
        cursor: pointer;
        padding: 10px;
        width: 100%;
        border-radius: 5%;
      }
      button:hover {
        background-color: #306bdc;
      }
    `;
  }

  static get properties() {
    return {
      text: { type: String },
    };
  }

  constructor() {
    super();
    this.text = 'Join';
  }

  __click({ target }) {
    this.dispatchEvent(
      new CustomEvent('join-click', {
        detail: { target },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <button @click=${this.__click}>${this.text}</button>
    `;
  }
}

customElements.define('bbva-button', BbvaButtonWC);

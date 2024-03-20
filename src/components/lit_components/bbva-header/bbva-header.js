import { LitElement, html, css } from 'lit';

export class BbvaHeaderWC extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #9a9ab9a6;
      padding: 1rem 0px 1rem 0;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .username {
      font-size: 1.2rem;
      padding-left: 1rem;
    }
    .logout-button {
      display: flex;
      align-items: center;
      background-color: #1464a5;
      color: white;
      border: none;
      cursor: pointer;
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 1rem;
    }
    .logout-icon {
      margin-right: 5px;
    }
  `;

  static get properties() {
    return {
      username: { type: String },
    };
  }

  constructor() {
    super();
    this.username = 'Squid';
  }

  render() {
    return html`
      <div class="header">
        <div class="username">Hi ${this.username}</div>
        <button class="logout-button" @click=${this._onQuit}>
          <span class="logout-icon">&#x2716;</span>
          Log out
        </button>
      </div>
    `;
  }

  _onQuit() {
    this.dispatchEvent(new CustomEvent('quit-game', { bubbles: true, composed: true }));
  }
}

customElements.define('bbva-header', BbvaHeaderWC);
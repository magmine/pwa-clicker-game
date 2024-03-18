import { LitElement, html, css } from 'lit';

export class BbvaHeaderWC extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: #9a9ab9a6;
      padding: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .username {
      font-size: 1.2rem;
    }
    .logout-button {
      display: flex;
      align-items: center;
      background-color: #007bff;
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
    this.username = 'User'; // Default username, replace or dynamically update as needed
  }

  render() {
    return html`
      <div class="header">
        <div class="username">${this.username}</div>
        <button class="logout-button" @click=${this._onLogout}>
          <span class="logout-icon">&#x2716;</span>
          Log out
        </button>
      </div>
    `;
  }

  _onLogout() {
    // Here, you can handle the logout logic, such as clearing session data
    console.log('Logging out...');
    // Emit a custom event if needed, for example:
    // this.dispatchEvent(new CustomEvent('logout', { bubbles: true, composed: true }));
  }
}

customElements.define('bbva-header', BbvaHeaderWC);
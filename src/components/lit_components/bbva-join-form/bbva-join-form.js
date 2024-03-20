import { LitElement, html } from 'lit';
import '../../react_components/BbvaButton/BbvaButton.jsx';
import '../../react_components/BbvaInput/BbvaInput.jsx';

export class JoinFormWC extends LitElement {
  constructor() {
    super();
    this.username = '';
  }

  render() {
    return html`
      <form @submit=${this._onSubmit}>
        <bbva-input @username-input=${this._onUsernameInput}></bbva-input>
        <bbva-button @join-click=${this._onJoinClick}></bbva-button>
      </form>
    `;
  }

  _onJoinClick() {
    const usernameInput = this.shadowRoot.querySelector('bbva-input');
    const isValid = usernameInput.validate();

    if (isValid) {
      this.dispatchEvent(
        new CustomEvent('user-joined', {
          detail: { username: this.username },
          bubbles: true,
          composed: true,
        })
      );
    } else {
      console.error('Validation failed');
    }
  }

  _onUsernameInput(event) {
    this.username = event.detail.value;
  }

  _onSubmit(event) {
    event.preventDefault();
  }
}

customElements.define('bbva-join-form', JoinFormWC);
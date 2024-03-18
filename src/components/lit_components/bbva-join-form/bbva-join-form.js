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
        <bbva-button @on-click=${this._onJoinClick}></bbva-button>
      </form>
    `;
  }

  _onJoinClick() {
    // Attempt to get the username-input element and validate it
    const usernameInput = this.shadowRoot.querySelector('bbva-input');
    const isValid = usernameInput.validate();

    if (isValid) {
      console.log('Username submitted:', this.username);
      // Handle the successful submission here (e.g., API call)
    } else {
      console.error('Validation failed');
      // Handle the error state as needed
    }
  }

  _onUsernameInput(event) {
    this.username = event.detail.value;
  }

  _onSubmit(event) {
    // Prevent the form from submitting normally
    event.preventDefault();
  }
}

customElements.define('bbva-join-form', JoinFormWC);
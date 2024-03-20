import { html, css, LitElement } from 'lit-element';

export class BbvaInputWC extends LitElement {
  static get styles() {
    return css`
      .form-group {
      margin-bottom: 1em;
      border: 2px solid transparent; /* Default border */
      padding: 5px;
      position: relative;
    }
    .form-group.error {
      border-color: tomato; /* Border color on error */
    }
    .form-group.error::after {
      content: attr(data-error); /* Show error message */
      position: absolute;
      top: 100%;
      left: 5px;
      font-size: 0.8em;
      color: tomato;
    }
    input {
      width: calc(100% - 10px); /* Adjust width to fit parent's padding */
      padding: 0.5em;
      font-size: 1em;
      border: 1px solid #ccc; /* Input border */
      box-sizing: border-box; /* Include padding and border in element's width */
    }
    `;
  }

  static get properties() {
    return {
      value: { type: String },
      placeholder: { type: String },
      type: { type: String },
      ariaLabel: { type: String },
      error: { type: Boolean },
      errorMessage: { type: String }
    };
  }

  constructor() {
    super();
    this.type = '';
    this.value = '';
    this.placeholder = 'username';
    this.name = 'username';
    this.ariaLabel = '';
    this.error = false; // Tracks whether there's an error
    this.errorMessage = ''; // The error message to display
  }

  validate() {
    const input = this.shadowRoot.querySelector('input');
    const value = input.value;
    this.error = !value; // Assuming validation fails if the input is empty
    this.errorMessage = this.error ? 'Username is required' : '';

    // Emit an event indicating the validation state
    this.dispatchEvent(new CustomEvent('validation', {
      detail: { valid: !this.error },
      bubbles: true,
      composed: true
    }));

    return !this.error; // Return the validation result
  }

  _onInput(event) {
    const value = event.target.value;
    this.error = !value; // For example, error if input is empty
    this.errorMessage = this.error ? 'Username is required' : '';

    // Emit a custom event with the input value and error state
    this.dispatchEvent(new CustomEvent('username-input', {
      detail: { value: value, error: this.error },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    const ariaLabel = this.placeholder || this.ariaLabel || '';
    return html`
        <div class="form-group ${this.error ? 'error' : ''}" data-error=${this.errorMessage}>
            <input
                type="text"
                tab-index="0"
                class=${this.error ? 'error' : ''}
                id="username"
                .type=${this.type}
                .placeholder=${this.placeholder}
                .value=${this.value}
                aria-label=${ariaLabel}
                required
                .name=${this.placeholder}
                @input=${this._onInput}
            />
        </div>
    `;
  }
}

customElements.define('bbva-input', BbvaInputWC);

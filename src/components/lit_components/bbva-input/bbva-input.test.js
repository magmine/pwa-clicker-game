import { expect, test, vi } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import userEvent from '@testing-library/user-event';
import './bbva-input';

test('BbvaInputWC updates value on input and validates', async () => {
  fixtureCleanup();

  const el = await fixture(`<bbva-input placeholder="username"></bbva-input>`);
  const inputEl = el.shadowRoot.querySelector('input');

  const dispatchEventSpy = vi.spyOn(el, 'dispatchEvent');

  await userEvent.type(inputEl, 'testUser');

  expect(inputEl.value).toBe('testUser');

  expect(dispatchEventSpy).toHaveBeenCalledTimes('testUser'.length);
  let customEvent = dispatchEventSpy.mock.calls[0][0];
  expect(customEvent).toBeInstanceOf(CustomEvent);
  expect(customEvent.type).toBe('username-input');
  expect(customEvent.detail.value).toBe('t');
  expect(customEvent.detail.error).toBeFalsy();
  inputEl.value = '';
  inputEl.dispatchEvent(new Event('input', { bubbles: true, composed: true }));

  el.validate();

  expect(el.error).toBe(true);
  expect(el.errorMessage).toBe('Username is required');

  customEvent = dispatchEventSpy.mock.calls[dispatchEventSpy.mock.calls.length - 1][0]; // Last call should be validation event
  expect(customEvent).toBeInstanceOf(CustomEvent);
  expect(customEvent.type).toBe('validation');
  expect(customEvent.detail.valid).toBeFalsy();

  // Cleanup spy
  dispatchEventSpy.mockRestore();
});
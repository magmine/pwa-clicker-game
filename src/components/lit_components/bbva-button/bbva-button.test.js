import { expect, test, vi } from 'vitest';
import { html, fixture, fixtureCleanup } from '@open-wc/testing';
import { userEvent } from '@testing-library/user-event';
import './bbva-button';
test('BbvaButtonWC dispatches join-click event on click', async () => {
  fixtureCleanup();

  // Set up the component fixture
  const el = await fixture(html`<bbva-button text="Click me"></bbva-button>`);
  const button = el.shadowRoot.querySelector('button');

  const dispatchEventSpy = vi.spyOn(el, 'dispatchEvent');

  await userEvent.click(button);

  expect(dispatchEventSpy).toHaveBeenCalledTimes(1);

  const customEvent = dispatchEventSpy.mock.calls[0][0];
  expect(customEvent).toBeInstanceOf(CustomEvent);
  expect(customEvent.type).toBe('join-click');

  expect(customEvent.detail.target).toBe(button);

  // Cleanup spy
  dispatchEventSpy.mockRestore();
});
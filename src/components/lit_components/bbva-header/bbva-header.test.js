import { expect, test, vi } from 'vitest';
import { fixture, fixtureCleanup } from '@open-wc/testing';
import './bbva-header';

test('BbvaHeaderWC renders username and dispatches quit-game event on logout', async () => {
  fixtureCleanup();

  const el = await fixture(`<bbva-header username="TestUser"></bbva-header>`);
  
  const usernameEl = el.shadowRoot.querySelector('.username');
  const logoutButton = el.shadowRoot.querySelector('.logout-button');

  expect(usernameEl.textContent).toBe('Hi TestUser');

  const dispatchEventSpy = vi.spyOn(el, 'dispatchEvent');

  logoutButton.click();

  expect(dispatchEventSpy).toHaveBeenCalledTimes(1);
  const customEvent = dispatchEventSpy.mock.calls[0][0];
  expect(customEvent).toBeInstanceOf(CustomEvent);
  expect(customEvent.type).toBe('quit-game');

  // Cleanup spy
  dispatchEventSpy.mockRestore();
});
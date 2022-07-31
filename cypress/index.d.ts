/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getBySel: <E extends Node = HTMLElement>(arg: string) => Chainable<JQuery<E>>;
  }
}

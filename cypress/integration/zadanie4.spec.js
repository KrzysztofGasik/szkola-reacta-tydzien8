import "cypress-react-selector";

describe("zadanie 4 - E2E przy użyciu cypress-a na zadaniu 2", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.waitForReact();
  });

  it("should have value of 0 if props is not passed", () => {
    const counter = cy.get(".counter");
    counter.contains(0);
  });

  it("should have value of 10 if props is passed", () => {
    cy.react("Zadanie 2", { props: { start: "10" } });
    const counter = cy.get(".counter");
    counter.contains(10);
  });

  it("should have two buttons, one for increment and one for decrement counter", () => {
    cy.get(".increment").contains("+");
    cy.get(".decrement").contains("-");
  });
  it("should update counter after button click - increment", () => {
    const incrementButton = cy.get(".increment");
    incrementButton.click();
    incrementButton.click();
    let counter = cy.get(".counter");
    counter.contains(12);
  });
  it("should update counter after button click - decrement", () => {
    const decrementButton = cy.get(".decrement");
    decrementButton.click();
    decrementButton.click();
    let counter = cy.get(".counter");
    counter.contains(10);
  });

  it("should have value of typed into input - 50", () => {
    const input = cy.get(".update");
    input.type(50);
    const updateButton = cy.get(".updateBtn");
    updateButton.click();
    const counter = cy.get(".counter");
    counter.contains(50);
  });

  it("should reset to 0", () => {
    const resetButton = cy.get(".resetBtn");
    resetButton.click();
    const counter = cy.get(".counter");
    counter.contains(0);
  });
});

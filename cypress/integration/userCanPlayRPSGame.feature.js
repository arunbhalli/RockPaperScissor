describe("user can play game", () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it ("for selecting rock", () => {
    cy.get("[data-cy=rock").should("contain","Rock");
  })
  it ("display buttons for selecting stone", () => {
    cy.get("[data-cy=paper]").should("contain","Paper")
  })
  it ("display buttons for selecting stone", () => {
    cy.get("[data-cy=scissor").should("contain","Scissor");
  })
});

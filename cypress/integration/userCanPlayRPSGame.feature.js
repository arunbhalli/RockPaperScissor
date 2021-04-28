describe("user can see his/her choice", () => {
  beforeEach(() => {
    cy.visit('/')
  });
  it ("for selecting rock", () => {
    cy.get("[data-cy=rock").should("contain","Rock");
  })
  it ("for selecting paper", () => {
    cy.get("[data-cy=paper]").should("contain","Paper")
  })
  it (" for selecting Scissor", () => {
    cy.get("[data-cy=scissor").should("contain","Scissor");
  })
});

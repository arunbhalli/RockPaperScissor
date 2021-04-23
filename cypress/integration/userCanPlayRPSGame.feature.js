describe("user can play game", () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it("display a header", () => {
    cy.get("[data-cy=header]").should("contain");
  });
  it ("display buttons for selecting stone", () => {
    cy.get("[data-cy=stone-bt]").should("contain","stone");
  })
  it ("display buttons for selecting stone", () => {
    cy.get("[data-cy=paper-bt]").should("contain","stone")
  })
  it ("display buttons for selecting stone", () => {
    cy.get("[data-cy=scissor-bt").should("contain","scissors");
  })
});

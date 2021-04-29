describe("Computer select  Rock ", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad(window) {
        cy.stub(window.Math, "floor").returns(0);
      },
    });
  });

  it("My  choice is  Rock then it is a draw", () => {
    cy.get("[data-cy=rock]").click();
    cy.get("[data-cy=my-choice]").should("be.visible");
    cy.get("[data-cy=play-game]").click();
    cy.get("[data-cy=computer]").should("be.visible");
    cy.get("[data-cy=result]").should("contain", "It is a draw");
  });

  it("My  choice is Scissors then  i lost the game ", () => {
    cy.get('[data-cy="scissor"]').click();
    cy.get('[data-cy="my-choice"]').should("be.visible");
    cy.get("[data-cy=play-game]").click();
    cy.get('[data-cy="computer"]').should("be.visible");
    cy.get('[data-cy="result"]').should("contain", "Computer Won");
  });

  it("My  choice is Paper then I won the game", () => {
    cy.get('[data-cy="paper"]').click();
    cy.get('[data-cy="my-choice"]').should("be.visible");
    cy.get("[data-cy=play-game]").click();
    cy.get('[data-cy="computer"]').should("be.visible");
    cy.get('[data-cy="result"]').should("contain", "Congratulation You Won!");
  });
});

describe("Computer select  scissor ", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad(window) {
        cy.stub(window.Math, "floor").returns(2);
      },
    });
  });

  it("My  choice is  Rock then i lost", () => {
    cy.get("[data-cy=rock]").click();
    cy.get("[data-cy=my-choice]").should("be.visible");
    cy.get("[data-cy=play-game]").click();
    cy.get("[data-cy=computer]").should("be.visible");
    cy.get("[data-cy=result]").should("contain", "Congratulation You Won!");
  });

  it("My  choice is Scissors then  it is a draw ", () => {
    cy.get('[data-cy="scissor"]').click();
    cy.get('[data-cy="my-choice"]').should("be.visible");
    cy.get("[data-cy=play-game]").click();
    cy.get('[data-cy="computer"]').should("be.visible");
    cy.get('[data-cy="result"]').should("contain", "It is a draw");
  });

  it("My  choice is Paper then I won the game", () => {
    cy.get('[data-cy="paper"]').click();
    cy.get('[data-cy="my-choice"]').should("be.visible");
    cy.get("[data-cy=play-game]").click();
    cy.get('[data-cy="computer"]').should("be.visible");
    cy.get('[data-cy="result"]').should("contain", "Computer Won");
  });
});


describe("Computer select  paper ", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad(window) {
        cy.stub(window.Math, "floor").returns(1);
      },
    });
  });

  it("My  choice is  Rock then i lost", () => {
    cy.get("[data-cy=rock]").click();
    cy.get("[data-cy=my-choice]").should("be.visible");
    cy.get("[data-cy=play-game]").click();
    cy.get("[data-cy=computer]").should("be.visible");
    cy.get("[data-cy=result]").should("contain", "Computer Won");
  });

  it("My  choice is Scissors then I won the game  ", () => {
    cy.get('[data-cy="scissor"]').click();
    cy.get('[data-cy="my-choice"]').should("be.visible");
    cy.get("[data-cy=play-game]").click();
    cy.get('[data-cy="computer"]').should("be.visible");
    cy.get('[data-cy="result"]').should("contain", "Congratulation You Won!");
  });

  it("My  choice is Paper then it is a draw", () => {
    cy.get('[data-cy="paper"]').click();
    cy.get('[data-cy="my-choice"]').should("be.visible");
    cy.get("[data-cy=play-game]").click();
    cy.get('[data-cy="computer"]').should("be.visible");
    cy.get('[data-cy="result"]').should("contain", "It is a draw");
  });
});

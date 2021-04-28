describe("User select  Rock ", () => {
	beforeEach(() => {
		cy.visit("/")
	});
  
	it("Computer  choose Rock and it is a draw", () => {
		cy.get('[data-cy="Rock"]').click();
		cy.get('[data-cy="my-choice"]').should("contain", "My choice: Rock");
		cy.get('[data-cy="computer-selection"]').should("contain","Computer choice: Rock");
		cy.get('[data-cy="result"]').should("contain", "It is a draw");
	});

	it("Computer  choose Scissors and loses", () => {
		cy.get('[data-cy="Rock"]').click();
		cy.get('[data-cy="my-choice"]').should("contain", "My choice: Rock");
		cy.get('[data-cy="computer"]').should("contain","Computer choice: Scissors");
		cy.get('[data-cy="result"]').should("contain", "Congratulation You Won!");
	});

	it("Computer  choose Paper and wins", () => {
		cy.get('[data-cy="Rock"]').click();
		cy.get('[data-cy="my-choice"]').should("contain",	"My choice: Rock");
		cy.get('[data-cy="computer"]').should("contain","Computer choice: Paper");
		cy.get('[data-cy="result"]').should("contain", "Computer Won!");
	});
});

describe("User select  Paper ", () => {
	beforeEach(() => {
		cy.visit("/")
	});
  
	it("Computer  choose Rock and loses ", () => {
		cy.get('[data-cy="Paper"]').click();
		cy.get('[data-cy="my-choice"]').should("contain", "My choice: Paper");
		cy.get('[data-cy="computer-selection"]').should("contain","Computer choice: Rock");
		cy.get('[data-cy="result"]').should("contain", "Congratulation You Won!");
	});

	it("Computer  choose Scissors and Won", () => {
		cy.get('[data-cy="Paper"]').click();
		cy.get('[data-cy="my-choice"]').should("contain", "My choice: Paper");
		cy.get('[data-cy="computer"]').should("contain","Computer choice: Scissors");
		cy.get('[data-cy="result"]').should("contain", "Computer Won!");
	});

	it("Computer  choose Paper it is a draw", () => {
		cy.get('[data-cy="Paper"]').click();
		cy.get('[data-cy="my-choice"]').should("contain",	"My choice: Paper");
		cy.get('[data-cy="computer"]').should("contain","Computer choice: Paper");
		cy.get('[data-cy="result"]').should("contain", "It is a draw!");
	});
});


describe("User select  Scissor ", () => {
	beforeEach(() => {
		cy.visit("/")
	});
  
	it("Computer  choose Rock and Won ", () => {
		cy.get('[data-cy="Scissor"]').click();
		cy.get('[data-cy="my-choice"]').should("contain", "My choice: Scissor");
		cy.get('[data-cy="computer-selection"]').should("contain","Computer choice: Rock");
		cy.get('[data-cy="result"]').should("contain", "Computer Won");
	});

	it("Computer  choose Scissor it is a draw", () => {
		cy.get('[data-cy="Scissor"]').click();
		cy.get('[data-cy="my-choice"]').should("contain", "My choice: Scissor");
		cy.get('[data-cy="computer"]').should("contain","Computer choice: Scissor");
		cy.get('[data-cy="result"]').should("contain", "It is a draw!!");
	});

	it("Computer  choose Paper it is a draw", () => {
		cy.get('[data-cy="Scissor"]').click();
		cy.get('[data-cy="my-choice"]').should("contain",	"My choice: Scissor");
		cy.get('[data-cy="computer"]').should("contain","Computer choice: Paper");
		cy.get('[data-cy="result"]').should("contain", "Congratulation You Won!");
	});
});

describe("User select  Rock ", () => {
	beforeEach(() => {
			cy.visit("/",{
			onBeforeLoad(window) {
				cy.stub(window.Math, "random").returns(0)
			}
		})
	});
  
	it("Computer  choose Rock and it is a draw", () => {
		cy.get('[data-cy=rock]').click();
		cy.get('[data-cy=my-choice]').should("be.visible");
		cy.get('[data-cy=play-game]').click();
		cy.get('[data-cy=computer]').should("be.visible");
		cy.get('[data-cy=result]').should("contain", "It is a draw");
	});

	it("Computer  choose Scissors and loses", () => {
		cy.get('[data-cy="rock"]').click();
		cy.get('[data-cy="my-choice"]').should("be.visible");
		cy.get('[data-cy=play-game]').click();
		cy.get('[data-cy="computer"]').should("be.visible");
		cy.get('[data-cy="result"]').should("contain", "Congratulation You Won!");
	});

	it("Computer  choose Paper and wins", () => {
		cy.get('[data-cy="rock"]').click();
		cy.get('[data-cy="my-choice"]').should("be.visible");
		cy.get('[data-cy=play-game]').click();
		cy.get('[data-cy="computer"]').should("be.visible");
		cy.get('[data-cy="result"]').should("contain", "Computer Won!");
	});
});

// describe("User select  Paper ", () => {
// 	beforeEach(() => {
// 		cy.visit("/",{
// 		onBeforeLoad(window) {
// 			cy.stub(window.Math, "random").returns(0)
// 		}
// 	})
// });
  
// 	it("Computer  choose Rock and loses ", () => {
// 		cy.get('[data-cy="paper"]').click();
// 		cy.get('[data-cy="my-choice"]').should("contain", "paper");
// 		cy.get('[data-cy="computer-selection"]').should("contain","rock");
// 		cy.get('[data-cy="result"]').should("contain", "Congratulation You Won!");
// 	});

// 	it("Computer  choose Scissors and Won", () => {
// 		cy.get('[data-cy="paper"]').click();
// 		cy.get('[data-cy="my-choice"]').should("contain", "paper");
// 		cy.get('[data-cy="computer"]').should("contain","scissors");
// 		cy.get('[data-cy="result"]').should("contain", "Computer Won!");
// 	});

// 	it("Computer  choose Paper it is a draw", () => {
// 		cy.get('[data-cy="paper"]').click();
// 		cy.get('[data-cy="my-choice"]').should("contain",	"paper");
// 		cy.get('[data-cy="computer"]').should("contain","paper");
// 		cy.get('[data-cy="result"]').should("contain", "It is a draw!");
// 	});
// });


// describe("User select  Scissor ", () => {
// 	beforeEach(() => {
// 		cy.visit("/",{
// 		onBeforeLoad(window) {
// 			cy.stub(window.Math, "random").returns(0)
// 		}
// 	})
// });
  
// 	it("Computer  choose Rock and Won ", () => {
// 		cy.get('[data-cy="scissor"]').click();
// 		cy.get('[data-cy="my-choice"]').should("contain", "scissor");

// 		cy.get('[data-cy="computer"]').should("contain","rock");
// 		cy.get('[data-cy="result"]').should("contain", "Computer Won");
// 	});

// 	it("Computer  choose Scissor it is a draw", () => {
// 		cy.get('[data-cy="scissor"]').click();
// 		cy.get('[data-cy="my-choice"]').should("contain", "scissor");
// 		cy.get('[data-cy="computer"]').should("contain","scissor");
// 		cy.get('[data-cy="result"]').should("contain", "It is a draw!");
// 	});

// 	it("Computer  choose Paper it is a draw", () => {
// 		cy.get('[data-cy="scissor"]').click();
// 		cy.get('[data-cy="my-choice"]').should("contain",	"scissor");
// 		cy.get('[data-cy="computer"]').should("contain","paper");
// 		cy.get('[data-cy="result"]').should("contain", "Congratulation You Won!");
// 	});
// });

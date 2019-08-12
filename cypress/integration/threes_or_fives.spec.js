describe("Threes or Fives", () => {
  describe("Threes", () => {
    it("has three cards", () => {
      cy.visit("/");

      cy.get("#wtfracsip-rolls .container .columns .column").should(
        "have.length",
        3
      );
    });

    it('has "Fives" button enabled', () => {
      cy.visit("/");

      cy.get("#wtfracsip-rolls .container .buttons").within(() => {
        cy.getByText("Fives")
          .should("exist")
          .should("not.be.disabled");
      });
    });

    it('has "Threes" button disabled', () => {
      cy.visit("/");

      cy.get("#wtfracsip-rolls .container .buttons").within(() => {
        cy.getByText("Threes")
          .should("exist")
          .should("be.disabled");
      });
    });

    it("has all three roles showing", () => {
      cy.visit("/");

      cy.get("#wtfracsip-rolls").within(() => {
        cy.getByText("jungle").should("exist");
        cy.getByText("bottom").should("exist");
        cy.getByText("top").should("exist");
      });
    });
  });

  describe("Fives", () => {
    it("has five cards", () => {
      cy.visit("/", {
        onBeforeLoad(win) {
          win.fives = true;
        }
      });

      cy.get("#wtfracsip-rolls .container .columns .column").should(
        "have.length",
        5
      );
    });

    it('has "Threes" button enabled', () => {
      cy.visit("/", {
        onBeforeLoad(win) {
          win.fives = true;
        }
      });

      cy.get("#wtfracsip-rolls .container .buttons").within(() => {
        cy.getByText("Threes")
          .should("exist")
          .should("not.be.disabled");
      });
    });

    it('has "Fives" button disabled', () => {
      cy.visit("/", {
        onBeforeLoad(win) {
          win.fives = true;
        }
      });

      cy.get("#wtfracsip-rolls .container .buttons").within(() => {
        cy.getByText("Fives")
          .should("exist")
          .should("be.disabled");
      });
    });

    it("has all five roles showing", () => {
      cy.visit("/", {
        onBeforeLoad(win) {
          win.fives = true;
        }
      });

      cy.get("#wtfracsip-rolls").within(() => {
        cy.getByText("jungle").should("exist");
        cy.getByText("middle").should("exist");
        cy.getByText("bottom").should("exist");
        cy.getByText("support").should("exist");
        cy.getByText("top").should("exist");
      });
    });
  });

  describe('clicking on "Fives" button when "Threes" is active', () => {
    it('disables the "Fives" button', () => {
      cy.visit("/");

      cy.get("#wtfracsip-rolls .container .buttons").within(() => {
        cy.getByText("Fives")
          .should("exist")
          .should("not.be.disabled")
          .click()
          .should("be.disabled");
      });
    });

    it('enables the "Threes" button', () => {
      cy.visit("/");

      cy.get("#wtfracsip-rolls .container .buttons").within(() => {
        cy.getByText("Threes")
          .should("exist")
          .should("be.disabled");

        cy.getByText("Fives").click();

        cy.getByText("Threes")
          .should("exist")
          .should("not.be.disabled");
      });
    });

    it("changes the number of cards from 3 to 5", () => {
      cy.visit("/");

      cy.get("#wtfracsip-rolls .container .columns .column").should(
        "have.length",
        3
      );

      cy.getByText("Fives").click();

      cy.get("#wtfracsip-rolls .container .columns .column").should(
        "have.length",
        5
      );
    });
  });

  describe('clicking on "Threes" button when "Fives" is active', () => {
    it('disables the "Threes" button', () => {
      cy.visit("/", {
        onBeforeLoad(win) {
          win.fives = true;
        }
      });

      cy.get("#wtfracsip-rolls .container .buttons").within(() => {
        cy.getByText("Threes")
          .should("exist")
          .should("not.be.disabled")
          .click()
          .should("be.disabled");
      });
    });

    it('enables the "Fives" button', () => {
      cy.visit("/", {
        onBeforeLoad(win) {
          win.fives = true;
        }
      });

      cy.get("#wtfracsip-rolls .container .buttons").within(() => {
        cy.getByText("Fives")
          .should("exist")
          .should("be.disabled");

        cy.getByText("Threes").click();

        cy.getByText("Fives")
          .should("exist")
          .should("not.be.disabled");
      });
    });

    it("changes the number of cards from 5 to 3", () => {
      cy.visit("/", {
        onBeforeLoad(win) {
          win.fives = true;
        }
      });

      cy.get("#wtfracsip-rolls .container .columns .column").should(
        "have.length",
        5
      );

      cy.getByText("Threes").click();

      cy.get("#wtfracsip-rolls .container .columns .column").should(
        "have.length",
        3
      );
    });
  });
});

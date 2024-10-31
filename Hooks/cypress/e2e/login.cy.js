describe("Login Page", () => {
  beforeEach(() => {
    // visit site
    cy.visit("https://the-internet.herokuapp.com/login");
  });

  it("Verify if the login button visible", () => {
    cy.get("button.radius").should("be.visible");
  });

  it("Verify if field contains placeholder text", () => {
    cy.get("input").should("have.attr", "placeholder", "Enter your email");
  });

  afterEach(() => {
    // clear cookies
    cy.clearCookies();
  });
});

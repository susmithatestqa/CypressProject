class practicepage {
  elements = {
    title: () => cy.xpath("//h1[contains(text(),'Practice Page')]"),
    homeTab: () => cy.get(".btn.btn-primary").first(),
    practiceTab: () => cy.get(".btn.btn-primary").eq(2),
    loginTab: () => cy.get(".btn.btn-primary").eq(3),
    signUpTav: () => cy.get(".btn.btn-primary").eq(4),
  };
  visit() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  }
  clickHomeTab() {
    this.elements.homeTab().click();
  }
}
module.exports = new practicepage();

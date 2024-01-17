import practicepage from "../pages/practicepage";

describe("To test practice page scenarios", () => {

  before("before running the scenario", () => {
    practicepage.visit();
  });
  
  it("To verify home tab", () => {
    practicepage.clickHomeTab();
  });
});

import { screen } from "@testing-library/testcafe";

fixture("Rest").page`http://localhost:3000/account`;

test("should navigate to /account2 page", async (t) => {
  await t
    .expect(screen.findByRole('heading',{ name: 'Screen1' }).exists).ok('Page1 loaded')
    .click(screen.getByRole("button", { name: /navigate/i }))

  // Navigate to the `/account2` screen
  await t
    .wait(1000)
    .expect(screen.getByRole('heading',{ name: 'Screen2' }).exists).ok('Page2 loaded')
});

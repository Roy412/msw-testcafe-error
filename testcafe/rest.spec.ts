import { screen } from "@testing-library/testcafe";

fixture("Rest").page`http://localhost:3000/account`;

test("should do a GET", async (t) => {
  await t
    .expect(screen.findByRole('heading',{ name: 'Loading...' }).exists).ok('Page loaded')
    .click(screen.getByRole("button", { name: /fetch/i }))
    .wait(500)
    .expect(screen.getByRole("heading", { name: 'Success' }).exists).ok('Data Fetch Success')
});

test("should do a GET2", async (t) => {
  await t
    .expect(screen.findByRole('heading',{ name: 'Loading...' }).exists).ok('Page loaded')
    .click(screen.getByRole("button", { name: /fetch/i }))
    .wait(500)
    .expect(screen.getByRole("heading", { name: 'Success' }).exists).ok('Data Fetch Success')
});

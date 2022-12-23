import { screen } from "@testing-library/testcafe";

fixture("Rest").page`http://localhost:3000/`;

test("should render the page correctly", async (t) => {
  await t
    .expect(screen.findByRole('heading',{ name: 'Loading...' }).exists).ok('Page loaded')
});

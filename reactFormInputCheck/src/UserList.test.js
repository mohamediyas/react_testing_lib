import { render, screen, within } from "@testing-library/react";

import user from "@testing-library/user-event";

import UserList from "./UserList";

// beforeEach(() => {

// })

test("render one row per user", () => {
  const users = [
    { name: "John", email: "x7uJ6@example.com" },
    { name: "sam", email: "sam@example.com" },
  ];

  const { container } = render(<UserList users={users} />);

  //   eslint-disable-next-line testing-library/no-container
  const rows = container.querySelectorAll("tbody tr");

  //   console.log(rows);

  //   screen.logTestingPlaygroundURL();

  //   const rows = screen.getAllByRole("row");

  //   const rows = within(screen.getByTestId("users")).getAllByRole("row");

  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  const users = [
    { name: "John", email: "x7uJ6@example.com" },
    { name: "sam", email: "sam@example.com" },
  ];

  render(<UserList users={users} />);

  //   screen.logTestingPlaygroundURL();
  for (let user of users) {
    const email = screen.getByRole("cell", {
      name: user.email,
    });

    const name = screen.getByRole("cell", {
      name: user.name,
    });

    expect(email).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  }
});

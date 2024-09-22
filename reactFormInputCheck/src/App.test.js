import { render, screen } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("can receive a new user and show it on a list", () => {
  render(<App />);

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });

  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("John");

  user.click(emailInput);
  user.keyboard("x7uJ6@example.com");

  user.click(button);

  // screen.debug();

  const name = screen.getByRole("cell", {
    name: "John",
  });
  const email = screen.getByRole("cell", {
    name: "x7uJ6@example.com",
  });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});

test("empties the form after submission", () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });

  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  const button = screen.getByRole("button");

  user.click(nameInput);
  user.keyboard("John");

  user.click(emailInput);
  user.keyboard("x7uJ6@example.com");

  user.click(button);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});

import { render, screen } from "@testing-library/react";
import User from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button ", () => {
  // render the component
  render(<UserForm />);

  const inputs = screen.getAllByRole("textbox");

  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();

  // manipulate the component
});

test("it calls onUserAdd with the form data", () => {
  // Not the best ways to implemented

  //   const argList = [];

  //   const callback = (...args) => {
  //     argList.push(args);
  //   };

  //   render(<UserForm onUserAdd={callback} />);

  const mock = jest.fn();

  render(<UserForm onUserAdd={mock} />);

  //   const [nameInput, emailInput] = screen.getAllByRole("textbox");

  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });

  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  User.click(nameInput);
  User.keyboard("John");

  User.click(emailInput);
  User.keyboard("x7uJ6@example.com");
  4;

  const button = screen.getByRole("button");

  User.click(button);

  //   expect(argList).toHaveLength(1);
  //   expect(argList[0][0]).toEqual({ name: "John", email: "x7uJ6@example.com" });

  expect(mock).toHaveBeenCalled();

  expect(mock).toHaveBeenCalledWith({
    name: "John",
    email: "x7uJ6@example.com",
  });
});

import React from "react";
import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Result from "../components/Result";

let container: any;

test("is equal to 34", () => {
  const { container } = render(<Result value="34" />);
  expect(container.getElementsByClassName("result")[0].textContent).toBe("34");
});

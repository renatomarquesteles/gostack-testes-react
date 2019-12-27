import React from "react";
import { render, fireEvent } from "@testing-library/react";

import TechList from "~/components/TechList";

describe("TechList component", () => {
  it("should be able to add a new tech", () => {
    const { getByText, getByTestId, getByLabelText, debug } = render(
      <TechList />
    );

    debug();

    fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });
    fireEvent.submit(getByTestId("tech-form"));

    debug();

    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByLabelText("Tech")).toHaveValue("");
  });
});

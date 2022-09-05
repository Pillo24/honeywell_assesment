import { render } from "@testing-library/react";
import React from "react"
import { FormButton } from "./FormButton"

describe("FormButton component", () => {
    it("should pass native attributes", () => {
        const { getByRole } = render(
            <FormButton className="class" type="button" id="test" />
        );

        const btn = getByRole("button");

        expect(btn).toHaveClass("class");
        expect(btn).toHaveAttribute("type", "button");
        expect(btn).toHaveAttribute("id", "test");
    });
    it("should render the specified content", () => {
        const { getByText } = render(
            <FormButton type="button">Test</FormButton>
        );

        const btn = getByText('Test');

        expect(btn).toBeInTheDocument();
    });
});
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { FormInput } from "./FormInput";

describe("FormInput component", () => {
    it("should pass native attributes to element", () => {
        const { getByRole } = render(
            <FormInput
                onChange={() => {}}
                label="Label"
                value="value"
                id="id"
                type="text"
                className="class"
            />
        );

        const input = getByRole("textbox");

        expect(input).toHaveClass("class");
        expect(input).toHaveAttribute("id", "id");
    });
    it("should have a label", () => {
        const { queryByLabelText } = render(
            <FormInput
                onChange={() => {}}
                label="Label"
                value="value"
                id="id"
                type="text"
            />
        );

        const input = queryByLabelText("Label");

        expect(input).toBeInTheDocument();
    });
    it("should show validation message if is invalid", () => {
        const { queryByText } = render(
            <FormInput
                onChange={() => {}}
                label="Label" 
                value="value" 
                id="id"
                type="text"
                isInvalid
                validationMessage="validation"
            />
        );

        const message = queryByText("validation");
        expect(message).toBeInTheDocument();
    });
    it("should not show validation message if is valid", () => {
        const { queryByText } = render(
            <FormInput
                onChange={() => {}}
                label="Label"
                value="value"
                id="id"
                type="text"
                isInvalid={false}
                validationMessage="validation"
            />
        );

        const message = queryByText("validation");
        expect(message).not.toBeInTheDocument();
    });
    it("should render help block when clicked", async () => {
        const { getByRole, queryByText } = render(
            <FormInput
                onChange={() => {}}
                label="Label"
                value="value"
                id="id"
                type="text"
            >Help text</FormInput>
        );

        const btn = getByRole("button");

        userEvent.click(btn);
        
        await waitFor(() => {
            const help = queryByText("Help text");

            expect(help).toBeInTheDocument();
        });
    });
});
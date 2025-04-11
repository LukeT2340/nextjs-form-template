import React from "react"
import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Form from "./Form"

vi.mock("@/hooks/useFormStatus", () => ({
	default: () => ({
		formIsOpen: true,
		checkingStatus: false,
	}),
}))

describe("Form component", () => {
	it("should render the form correctly", () => {
		render(<Form setHasSubmitted={() => null} />)
		const form = screen.getByTestId("form")
		expect(form).toBeInTheDocument()
	})

	it("renders all form fields", () => {
		render(<Form setHasSubmitted={() => null} />)

		expect(screen.getByTestId("description")).toBeInTheDocument()
		expect(screen.getByTestId("firstName")).toBeInTheDocument()
		expect(screen.getByTestId("lastName")).toBeInTheDocument()
		expect(screen.getByTestId("email")).toBeInTheDocument()
		expect(screen.getByTestId("mobile")).toBeInTheDocument()
		expect(screen.getByTestId("state")).toBeInTheDocument()
		expect(screen.getByTestId("postcode")).toBeInTheDocument()
	})

	it("shows validation errors when submitting empty form", async () => {
		render(<Form setHasSubmitted={() => null} />)
		const submitButton = screen.getByRole("button", { name: /submit/i })
		await userEvent.click(submitButton)

		expect(
			await screen.findByText("Description must be 25 words or less")
		).toBeInTheDocument()
		expect(
			await screen.findByText("First name is required")
		).toBeInTheDocument()
		expect(await screen.findByText("Last name is required")).toBeInTheDocument()
		expect(await screen.findByText("Email is required")).toBeInTheDocument()
		expect(
			await screen.findByText("Mobile number must be 10 digits")
		).toBeInTheDocument()
		expect(
			await screen.findByText("State must be NSW, QLD, or NT")
		).toBeInTheDocument()
		expect(
			await screen.findByText("Postcode must be a 4-digit number")
		).toBeInTheDocument()
		expect(
			await screen.findByText("You must accept the terms and conditions")
		).toBeInTheDocument()
	})
})

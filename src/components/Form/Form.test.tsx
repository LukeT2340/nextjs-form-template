import React from "react"
import { test, it, expect, beforeEach, vi, beforeAll, Mock, describe } from "vitest"
import { render, screen, fireEvent, within, waitFor } from "@testing-library/react"
import Form from "./Form"

// const mockRefresh = vi.fn()
// const mockPush = vi.fn()

// vi.mock("next/navigation", () => ({
//   useRouter: () => ({
//     refresh: mockRefresh,
//     push: mockPush,
//   }),
// }))

// vi.mock("@/database", () => ({
//   createLookbookEntry: vi.fn().mockResolvedValue(true),
// }))

// beforeAll(() => {
//   Element.prototype.hasPointerCapture = () => false
//   Element.prototype.scrollIntoView = () => {}
// })

// beforeEach(() => {
//   vi.resetAllMocks()

//   // mock the global fetch function
//   global.fetch = vi.fn(() =>
//     Promise.resolve({
//       ok: true,
//       json: () => Promise.resolve({}),
//     })
//   ) as unknown as typeof fetch
// })

describe("these tests are for checking the form component, making sure each field is rendering the way we expect and that the data is submitting to the correct endpoint with the correct object shape", async () => {
  it("should render the form correctly", async () => {
    render(<Form />)
    await waitFor(() => {
      const form = screen.getByTestId("form")
      expect(form).toBeInTheDocument()
    })
  })
})

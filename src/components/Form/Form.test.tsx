import { test, expect, beforeEach, vi, beforeAll, Mock } from "vitest"
import { render, screen, fireEvent, within } from "@testing-library/react"
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

test("form renders correctly", () => {
  render(<Form setHasSubmitted={(x) => null} />)

  const form = screen.getByTestId("form")
  expect(form).toBeInTheDocument()
})

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("App component", () => {
  test("App renders", () => {
    render(<App/>)

    // screen.debug()
    expect(screen.getByRole("list")).toBeInTheDocument()
    expect(screen.getByText(/find course/i)).toBeInTheDocument()
  })

  test("typing in searchbox works", () => {
    render(<App/>)

    expect(screen.queryByDisplayValue(/React/)).toBeNull()
    userEvent.type(screen.getByRole("textbox"), "React")

    expect(screen.getByDisplayValue("React")).toBeInTheDocument()
  })

  test("search filter is working", () => {
    render(<App/>)

    expect(screen.getByText(/html/i)).toBeInTheDocument()
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument()
    userEvent.type(screen.getByRole("textbox"), "script")

    expect(screen.queryByText(/html/i)).toBeNull()
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument()
  })
})
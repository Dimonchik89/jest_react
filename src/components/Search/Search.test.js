import { screen, render } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Search from "./Search"

const onChange = jest.fn();

describe("Search component", () => {
    test('renders Search', () => {
        render(
                <Search value="" onChange={onChange}>
                    Find:
                </Search>
            )
        
        expect(screen.getByText(/find/i)).toBeInTheDocument()
    })

    test("renders without children", () => {
        render(<Search value="" onChange={onChange}/>)

        expect(screen.getByText(/search/i)).toBeInTheDocument()
    })

    test('render without placeholder', () => {
        render(<Search value="" onChange={onChange}/>)

        expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()
    })

    test('custom placeholder', () => {
        render(<Search value="" onChange={onChange} placeholder="find post"/>)

        expect(screen.getByPlaceholderText(/find post/i)).toBeInTheDocument()
    })

    test('onChange works', () => {
        render(
            <Search value="" onChange={onChange}>
                Find:
            </Search>
        )

        userEvent.type(screen.getByRole('textbox'), "React")
        
        // screen.debug()
        expect(onChange).toHaveBeenCalledTimes(5)
    })

    test("dinamyc styles works", () => {
        render(<Search value="abc" onChange={onChange}/>)

        expect(screen.getByRole("textbox")).toHaveClass('input')
        expect(screen.getByRole('textbox')).toHaveClass('filled')
        expect(screen.getByText('Search')).toHaveClass('label')

        // expect(screen.getByText("Search")).toHaveClass('display: flex')
    })

    test("search snapshot", () => {
        const search = render(
            <Search value="" onChange={onChange}>
                Search:
            </Search>
        )

        expect(screen).toMatchSnapshot()
    })
})
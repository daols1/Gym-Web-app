import { render, screen } from "@testing-library/react"
import HSection1 from "./HSection1"

test('HSection1 is there', () => {
    render(<HSection1 />)
    const textElement = screen.getByText(/About Us/i)
    expect(textElement).toBeInTheDocument
})
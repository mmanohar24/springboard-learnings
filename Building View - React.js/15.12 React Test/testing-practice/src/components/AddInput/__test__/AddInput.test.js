import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockSetTodo = jest.fn();

describe("AddInput", () => {

    test('should render input element', async () => {
        render(<AddInput todos={[]} setTodos={mockSetTodo} />);
        const placeHeaderElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(placeHeaderElement).toBeInTheDocument();
    })


    test('should be able to type values in the input field', async () => {
        render(<AddInput todos={[]} setTodos={mockSetTodo} />);
        const placeHeaderElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(placeHeaderElement, { target: { value: "Go grocery shopping" } })
        expect(placeHeaderElement.value).toBe("Go grocery shopping");
    })

    test('should have empty input when add button is clicked', async () => {
        render(<AddInput todos={[]} setTodos={mockSetTodo} />);
        const placeHeaderElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button", { name: /Add/ })
        fireEvent.change(placeHeaderElement, { target: { value: "Go grocery shopping" } })
        fireEvent.click(buttonElement)
        expect(placeHeaderElement.value).toBe("");
    })
})


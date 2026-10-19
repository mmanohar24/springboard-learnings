import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom";

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i })
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: { value: task } });
        fireEvent.click(buttonElement);
    }
    )
}

// const mockSetTodo = jest.fn();

describe("Todo", () => {

    test('should render input element', async () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        expect(divElement).toBeInTheDocument();
    })

    test('should render all input element', async () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping", "Wash my Car", "Pet my dog"]);
        const divElements = screen.getAllByTestId("task-container");
        expect(divElements.length).toBe(3)
    })

    test('should check if the task does not have completed class when initially render', async () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        expect(divElement).not.toHaveClass("todo-item-active");
    })

    test('should render the completed class when clicked', async () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        fireEvent.click(divElement);
        expect(divElement).toHaveClass("todo-item-active");
    })
}
)
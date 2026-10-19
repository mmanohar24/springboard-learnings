import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

/**
 * Test Structure
 * 1. Render a component we need to test
    * test("what we need to test", ()=>{})
 * 2. Find elements we want to interact with
 * 3. Interact with those elements
 * 4. Assert the results we're expected
 */


const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
}

// Unit Testing
test('should render total number of tasks', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
});

test('should render task when number of incomplete task is one', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
});

test('should render always true', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeTruthy();
});

test('should render if elements are visible to the user', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    // Add opacity style to the element and check this
    expect(paragraphElement).toBeVisible();
});

test('should render if element contain particular HTML Element', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    // Add opacity style to the element and check this
    expect(paragraphElement).toContainHTML("p");
});

test('should render element to have text content', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByTestId("para")
    // Add opacity style to the element and check this
    expect(paragraphElement).toHaveTextContent("1 task left");
});


// test('should not render elements to the user', () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     // Add opacity style to the element and check this
//     expect(paragraphElement).not.toBeVisible();
// });


test('should render element not be falsy', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByTestId("para")
    // Add opacity style to the element and check this
    expect(paragraphElement).not.toBeFalsy();
});

test('should render checking based on the text', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragraphElement = screen.getByTestId("para")
    // Add opacity style to the element and check this
    expect(paragraphElement.textContent).toBe('1 task left')
});

describe("TodoFooter", () => {

    // We can also have nested describe block
    // describe("", () => { })

    test('should render total number of tasks', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={5} />);
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
    });

    test('should render task when number of incomplete task is one', () => {
        render(<MockTodoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
    });
})
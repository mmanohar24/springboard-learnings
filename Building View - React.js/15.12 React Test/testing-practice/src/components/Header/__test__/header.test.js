import { render, screen } from '@testing-library/react';
import Header from "../Header"

/**
 * Test Structure
 * 1. Render a component we need to test
    * test("what we need to test", ()=>{})
 * 2. Find elements we want to interact with
 * 3. Interact with those elements
 * 4. Assert the results we're expected
 */


// Unit Testing

describe('Header', () => {
    test('render title prop', () => {
        render(<Header title="My Header" />);
        const headingElement = screen.getByText(/my header/i);
        expect(headingElement).toBeInTheDocument();
    });
})


// test('render title prop by using Role', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByRole("heading")
//     expect(headingElement).toBeInTheDocument();
// })

// test('render title prop by using Role', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByRole("heading", { name: "My Header" })
//     expect(headingElement).toBeInTheDocument();
// });

// test('get title by using title property in heading tag', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByTitle("Header")
//     expect(headingElement).toBeInTheDocument();
// });

// test('render title using testId', () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.getByTestId("header2")
//     expect(headingElement).toBeInTheDocument();
// });

// // Find By
// test('render title prop using findbyText', async () => {
//     render(<Header title="My Header" />);
//     const headingElement = await screen.findByText(/my header/i);
//     expect(headingElement).toBeInTheDocument();
// });

// // Query By
// test('render title prop using QueryBy', async () => {
//     render(<Header title="My Header" />);
//     const headingElement = screen.queryByText(/users/i);
//     expect(headingElement).not.toBeInTheDocument();
// });

// // GetAllBy
// test('render title prop using GetAllBy', async () => {
//     render(<Header title="My Header" />);
//     const headingElements = screen.getAllByRole("heading");
//     expect(headingElements.length).toBe(2);
// });
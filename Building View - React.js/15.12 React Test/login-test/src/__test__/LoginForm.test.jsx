import { render, screen } from '@testing-library/react';
import LoginForm from '../Components/LoginForm';


test('should component loaded', () => {
    // steps for testing heading element loaded
    render(<LoginForm />);
    const headingElement = screen.queryByText(/Login/);
    expect(headingElement).toBeInTheDocument();
});

test('should inputs are empty', () => {

    const { container } = render(<LoginForm />);
    const inputElement = container.querySelectorAll("input");
    inputElement.forEach(input => {
        expect(input).toHaveValue("");
    }
    )
}
)
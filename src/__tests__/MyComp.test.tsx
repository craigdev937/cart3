import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { test, expect } from "@rstest/core"
import { MyComp } from "../components/MyComp";

test("MyComp renders with initial count", () => {
    render(<MyComp initialCount={5} />);
    const countDisplay = screen.getByTestId("count-display");
    expect(countDisplay).toHaveTextContent("Count: 5");
});

test('MyComponent increments count on button click', () => {
    render(<MyComp />);
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const countDisplay = screen.getByTestId('count-display');

    fireEvent.click(incrementButton);
    expect(countDisplay).toHaveTextContent('Count: 1');
});

test('MyComponent decrements count on button click', () => {
    render(<MyComp initialCount={10} />);
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });
    const countDisplay = screen.getByTestId('count-display');

    fireEvent.click(decrementButton);
    expect(countDisplay).toHaveTextContent('Count: 9');
});



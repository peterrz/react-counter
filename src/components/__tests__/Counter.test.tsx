// src/components/__tests__/Counter.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

describe('Counter Component', () => {
  test('renders with initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('count-display')).toHaveTextContent('0');
  });

  test('renders with custom initial count', () => {
    render(<Counter initialCount={5} />);
    expect(screen.getByTestId('count-display')).toHaveTextContent('5');
  });

  test('increments count when increment button is clicked', () => {
    render(<Counter />);
    const incrementBtn = screen.getByTestId('increment-btn');
    const countDisplay = screen.getByTestId('count-display');

    fireEvent.click(incrementBtn);
    expect(countDisplay).toHaveTextContent('1');

    fireEvent.click(incrementBtn);
    expect(countDisplay).toHaveTextContent('2');
  });

  test('decrements count when decrement button is clicked', () => {
    render(<Counter initialCount={3} />);
    const decrementBtn = screen.getByTestId('decrement-btn');
    const countDisplay = screen.getByTestId('count-display');

    fireEvent.click(decrementBtn);
    expect(countDisplay).toHaveTextContent('2');

    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);
    expect(countDisplay).toHaveTextContent('0');
  });

  test('does not go below zero', () => {
    render(<Counter />);
    const decrementBtn = screen.getByTestId('decrement-btn');
    const countDisplay = screen.getByTestId('count-display');

    fireEvent.click(decrementBtn);
    expect(countDisplay).toHaveTextContent('0');

    fireEvent.click(decrementBtn);
    expect(countDisplay).toHaveTextContent('0'); 
  });
});
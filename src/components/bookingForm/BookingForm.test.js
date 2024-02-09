import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('renders BookingForm component', () => {
    render(<BookingForm />);
    expect(screen.getByText(/Little Lemon Booking Form/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Make Your Reservation/i })).toBeInTheDocument();
  });

  test('validates inputs before submitting the form', async () => {
    render(<BookingForm />);
    
    // Try submitting the form without filling out the inputs
    fireEvent.click(screen.getByRole('button', { name: /Make Your Reservation/i }));

    // Wait for the feedback message to appear
    const feedback = await screen.findByText(/Please ensure all fields are filled correctly and the selected time is available./i);
    expect(feedback).toBeInTheDocument();
    expect(feedback).toHaveClass('error');
  });

  test('submits the form with valid inputs', async () => {
    render(<BookingForm />);

    // Fill out the inputs
    fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2024-02-10' } });
    fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: '3' } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Birthday' } });

    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /Make Your Reservation/i }));

    // Wait for the feedback message to appear
    await waitFor(() => {
      const feedback = screen.queryByText(/Your reservation submitted successfully./i);
      expect(feedback).toBeInTheDocument();
      expect(feedback).toHaveClass('success');
    });
  });
});

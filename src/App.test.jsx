import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest';
import App from "./App";
import LoginForm from "./components/LoginForm/index.js";

describe('App', () => {
  it('test modal', () => {
    render(<App />);
    const login = screen.getByText(/Login/i)
    fireEvent.click(login)

    const modal = screen.getByRole('dialog')
    expect(modal).toBeVisible()
  })

  it('test valid inputs', () => {
    render(<LoginForm show={true} />);

    const emailInput = screen.getByLabelText('email');
    const passwordInput = screen.getByLabelText('password')
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    expect(emailInput).toHaveAttribute("type", "email");
    expect(passwordInput).toHaveAttribute("type", "password");

    fireEvent.change(emailInput, { target: { value: 'test@mail.com' } })
    fireEvent.change(passwordInput, { target: { value: '123123' } })

    expect(emailInput.value).toBe('test@mail.com')
    expect(passwordInput.value).toBe('123123')

    expect(screen.queryByTestId("email-error")).not.toBeInTheDocument();
    expect(screen.queryByTestId("password-error")).not.toBeInTheDocument();
  });

  test('invalid input', () => {
    render(<LoginForm show={true} />);

    const emailInput = screen.getByLabelText('email');
    const passwordInput = screen.getByLabelText('password')

    fireEvent.change(emailInput, { target: { value: 'test' } })
    fireEvent.change(passwordInput, { target: { value: '1' } })

    expect(screen.getByText('submit')).toHaveAttribute('disabled')
  })
});
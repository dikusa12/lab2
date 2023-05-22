import {render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Fetch from './fetch'
import App from "./App.jsx";

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<App />)

  // ACT
  await userEvent.click(screen.getByText('Load Greeting'))
  await screen.findByRole('heading')

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})
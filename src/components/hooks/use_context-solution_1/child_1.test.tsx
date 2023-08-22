import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {Child1} from './child_1'

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Child1 />)

  // ACT
//   await userEvent.click(screen.getByText('Load Greeting'))
//   await screen.findByRole('heading')

//   // ASSERT
//   expect(screen.getByRole('heading')).toHaveTextContent('hello there')
//   expect(screen.getByRole('button')).toBeDisabled()
})
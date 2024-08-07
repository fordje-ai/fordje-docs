import { render, screen } from '@testing-library/react'
import Results from './Results'

describe('Results page component', () => {
  it('should render with success', () => {
    render(<Results />)

    expect(
      screen.getByRole('heading', {
        name: 'Results',
        level: 1
      })
    ).toBeInTheDocument()
  })
})

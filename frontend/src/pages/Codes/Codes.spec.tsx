import { render, screen } from '@testing-library/react'
import Codes from './Codes'

describe('Results page component', () => {
  it('should render with success', () => {
    render(<Codes />)

    expect(
      screen.getByRole('heading', {
        name: 'Codes',
        level: 1
      })
    ).toBeInTheDocument()
  })
})

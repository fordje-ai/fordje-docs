import { render, screen } from '@testing-library/react'
import CodesList from './CodesList'

describe('Home page component', () => {
  it('should render with success', () => {
    render(<CodesList />)

    expect(
      screen.getByRole('heading', {
        name: 'CodesList',
        level: 1
      })
    ).toBeInTheDocument()
  })
})

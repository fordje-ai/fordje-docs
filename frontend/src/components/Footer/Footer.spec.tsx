import { fireEvent, render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '@/contexts'
import { paths } from '@/router'
import Footer from './Footer'

const providerUserUnloggedMock = {
  signIn: jest.fn(),
  signOut: jest.fn(),
  user: undefined,
  isAuthenticated: false,
  loadingUserData: false
}

const providerUserLoggedMock = {
  signIn: jest.fn(),
  signOut: jest.fn(),
  user: {
    email: 'email@site.com',
    permissions: ['users.list', 'metrics.list'],
    roles: []
  },
  isAuthenticated: true,
  loadingUserData: false
}

type WrapperProps = {
  children: ReactNode
}

function wrapper(props: WrapperProps) {
  const { children } = props

  return <MemoryRouter>{children}</MemoryRouter>
}

describe('Footer component', () => {
  it('should render with success', () => {
    render(
      <AuthContext.Provider value={providerUserUnloggedMock}>
        <Footer />
      </AuthContext.Provider>,
      { wrapper }
    )

    expect(screen.getByText(/Login/)).toHaveAttribute('href', paths.LOGIN_PATH)
  })
})

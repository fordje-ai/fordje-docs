import { Routes, Route } from 'react-router-dom'
import { useRoutePaths } from '@/hooks'
import { Home, Login, Search, Register, Users } from '@/pages'
import { PrivateRoute } from '../PrivateRoute'
import { PublicRoute } from '../PublicRoute'

function Router() {
  const {
    LOGIN_PATH,
    SEARCH_PATH,
    REGISTER_PATH,
    ROOT_PATH,
    USERS_PATH,
    USER_PATH
  } = useRoutePaths()

  return (
    <Routes>
      <Route
        path={ROOT_PATH}
        element={
          <PrivateRoute redirectTo={LOGIN_PATH}>
            <Home />
          </PrivateRoute>
        }
      />

      <Route
        path={LOGIN_PATH}
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route path={REGISTER_PATH} element={<Register />} />

      <Route
        path={SEARCH_PATH}
        element={
          <PrivateRoute redirectTo={LOGIN_PATH}>
            <Search />
          </PrivateRoute>
        }
      />

      <Route
        path={USERS_PATH}
        element={
          <PrivateRoute permissions={['users.list', 'users.create']}>
            <Users />
          </PrivateRoute>
        }
      />

      <Route
        path={USER_PATH}
        element={
          <PrivateRoute permissions={['users.list', 'users.create']}>
            <Users />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}

export default Router

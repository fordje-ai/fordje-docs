import { Routes, Route } from 'react-router-dom'
import { useRoutePaths } from '@/hooks'
import { Codes, CodesList, Home, Login, Register, Review, Results, Profile } from '@/pages'
import { AuthenticationGuard } from '@/components/authentication-guard'
import { CallbackPage } from '@/pages/callback-page'

function Router() {
  const {
    CODES_PATH,
    CODESLIST_PATH,
    LOGIN_PATH,
    REGISTER_PATH,
    REVIEW_PATH,
    RESULTS_PATH,
    ROOT_PATH,
    PROFILE_PATH,
    UPLOAD_PATH
  } = useRoutePaths()

  return (
    <Routes>
      <Route
        path={ROOT_PATH}
        element={<Home />}
      />
      <Route path="/callback" element={<CallbackPage />} />

      <Route path={LOGIN_PATH} element={<Login />} />
      <Route path={UPLOAD_PATH} element={<AuthenticationGuard component={Home} />} />
      <Route path={PROFILE_PATH} element={<AuthenticationGuard component={Profile} />} />
      <Route path={REGISTER_PATH} element={<Register />} />
      <Route path={REVIEW_PATH} element={<Review />} />
      <Route path={RESULTS_PATH} element={<Results />} />
      <Route path={CODESLIST_PATH} element={<CodesList />} />
      <Route path={CODES_PATH} element={<Codes />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  )
}

export default Router

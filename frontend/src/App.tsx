import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom'
import { Footer, Loader, NavBar } from './components'
import { AuthProvider } from './providers'
import { Router } from './router'

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <>
        <NavBar />
        <Loader />
        <Footer />
      </>
    );
  }
  return (
    <>
      <NavBar />
      <Router />
      <Footer />
    </>
  )
}

export default App

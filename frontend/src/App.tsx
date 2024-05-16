import { BrowserRouter } from 'react-router-dom'
import { Footer, NavBar } from './components'
import { AuthProvider } from './providers'
import { Router } from './router'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Router />
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App

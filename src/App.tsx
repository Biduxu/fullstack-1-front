import { AuthProvider } from './providers/AuthProvider'
import { RoutesMain } from './routes'
import { Global } from './styles/global'

function App() {

  return (
    <>
      <Global/>
      <AuthProvider>
        <RoutesMain/>
      </AuthProvider>
    </>
  )
}

export default App

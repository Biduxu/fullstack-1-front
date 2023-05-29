import { AuthProvider } from './providers/AuthProvider'
import { ModalProvider } from './providers/ModalProvider'
import { RoutesMain } from './routes'
import { Global } from './styles/global'

function App() {

  return (
    <>
      <Global/>
      <AuthProvider>
        <ModalProvider>
          <RoutesMain/>
        </ModalProvider>
      </AuthProvider>
    </>
  )
}

export default App

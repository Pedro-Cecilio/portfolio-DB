import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import Routes from './routes/Rotas'
import tema from './temas/temas'
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={tema}>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import theme from './theme/index.jsx'
import { ColorModeSwitcher } from './ColorModeSwicher.jsx'


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
       <App />  
    </QueryClientProvider> 
    </ChakraProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-ph9qtqq1yo1w.frontegg.com',
  clientId: 'f8611759-dd3c-4984-a232-4c82ad815890', 
  appId: 'd63bcb0e-4f7b-424a-bd81-6739f79438a0',

};



const authOptions = {
 // keepSessionAlive: true // Uncomment this in order to maintain the session alive
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FronteggProvider 
    contextOptions={contextOptions} 
    hostedLoginBox={true}
    authOptions={authOptions}>
      
        <App />
    </FronteggProvider>
  </StrictMode>,
)


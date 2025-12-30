import './styles/index.css'

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/router';
import { AuthProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </BrowserRouter>
) 
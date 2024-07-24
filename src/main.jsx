
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorBoundary from './utils/ErrorBoundry.jsx'
import ErrorPage from './Screens/ErrorPage/ErrorPage.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
 <>
     <ErrorBoundary fallback={<ErrorPage />}>
      <App />
    </ErrorBoundary>

  </>
)

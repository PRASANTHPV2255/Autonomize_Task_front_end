

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Screen from './Screens/HomePage/Home'
import ErrorPage from './Screens/ErrorPage/ErrorPage'
import Followers from './components/Followers/Followers'

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Screen />} />
          <Route  path='/followers' element={<Followers />} />
          <Route  path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App

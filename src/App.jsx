

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Screen from './Screens/HomePage/Home'
import ErrorPage from './Screens/ErrorPage/ErrorPage'
import Repos from './Screens/Repos/Repos'




function App() {

  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Screen/>}/>
        <Route path="/repos" element={<Repos />} />
        <Route exact path="*" element={<ErrorPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import { appRoutes } from './config/routes.config'

import DefaulLayout from './layouts/Default'
import SliderPage from './pages/Slider'
import DetailsPage from './pages/Details'

import './assets/scss/index.scss'


const App = () => {

  return (
    <>
      <Routes>
        <Route element={  <DefaulLayout />} >
          <Route path={ appRoutes.slider } element={<SliderPage />} />
          <Route path={ appRoutes.details } element={<DetailsPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

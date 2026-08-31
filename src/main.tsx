import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Automotive from './pages/Automotive'
import RailTransportation from './pages/RailTransportation'
import IndustrialEquipment from './pages/IndustrialEquipment'
import HealthcareMedtech from './pages/HealthcareMedtech'
import ApplyJob from './pages/ApplyJob'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="careers" element={<Careers />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="automotive" element={<Automotive />} />
          <Route path="rail-transportation" element={<RailTransportation />} />
          <Route path="industrial-equipment" element={<IndustrialEquipment />} />
          <Route path="healthcare" element={<HealthcareMedtech />} />
          <Route path="apply" element={<ApplyJob />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

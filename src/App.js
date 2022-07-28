import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/Home'

import TeamMatches from './components/TeamMatches'

import NotFound from './components/NotFound'

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/team-matches/:id" element={<TeamMatches />} />
      <Route element={<NotFound />} />
    </Routes>
  </Router>
)

export default App

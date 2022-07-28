import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './components/Home'

import TeamMatches from './components/TeamMatches'

import NotFound from './components/NotFound'

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFound} />
    </Routes>
  </Router>
)

export default App

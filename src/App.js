import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Header from './components/Header';
import Coins from './components/Coins';
import Exchanges from './components/Exchanges';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/coins" element={<Coins/>}/>
      <Route path="/exchanges" element={<Exchanges/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className='min-h-screen container mx-auto py-14'>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products/:id" element={<ProductScreen />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
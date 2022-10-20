import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import LoadingOutline from './components/LoadingOutline';

const HomeScreen = React.lazy(() => import('./screens/HomeScreen'));
const ProductScreen = React.lazy(() => import('./screens/ProductScreen'));
const CartScreen = React.lazy(() => import('./screens/CartScreen'));

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <div className='min-h-screen container mx-auto py-14'>
        <Suspense fallback={<LoadingOutline />}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/api/products/:id" element={<ProductScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  )
}

export default App
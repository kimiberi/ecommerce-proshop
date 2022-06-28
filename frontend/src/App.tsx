import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className='min-h-screen md:container md:mx-auto'>
        <h1 className='text-2xl font-bold leading-7 sm:text-3xl sm:truncate'>Welcome to ProShop</h1>
      </div>
      <Footer />
    </>
  )
}

export default App
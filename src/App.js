import { Route, Routes } from 'react-router-dom'
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Footer from './components/footer';
import Blog from './components/blog';
import Footer2 from './components/footer2';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [path,setPath] = useState('')
  useEffect(()=>{
    const componentPath = window.location.pathname;
    setPath(componentPath);
  },[])
 
  console.log('componentPath====>', path)
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='blog' element={<Blog />} />
      </Routes>
      {path ===  '/blog' ? <Footer2 /> : <Footer/>}
   
    </div>

  );
}

export default App;

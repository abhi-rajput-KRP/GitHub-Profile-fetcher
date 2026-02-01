import './App.css'
import Header from './components/Header.jsx'
import Footer1 from './components/Footer.jsx'
import { Outlet  } from 'react-router'  

function App() {
    return(
      <>
      <Header />
      <Outlet />
      <Footer1 />
      </> 
    )
}

export default App

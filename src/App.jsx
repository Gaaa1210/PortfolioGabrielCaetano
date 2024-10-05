import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import { Outlet } from 'react-router-dom';

function App() {

  return(
    <>
    <Header/>
    <MainContent/>
    <Outlet/>

    </>

  )
}

export default App

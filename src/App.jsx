
import './App.css'
// import { Route, Redirect } from 'react-router-dom';
import Aboutus from './Component/AboutUs/Aboutus'
import WorkFlow from './Component/AnimationWork/WorkFlow'
import Blog from './Component/Blog/Blog'
import ContactUs from './Component/ContactUs/ContactUs'
import Home from './Component/Home/Home'
import Navbar from './Component/Navbar/Navbar'
import Portfolio from './Component/Portfolio/Portfolio'
import ServicePage from './Component/ServicePage/ServicePage'
import WhoWeAre from './Component/WhoweAre/WhoWeAre'

function App() {
 

  return (
    <>
   {/* <Aboutus/>
   <Portfolio/>
<ContactUs/>
<Blog/>

<ServicePage/> */}
<div style={{with:"100%"}}>
<Navbar/>
<Home/>
<ServicePage/>
<WhoWeAre />
<WorkFlow />
</div>

    </>
  )
}

export default App
